import "../static/Home.css";
import Toggle from "../components/Toggle";
import island1 from "../images/island1.png";
import island2 from "../images/island2.png";
import island3 from "../images/island3.png";
import darkisland1 from "../images/darkisland1.png";
import darkisland2 from "../images/darkisland2.png";
import darkisland3 from "../images/darkisland3.png";
import darkwebring from "../images/darkwebring.png";
import webring from "../images/webring.png";

import { useContext } from "react";
import { DarkContext } from "../contexts/DarkContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeStars from "./HomeStars";

const PageWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Name = styled.div`
  color: ${(props) => props.theme.color};
  font-family: "Source Code Pro", monospace;
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 4%;
  text-align: center;
  width: 100%;
  text-shadow: 0 0 1px #feffdd, 0 0 2px #feffdd, 0 0 3px #feffdd;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.color};
  font-family: "Source Code Pro", monospace;
  font-size: 1.2rem;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Spacer = styled.div`
  width: 300px;
  height: 1px;
  background-color: ${(props) => props.theme.color};
  margin: 1.5rem auto;
  opacity: 0.2;
`;

const HighlightedLink = styled(Link)`
  font-family: "Source Code Pro", monospace;
  text-decoration: none;
  transition: all 0.2s;

  ${(props) =>
    props.theme === "light"
      ? `
      color: #424242;
      font-weight: 700;
    `
      : `
      color: ${props.darkColor || "#7FDFFF"};
      text-shadow: 0 0 4px #B4DBFF, 0 0 10px #B4DBFF;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

const IntroText = styled.div`
  color: ${(props) => props.theme.color};
  font-family: "Source Code Pro", monospace;
  font-size: 1.1rem;
  font-weight: 400;
  width: 100%;
  max-width: 600px;
  text-align: left;
  line-height: 1.6;
  padding: 0 1rem;
  margin-top: 0.5rem;

  .heading {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1.5rem;
  }
`;

const IslandContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;

  .island {
    width: 160px;
    height: auto;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .island-and-logo {
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .island {
      width: 140px;
    }
  }
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);

  return (
    <PageWrap>
      {theme === "dark" && <HomeStars />}
      <div className="top-container">
        <div className="webring-container">
          <a href="https://se-webring.xyz/" style={{ textDecoration: "none" }}>
            <img
              className="webring"
              src={theme === "light" ? webring : darkwebring}
              alt="webring"
            ></img>
          </a>
        </div>
        <div className="toggle-container">
          <Toggle
            rounded={true}
            isToggled={isToggled}
            onToggle={() => {
              setIsToggled(!isToggled);
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          />
        </div>
      </div>

      <MainContainer>
        <Name>steven yang</Name>
        <LinksContainer>
          <StyledLink
            href="https://github.com/steventanyang"
            target="_blank"
            rel="noreferrer"
          >
            github
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/stevenyangtan/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </StyledLink>
          <StyledLink
            href="mailto:steventanyang@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            email
          </StyledLink>
        </LinksContainer>

        <Spacer />

        <IntroText>
          <span className="heading">Currently:</span> Working on the gen ai
          integration team @ sunlife. I'm looking for opportunities that bridge
          engineering with product / design.
          <br />
          <br />
          <span className="heading">Previously:</span> Built products for 500k
          sports-fans at{" "}
          <HighlightedLink to="/projects" theme={theme} darkColor="#7FDFFF">
            Stadium Live.
          </HighlightedLink>{" "}
          Built data infrastructure + led software development for varsity
          sports analytics at waterloo.{" "}
          <HighlightedLink to="/projects" theme={theme} darkColor="#7FDFFF">
            Created cool projects
          </HighlightedLink>{" "}
          with code + design.
          <br />
          <br />
          <span className="heading">Background:</span> I'm in my 2nd year
          studying{" "}
          <HighlightedLink
            as="a"
            href="https://uwaterloo.ca/future-students/programs/software-engineering"
            target="_blank"
            rel="noreferrer"
            theme={theme}
            darkColor="#7FDFFF"
          >
            Software Engineering @ Waterloo
          </HighlightedLink>
          . I grew up in southern Alberta.
          <br />
          <br />
          <span className="heading">Interests:</span> I love sports - especially{" "}
          <HighlightedLink
            as="a"
            href="https://www.youtube.com/watch?v=qBN90Ymk_gM&ab_channel=%EC%9D%B4%EC%A4%80%ED%98%81"
            target="_blank"
            rel="noreferrer"
            theme={theme}
            darkColor="#7FDFFF"
          >
            basketball
          </HighlightedLink>. I also enjoy spending time engaging with art. I paint,
          make music, and like graphic design.
        </IntroText>

        <IslandContainer>
          <div className="island-and-logo island2">
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <h2
                className={
                  theme === "light" ? "island-logo" : "dark-island-logo"
                }
              >
                {" "}
                &lt;/&gt;{" "}
              </h2>
              <img
                className="island"
                src={theme === "light" ? island2 : darkisland2}
                alt="island"
              ></img>
            </Link>
          </div>
          <div className="island-and-logo island1">
            <Link to="/shinanigans" style={{ textDecoration: "none" }}>
              <h2
                className={
                  theme === "light" ? "island-logo" : "dark-island-logo"
                }
              >
                {" "}
                (:&lt;{" "}
              </h2>
              <img
                className="island"
                src={theme === "light" ? island1 : darkisland1}
                alt="island"
              ></img>
            </Link>
          </div>
          <div className="island-and-logo island3">
            <Link to="/life" style={{ textDecoration: "none" }}>
              <h2
                className={
                  theme === "light" ? "island-logo" : "dark-island-logo"
                }
              >
                {" "}
                &lt;3{" "}
              </h2>
              <img
                className="island"
                src={theme === "light" ? island3 : darkisland3}
                alt="island"
              ></img>
            </Link>
          </div>
        </IslandContainer>
      </MainContainer>
    </PageWrap>
  );
}
