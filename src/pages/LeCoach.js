import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Toggle from "../components/Toggle";
import { DarkContext } from "../contexts/DarkContext";
import Stars from "../components/Stars";
import dashboard from "../images/lecoach/lecoach1.png";
import gameanalysis from "../images/lecoach/lecoach2.png";
import playerperformance from "../images/lecoach/lecoach3.png";
import agent from "../images/lecoach/lecoach4.png";

const PageWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Source Code Pro", monospace;
  color: ${(props) => (props.theme === "light" ? "#222" : props.theme.color)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid
    ${(props) => (props.theme === "light" ? "#ddd" : "#333")};
  padding-bottom: 20px;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;

const ProjectTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#222" : props.theme.color)};
  margin: 0;
`;

const Navigation = styled.div`
  margin-left: auto;
  padding-right: 20px;
`;

const NavLink = styled.div`
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) => (props.theme === "light" ? "#222" : "#FFFFFF")};
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;

    &:hover {
      color: ${(props) => (props.theme === "light" ? "#0D72A8" : "#FFFFFF")};
      text-shadow: ${(props) =>
        props.theme === "light" ? "none" : "0 0 4px #FFFFFF, 0 0 10px #FFFFFF"};
    }
  }
`;

const Arrow = styled.span`
  margin-right: 8px;
`;

const Content = styled.div`
  margin-top: 40px;
`;

const ProjectDescription = styled.div`
  margin-bottom: 60px;
  line-height: 1.7;
  color: ${(props) => (props.theme === "light" ? "#333" : props.theme.color)};
  font-size: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 60px;
  margin-bottom: 30px;
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#222" : props.theme.color)};
`;

const DividerLine = styled.div`
  height: 1px;
  background-color: ${(props) => (props.theme === "light" ? "#ddd" : "#333")};
  margin: ${(props) => props.margin || "80px 0"};
  opacity: ${(props) => props.opacity || "1"};
`;

const ProjectMedia = styled.div`
  margin: 40px 0;
  img,
  video {
    max-width: 100%;
    border-radius: 4px;
  }
`;

const SubsectionContainer = styled.div`
  margin-bottom: 30px;
  margin-left: 25px;
`;

const SubsectionHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${(props) => (props.isOpen ? "20px" : "0")};
  transition: margin 0.3s ease;
`;

const SubsectionTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: ${(props) => (props.theme === "light" ? "#333" : props.theme.color)};
  font-weight: 500;
`;

const ToggleIcon = styled.span`
  margin-left: 12px;
  font-size: 16px;
  color: ${(props) => (props.theme === "light" ? "#555" : props.theme.color)};
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;

const SubsectionContent = styled.div`
  max-height: ${(props) => (props.isOpen ? "2000px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: opacity 0.3s ease, max-height 0.5s ease;
  padding-left: 25px;
  border-left: 1px solid
    ${(props) => (props.theme === "light" ? "#ddd" : "#333")};
`;

const SubsectionText = styled.div`
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 16px;
  color: ${(props) => (props.theme === "light" ? "#333" : props.theme.color)};
`;

const SubsectionImage = styled.div`
  margin: 15px 0 25px 0;
  width: 55%;
  img {
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid ${(props) => (props.theme === "light" ? "#ddd" : "#333")};
  }
`;

// Collapsible Subsection Component
const Subsection = ({ title, text, image, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SubsectionContainer>
      <SubsectionHeader onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <SubsectionTitle theme={currentTheme}>{title}</SubsectionTitle>
        <ToggleIcon isOpen={isOpen} theme={currentTheme}>
          ▼
        </ToggleIcon>
      </SubsectionHeader>
      <SubsectionContent isOpen={isOpen} theme={currentTheme}>
        <SubsectionText theme={currentTheme}>{text}</SubsectionText>
        {image && (
          <SubsectionImage theme={currentTheme}>
            <img src={image} alt={title} />
          </SubsectionImage>
        )}
      </SubsectionContent>
    </SubsectionContainer>
  );
};

const LeCoach = () => {
  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);

  return (
    <PageWrap>
      {theme === "dark" && <Stars />}
      <ToggleContainer>
        <Toggle
          rounded={true}
          isToggled={isToggled}
          onToggle={() => {
            setIsToggled(!isToggled);
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        />
      </ToggleContainer>
      <Container>
        <Header theme={theme}>
          <ProjectTitle theme={theme}>LeCoach</ProjectTitle>
          <Navigation>
            <NavLink theme={theme}>
              <Link to="/">
                <Arrow>←</Arrow>Back to Home
              </Link>
            </NavLink>
          </Navigation>
        </Header>

        <Content>
          <ProjectDescription theme={theme}>
            LeCoach is a comprehensive analytics platform for coaches and
            players in Canadian usports basketball. It features an agent system
            for game analysis and predictive analytics powered by 10+ years of
            historical league data.
          </ProjectDescription>

          <ProjectMedia>
            <video
              src="https://yangstevenwebsite.s3.us-east-1.amazonaws.com/lecoach.mp4"
              controls
              width="100%"
            />
          </ProjectMedia>

          <DividerLine theme={theme} margin="60px 0" />

          <SectionTitle theme={theme}>Motivations</SectionTitle>
          <ProjectDescription theme={theme}>
            Over the past year, I've been leading and expanding the data
            solutions team for the Waterloo varsity basketball program. The
            critical challenge we've identified is the lack of a centralized,
            user-first platform for performance analysis. While Synergy Sports
            is our current solution, the platform is overwhelmingly complex and
            cluttered. The value isn't in the numbers themselves but rather in
            making them actionable. LeCoach would be a platform that bridges the
            gap between raw data and basketball-first minded coaches + players.
          </ProjectDescription>

          <DividerLine theme={theme} margin="60px 0" />

          <SectionTitle theme={theme}>User Flow</SectionTitle>
          {/* <ProjectDescription theme={theme}>
            The primary 
          </ProjectDescription> */}

          <Subsection
            title="Games Navigation"
            text="Users can navigate through all games dating back to the 2005-06 season."
            image={dashboard}
            currentTheme={theme}
          />

          <Subsection
            title="Analysis Interface"
            text="The win probability graph is powered by a model trained on 1.4 million historical plays. More team metrics will be available soon (traditional stats + VORP, BPM, etc.)"
            image={gameanalysis}
            currentTheme={theme}
          />

          <Subsection
            title="Play by play tracking"
            text="View detailed play by play tracking for every game."
            image={playerperformance}
            currentTheme={theme}
          />

          <Subsection
            title="Agent chat"
            text="The agent system analyzes game data to answer any question about the game."
            image={agent}
            currentTheme={theme}
          />

          <DividerLine theme={theme} margin="60px 0" />

          <SectionTitle theme={theme}>System Diagram</SectionTitle>
          <ProjectDescription theme={theme}>
            [Add your system architecture diagram and explanation here]
          </ProjectDescription>

          <DividerLine theme={theme} margin="60px 0" />

          <SectionTitle theme={theme}>Technical Details</SectionTitle>
          <ProjectDescription theme={theme}>
            [Discuss the technical implementation, technologies used, challenges
            overcome, etc.]
          </ProjectDescription>

          <DividerLine theme={theme} margin="60px 0" />

          <SectionTitle theme={theme}>Future</SectionTitle>
          <ProjectDescription theme={theme}>
            [Share your plans for future development and improvements]
          </ProjectDescription>

          <DividerLine theme={theme} margin="80px 0" />
        </Content>
      </Container>
    </PageWrap>
  );
};

export default LeCoach;
