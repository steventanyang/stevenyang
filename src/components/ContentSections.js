import React from "react";
import styled from "styled-components";
import ProjectContainer from "./ProjectContainer";

// Import project assets
import legm from "../images/legm.png";
import leresume from "../images/leresume.png";
import bucks from "../images/bucks.png";
import ufcrax from "../images/ufcrax.png";

// Import placeholder images
import placeholderImg1 from "../images/island1.png"; // Reusing existing images as placeholders
import placeholderImg2 from "../images/island2.png";
import placeholderImg3 from "../images/island3.png";

// Import a blank image for spacing
import blankSpace from "../images/blank.png"; // You'll need to create this blank transparent PNG

// videos
const elitecodeVideo =
  "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/elitecode.mov";
const marketlooVideo =
  "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/marketloo.mov";
const leresumeVideo =
  "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/leresume.mov";
const lecoachVideo =
  "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/lecoach.mp4";

// Styled components
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
  font-size: 1.2rem;
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

// Soil layers component
const SoilLayers = ({ theme }) => (
  <>
    <div
      className="grass-humus"
      style={{
        backgroundColor: theme === "light" ? "#619449" : "#3B5856",
      }}
    ></div>
    <div
      className="grass-humus"
      style={{
        backgroundColor: theme === "light" ? "#4C370D" : "#2C3023",
      }}
    ></div>
    <div
      className="topsoil"
      style={{
        backgroundColor: theme === "light" ? "#8C6A28" : "#576151",
      }}
    ></div>
    <div
      className="topsoil"
      style={{
        backgroundColor: theme === "light" ? "#73551B" : "#464D39",
      }}
    ></div>
  </>
);

// Section components
export const ProjectsSection = ({ theme, isPhone }) => (
  <>
    <DescriptionContainer>
      <DescriptionText color={theme === "light" ? "#5A5A5A" : "#F6F6F6"}>
        Here are some projects that I've worked on recently:
      </DescriptionText>
    </DescriptionContainer>

    <SoilLayers theme={theme} />

    <DirtContainer theme={theme} light={"#654A15"} dark={"#3D4334"}>
      <YearTitle theme={theme} light={"#8C6A28"} dark={"#FEFFDD"}>
        projects
      </YearTitle>

      <PContainer phone={isPhone}>
        <ProjectContainer
          background={"#303030"}
          border={"#B7EC97"}
          emoji={"🔍"}
          title={"LeCoach"}
          image={""}
          description={
            "Complete analytics platform for usports basketball. 10+ years of historical data, win probability model, + multi agent system for game analysis."
          }
          // more={"/lecoach"}
          rainbowBorder={true}
          video={lecoachVideo}
        />
      </PContainer>

      <PContainer phone={isPhone}>
        <ProjectContainer
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
        <ProjectContainer
          background={"#232323"}
          border={"#DAB1F7"}
          emoji={"🧑‍💻"}
          title={"elitecode"}
          video={elitecodeVideo}
          description={
            <>
              Obsidian x Anki for leetcode. Built a graph visualizer on question
              similarity, an integrated chrome extension, + auto generated ai
              review w/ syntax highlighting.
            </>
          }
          more={"Learn more"}
        />
      </PContainer>

      <PContainer phone={isPhone}>
        <ProjectContainer
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

        <ProjectContainer
          background={"#111111"}
          border={"#E4E4E4"}
          emoji={"🥊"}
          title={"ufc rax"}
          image={ufcrax}
          description={
            <>
              Investment analytics platform for{" "}
              <a
                href="https://www.realapp.link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#E4E4E4",
                  textDecoration: "underline",
                }}
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
        <ProjectContainer
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

        <ProjectContainer
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

    <DirtContainer theme={theme} light={"#654A15"} dark={"#3D4334"}>
      <YearTitle theme={theme} light={"#8C6A28"} dark={"#FEFFDD"}></YearTitle>
    </DirtContainer>
  </>
);

export const ShinanigansSection = ({ theme }) => (
  <>
    <DescriptionContainer>
      <DescriptionText color={theme === "light" ? "#5A5A5A" : "#FEFFDD"}>
        Coming soon
      </DescriptionText>
    </DescriptionContainer>

    <SoilLayers theme={theme} />

    <DirtContainer theme={theme} light={"#654A15"} dark={"#3D4334"}>
      <YearTitle theme={theme} light={"#8C6A28"} dark={"#FEFFDD"}>
        design
      </YearTitle>

      {/* Blank image to create space */}
      <img
        src={blankSpace}
        alt=""
        style={{
          width: "100%",
          height: "300px",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
    </DirtContainer>
  </>
);

export const LifeSection = ({ theme }) => (
  <>
    <DescriptionContainer>
      <DescriptionText color={theme === "light" ? "#5A5A5A" : "#FEFFDD"}>
        Coming soon
      </DescriptionText>
    </DescriptionContainer>

    <SoilLayers theme={theme} />

    <DirtContainer theme={theme} light={"#654A15"} dark={"#3D4334"}>
      <YearTitle theme={theme} light={"#8C6A28"} dark={"#FEFFDD"}>
        life
      </YearTitle>

      {/* Blank image to create space */}
      <img
        src={blankSpace}
        alt=""
        style={{
          width: "100%",
          height: "300px",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
    </DirtContainer>
  </>
);
