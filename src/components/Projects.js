import "../static/Projects.css";
import Toggle from "../components/Toggle";

import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { DarkContext } from "../contexts/DarkContext";
import { Link } from "react-router-dom";
import legm from "../images/legm.png";
import leresume from "../images/leresume.png";
import projectlebron from "../images/projectlebron.png";
import asklebron from "../images/asklebron.png";
import pokemon from "../images/pokemon.png";
import chromosense from "../images/chromosense.png";
import bucks from "../images/bucks.png";
import ufcrax from "../images/ufcrax.png";

import ProjectContainer from "./ProjectContainer";

const PageWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Title = styled.div`
  color: ${(props) => props.theme.color};
  font-family: "Roboto";
  font-size: 3.5rem;
  font-weight: 400;
  margin-left: 10%;
  text-shadow: 0 0 1px #feffdd, 0 0 2px #feffdd, 0 0 3px #feffdd;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  line-height: 1.5;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const DescriptionText = styled.ul`
  color: ${(props) => props.color};
  font-family: "Source Code Pro", monospace;
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 10%;
  margin-right: 8%;
`;

const DirtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? props.light : props.dark};
  padding-bottom: 50px;
`;

const YearTitle = styled.h2`
  font-family: "Source Code Pro", monospace;
  font-size: 2rem;
  font-weight: 700;
  padding-top: 35px;
  padding-bottom: 20px;
  color: ${(props) => (props.theme === "light" ? props.light : props.dark)};
`;

const PContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.phone ? "column" : "row")};
  justify-content: center;
  align-items: flex-start;
`;

const Projects = () => {
  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const isPhone = windowSize.width < 1300;
  const [selectedImage, setSelectedImage] = useState({});

  const handleClick = (imageId) => {
    setSelectedImage((prevSelected) => ({
      ...prevSelected,
      [imageId]: !prevSelected[imageId],
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageWrap>
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

      <div className="title-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title> &lt;/&gt; </Title>
        </Link>
      </div>
      <DescriptionContainer>
        <DescriptionText color={theme === "light" ? "#5A5A5A" : "#FEFFDD"}>
          - I'm a first-year Software Engineering student @ the University of
          Waterloo
        </DescriptionText>
        <DescriptionText color={theme === "light" ? "#5A5A5A" : "#FEFFDD"}>
          - This summer I'm doing full stack at{" "}
          <a
            href="https://www.stadiumverse.com/"
            className="description-links"
            style={{ color: theme === "light" ? "#5A5A5A" : "#C8FFFF" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Stadium Live Studios.{" "}
          </a>
        </DescriptionText>
      </DescriptionContainer>

      <div
        className="grass-humus"
        style={{ backgroundColor: theme === "light" ? "#619449" : "#3B5856" }}
      ></div>
      <div
        className="grass-humus"
        style={{ backgroundColor: theme === "light" ? "#4C370D" : "#2C3023" }}
      ></div>
      <div
        className="topsoil"
        style={{ backgroundColor: theme === "light" ? "#8C6A28" : "#576151" }}
      ></div>
      <div
        className="topsoil"
        style={{ backgroundColor: theme === "light" ? "#73551B" : "#464D39" }}
      ></div>

      {/* 2024 */}
      <DirtContainer theme={theme} light={"#654A15"} dark={"#3D4334"}>
        <YearTitle theme={theme} light={"#8C6A28"} dark={"#FEFFDD"}>
          2024
        </YearTitle>

        <PContainer phone={isPhone}>
          <ProjectContainer // LeResume
            background={"#E1E1E1"}
            border={"#73698A"}
            emoji={"💸"}
            title={"LeResume"}
            image={leresume}
            description={"soon ..."}
            more={"https://leresume-website.vercel.app/"}
          />
          <ProjectContainer // UFC Rax
            background={"#000"}
            border={"#E4E4E4"}
            emoji={"🥊"}
            title={"ufc rax"}
            image={ufcrax}
            description={
              "Gives users investment advice on virtual currency based mobile game using historical ufc fight data. 3500+ active users."
            }
            more={"https://realrax.com/"}
          />
        </PContainer>

        <PContainer phone={isPhone}>
          <ProjectContainer // Bucks Hackathon
            background={"#0F481B"}
            border={"#E1D3B7"}
            emoji={"🏀"}
            title={"milwaukee bucks hackathon"}
            image={bucks}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing."
            }
            more={"https://www.nba.com/bucks/hackathon"}
          />
          <ProjectContainer // LeGM
            background={"#FFFFFF"}
            border={"#144458"}
            emoji={"🧠"}
            title={"LeGM"}
            image={legm}
            description={
              "LeGM is a all-in-one fantasy basketball manager. It includes league insights, stat tracking, automated waiver suggestions, + more."
            }
            more={"https://www.stadiumverse.com/"}
          />
        </PContainer>
      </DirtContainer>

      {/* 2023 */}
      <DirtContainer theme={theme} light={"#4C370D"} dark={"#2C3023"}>
        <YearTitle theme={theme} light={"#73551B"} dark={"#FEFFDD"}>
          2023
        </YearTitle>

        <PContainer phone={isPhone}>
          <ProjectContainer // project lebron
            background={"#253342"}
            border={"#D2D2CC"}
            emoji={"📊"}
            title={"project lebron"}
            image={projectlebron}
            description={
              "shootaround tracking app w/ real-time shot feedback + motion + vibration sensor hardware. Built for se101 project course."
            }
            more={"https://www.youtube.com/shorts/9Tw3vGxFPsM"}
          />
          <ProjectContainer // pokemon shiny hunter
            background={"#2F66A6"}
            border={"#EEC006"}
            emoji={"🌟"}
            title={"pokemon shiny hunter"}
            image={pokemon}
            description={
              "Shiny hunting simulator complete with full 9 region pokedex."
            }
            more={""}
          />
        </PContainer>

        <PContainer phone={isPhone}>
          <ProjectContainer // chromosense website
            background={"#EFEEEB"}
            border={"#0D72A8"}
            emoji={"🐟"}
            title={"chromosense"}
            image={chromosense}
            description={
              "website that I helped make for my igem team that has really bad code."
            }
            more={""}
          />
        </PContainer>
      </DirtContainer>

      {/* 2022 */}
      <DirtContainer theme={theme} light={"#726240"} dark={"#4C5046"}>
        <YearTitle theme={theme} light={"#4C370D"} dark={"#FEFFDD"}>
          2022
        </YearTitle>

        <PContainer phone={isPhone}>
          <ProjectContainer // ask lebron
            background={"#30113D"}
            border={"#F2F1EE"}
            emoji={"⛹️"}
            title={"stadium live lineup optimizer"}
            image={asklebron}
            description={
              "daily fantasy sports lineup optimizer for stadiumlive app. Uses player projection data to find good combinations."
            }
            more={""}
          />
        </PContainer>
      </DirtContainer>
    </PageWrap>
  );
};

export default Projects;
