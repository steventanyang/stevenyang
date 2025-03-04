import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { DarkContext } from "../contexts/DarkContext";

const Container = styled.div`
  width: ${(props) => (props.phone ? props.width * 0.8 : props.width * 0.4)}px;
  height: ${(props) =>
    props.expanded
      ? props.phone
        ? props.height * 0.8
        : props.height * 0.75
      : props.phone
      ? 90
      : 100}px;
  background-color: ${(props) => props.background};
  border-radius: ${(props) => props.height * 0.010}px;
  
  ${props => props.rainbowBorder 
    ? `
      border: 4px solid transparent;
      background-image: linear-gradient(${props.background}, ${props.background}),
                        linear-gradient(145deg, #B7EC97, #7BD9CA, #88D1E4, #A0CBEC, #8FC9D9, #7BD9CA, #B7EC97);
      background-origin: border-box;
      background-clip: content-box, border-box;
    `
    : `border: 4px solid ${props.border};`
  }
  
  transition: height 0.5s ease;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  margin: 10px 10px;
`;

const TitleContainer = styled.div`
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const EmojiContainer = styled.div`
  font-size: 35px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Source Code Pro", monospace;
  color: ${(props) => props.color};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const Image = styled.img`
  src: ${(props) => props.src};
  width: 80%;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.9s ease;
  border-radius: 15px;
`;

const TextContainer = styled.div`
  width: 80%;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.9s ease;
  text-align: flex-start;
  margin-top: 40px;
  line-height: 2;
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
  color: ${(props) => props.color};
`;

const LinkContainer = styled.div`
  width: 80%;
  text-align: center;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.9s ease;
  padding: 20px;
`;

const Links = styled.a`
  font-size: 1.2rem;
  font-weight: 900;
  color: ${(props) => props.color};
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const Video = styled.video`
  width: 80%;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.9s ease;
  border-radius: 15px;
  cursor: pointer;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupVideo = styled.video`
  max-width: 90%;
  max-height: 90vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  font-family: "Source Code Pro", monospace;
  cursor: pointer;
  z-index: 1001;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
  }
`;

const ProjectContainer = ({
  background,
  border,
  title,
  emoji,
  image,
  video,
  description,
  more,
  rainbowBorder = false,
}) => {
  const { theme, setTheme } = useContext(DarkContext);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [expanded, setExpanded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const handleExpand = () => {
    if (expanded) {
      setFadeIn(false);
      setTimeout(() => setExpanded((prevExpanded) => !prevExpanded), 150);
    } else {
      setExpanded((prevExpanded) => !prevExpanded);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  const isPhone = windowSize.width < 1250;

  const handleVideoClick = (e) => {
    e.stopPropagation();
    setShowVideoPopup(true);
  };

  return (
    <>
      <Container
        phone={isPhone}
        width={windowSize.width}
        height={windowSize.height}
        background={background}
        border={border}
        expanded={expanded}
        onClick={handleExpand}
        rainbowBorder={rainbowBorder}
      >
        <TitleContainer>
          <EmojiContainer>{emoji}</EmojiContainer>
          <Title color={border}>{title}</Title>
        </TitleContainer>

        {expanded && video ? (
          <VideoContainer>
            <Video
              src={video}
              fadeIn={fadeIn}
              onClick={handleVideoClick}
              controls={false}
              muted
              loop
              autoPlay
            />
          </VideoContainer>
        ) : (
          expanded &&
          image && (
            <ImageContainer>
              <Image src={image} width={windowSize.width} fadeIn={fadeIn} />
            </ImageContainer>
          )
        )}

        {expanded && (
          <TextContainer fadeIn={fadeIn}>
            <Text color={border}>{description}</Text>
          </TextContainer>
        )}

        {expanded && (
          <LinkContainer fadeIn={fadeIn}>
            {more && (
              <Links
                color={border}
                href={more}
                target="_blank"
                rel="noopener noreferrer"
              >
                See More
              </Links>
            )}
          </LinkContainer>
        )}
      </Container>

      {showVideoPopup && (
        <PopupOverlay onClick={() => setShowVideoPopup(false)}>
          <CloseButton onClick={() => setShowVideoPopup(false)}>
            ✕
          </CloseButton>
          <PopupVideo
            src={video}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </PopupOverlay>
      )}
    </>
  );
};

export default ProjectContainer;
