import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { DarkContext } from "../contexts/DarkContext";

const Container = styled.div`
  width: ${(props) => (props.phone ? props.width * 0.8 : props.width * 0.4)}px;
  height: ${(props) =>
    props.expanded
      ? props.phone
        ? props.height * 0.8
        : props.height * 0.7
      : props.phone
      ? 90
      : 100}px;
  background-color: ${(props) => props.background};
  border-radius: ${(props) => props.height * 0.015}px;
  border: 4px solid ${(props) => props.border};
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
  margin-top: 20px;
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

const ProjectContainer = ({
  background,
  border,
  title,
  emoji,
  image,
  description,
  more,
}) => {
  const { theme, setTheme } = useContext(DarkContext);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [expanded, setExpanded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

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
      >
        <TitleContainer>
          <EmojiContainer>{emoji}</EmojiContainer>
          <Title color={border}>{title}</Title>
        </TitleContainer>

        {expanded && (
          <ImageContainer>
            <Image src={image} width={windowSize.width} fadeIn={fadeIn} />
          </ImageContainer>
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
    </>
  );
};

export default ProjectContainer;
