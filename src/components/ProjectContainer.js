import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { DarkContext } from "../contexts/DarkContext";

const Container = styled.div`
  width: ${(props) => (props.phone ? props.width * 0.8 : props.width * 0.4)}px;
  height: ${(props) =>
    props.expanded ? (props.phone ? 450 : 600) : props.phone ? 70 : 100}px;
  background-color: ${(props) => props.background};
  border-radius: ${(props) => props.height * 0.015}px;
  border: 4px solid ${(props) => props.border};
  transition: height 0.5s ease;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
`;

const TitleContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const EmojiContainer = styled.div`
    font-size: 3rem;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-family: 'Source Code Pro', monospace;
`;

const ProjectContainer = ({ title, emoji }) => {
  const { theme, setTheme } = useContext(DarkContext);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isPhone = windowSize.width < 1250;

  return (
    <>
      <Container
        phone={isPhone}
        width={windowSize.width}
        height={windowSize.height}
        background={"#445F3E"}
        border={"#73dd79"}
        expanded={expanded}
        onClick={handleExpand}
      >
        <TitleContainer>
          <EmojiContainer>{emoji}</EmojiContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </Container>
    </>
  );
};

export default ProjectContainer;
