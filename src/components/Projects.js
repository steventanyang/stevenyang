import "../static/Projects.css";
import Toggle from "../components/Toggle";
import Stars from "./Stars";

import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { DarkContext } from "../contexts/DarkContext";
import { Link } from "react-router-dom";
import legm from "../images/legm.png";
import leresume from "../images/leresume.png";

import bucks from "../images/bucks.png";
import ufcrax from "../images/ufcrax.png";

import ProjectContainer from "./ProjectContainer";

// videos
const elitecodeVideo =
  "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/elitecode.mov";
const marketlooVideo =
  "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/marketloo.mov";
const leresumeVideo =
  "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/leresume.mov";
const lecoachVideo =
  "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/lecoach.mp4";

const PageWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
  position: relative;
  z-index: 2;
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
      {theme === "dark" && <Stars />}
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
          Here are some projects that I've worked on recently:
        </DescriptionText>
        {/* <DescriptionText color={theme === "light" ? "#5A5A5A" : "#FEFFDD"}>
          - I'm a 2nd-year Software Engineering student @ the University of
          Waterloo
        </DescriptionText>
        <DescriptionText color={theme === "light" ? "#5A5A5A" : "#FEFFDD"}>
          - Currently working as a SWE intern on the AML / gen ai cloud
          integration team at Sunlife.
        </DescriptionText>
        <DescriptionText color={theme === "light" ? "#5A5A5A" : "#FEFFDD"}>
          - Last summer I was a SWE intern at{" "}
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
          I wrote about it here:{" "}
          <Link
            to="/vorp"
            style={{
              color: theme === "light" ? "#5A5A5A" : "#C8FFFF",
              textDecoration: "underline",
            }}
          >
            Stadiumlive{" "}
          </Link>
        </DescriptionText>

        <DescriptionText color={theme === "light" ? "#5A5A5A" : "#FEFFDD"}>
          - I'm also building analytics infrastructure for varsity sports at
          Waterloo.
          Here's a
          snippet of some work I did this summer:{" "}
          <Link
            to="/vorp"
            style={{
              color: theme === "light" ? "#5A5A5A" : "#FFC075",
              textDecoration: "underline",
            }}
          >
            Vorp
          </Link>
        </DescriptionText> */}
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
          projects
        </YearTitle>

        <PContainer phone={isPhone}>
          <Link to="/lecoach" style={{ textDecoration: "none" }}>
            <ProjectContainer // LeCoach
              background={"#303030"}
              border={"#B7EC97"}
              emoji={"🔍"}
              title={"LeCoach"}
              image={""}
              description={
                "Complete analytics platform for usports basketball. 10+ years of historical data, win probability model, + multi agent system for game analysis."
              }
              more={""}
              rainbowBorder={true}
              video={lecoachVideo}
            />
          </Link>
        </PContainer>

        <PContainer phone={isPhone}>
          {/* <ProjectContainer // lighthouse
            background={"#E1D3B7"}
            border={"#0F481B"}
            emoji={"🏀"}
            title={"milwaukee bucks hackathon 2025"}
            image={""}
            description={"👨🏻‍🍳 soon ..."}
            more={""}
          /> */}
          <ProjectContainer // marketloo
            background={"#1E345A"}
            border={"#84BCEB"}
            emoji={"📈"}
            title={"marketloo"}
            video={marketlooVideo}
            description={
              "Gamified prediction market platform with real-time paper trading + funcitonal order book system. Deployed ai agents to simulate market dynamics."
            }
            more={"https://market-loo.vercel.app/"}
          />
          <ProjectContainer // lighthouse
            background={"#232323"}
            border={"#DAB1F7"}
            emoji={"🧑‍💻"}
            title={"elitecode"}
            video={elitecodeVideo}
            description={
              <>
                Obsidian x Anki for leetcode. Built a graph visualizer on
                question similarity, an integrated chrome extension, + auto
                generated ai review w/ syntax highlighting.
              </>
            }
            more={"Learn more"}
          />
        </PContainer>

        <PContainer phone={isPhone}>
          <ProjectContainer // LeResume
            background={"#E1E1E1"}
            border={"#73698A"}
            emoji={"💸"}
            title={"LeResume"}
            video={leresumeVideo}
            description={
              "Auto generate resumes and cover letters for waterloo works."
            }
            more={"https://leresume.ca"}
          />

          <ProjectContainer // UFC Rax
            background={"#111111"}
            border={"#E4E4E4"}
            emoji={"🥊"}
            title={"ufc rax"}
            image={ufcrax}
            // video={"path/to/your/video.mp4"}
            description={
              <>
                Investment analytics platform for{" "}
                <a
                  href="https://www.realapp.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#E4E4E4", textDecoration: "underline" }}
                >
                  www.realapp.link
                </a>{" "}
                with 30,000+ active users.
                <br />
                Uses real-time data, custom recommendations algorithm, and
                aggregates 30 years of historial ufc data.
              </>
            }
            more={"https://ufcrax-v2.vercel.app/"}
          />
        </PContainer>

        <PContainer phone={isPhone}>
          <ProjectContainer // Bucks Hackathon
            background={"#0F481B"}
            border={"#E1D3B7"}
            emoji={"🏀"}
            title={"milwaukee bucks hackathon 2024"}
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
      <DirtContainer theme={theme} light={"#4C370D"} dark={"#2C3023"}>
        <YearTitle theme={theme} light={"#73551B"} dark={"#FEFFDD"}></YearTitle>
      </DirtContainer>

      {/* 2023 */}
      {/* <DirtContainer theme={theme} light={"#4C370D"} dark={"#2C3023"}>
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
      </DirtContainer> */}

      {/* 2022 */}
      {/* <DirtContainer theme={theme} light={"#726240"} dark={"#4C5046"}>
        <YearTitle theme={theme} light={"#4C370D"} dark={"#FEFFDD"}>
          2022
        </YearTitle>

        <PContainer phone={isPhone}>
          <ProjectContainer // ask lebron
            background={"#30113D"}
            border={"#F2F1EE"}
            emoji={"⛹️"}
            title={"stadium live optimizer"}
            image={asklebron}
            description={
              "daily fantasy sports lineup optimizer for stadiumlive app. Uses player projection data to find good combinations."
            }
            more={""}
          />
        </PContainer>
      </DirtContainer> */}
    </PageWrap>
  );
};

export default Projects;
