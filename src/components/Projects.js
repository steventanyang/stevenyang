import "../static/Projects.css";
import Toggle from "../components/Toggle";

import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { DarkContext } from "../contexts/DarkContext";
import { Link } from "react-router-dom";
import legm from "../images/legm.png";
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

function GreyBox(props) {
  const Tool = (value) => {
    if (value === "CSS") {
      return "#757629";
    } else if (value === "Django") {
      return "225724";
    } else if (value === "Flask") {
      return "#404040";
    } else if (value === "Git") {
      return "#814A17";
    } else if (value === "JavaScript") {
      return "#767319";
    } else if (value === "MongoDB") {
      return "#1C431E";
    } else if (value === "MySQL") {
      return "#85621E";
    } else if (value === "Pandas") {
      return "#1C431E";
    } else if (value === "Python") {
      return "#496A7C";
    } else if (value === "React" || value === "React Native") {
      return "#1F4E68";
    } else if (value === "Selenium") {
      return "#405B39";
    } else if (value === "SQLite" || value === "PostgreSQL") {
      return "#275B5B";
    } else {
      return "#404040";
    }
  };

  return (
    <div className="grey-overlay">
      <span className="grey-title-container">
        <h2 className="grey-title">{props.title}</h2>
      </span>

      <span className="tech-boxes-container">
        <div className="techbox" style={{ backgroundColor: Tool(props.tool1) }}>
          <p className="techbox-text">{props.tool1}</p>
        </div>
        <div className="techbox" style={{ backgroundColor: Tool(props.tool2) }}>
          <p className="techbox-text">{props.tool2}</p>
        </div>
        <div className="techbox" style={{ backgroundColor: Tool(props.tool3) }}>
          <p className="techbox-text">{props.tool3}</p>
        </div>
      </span>

      <span className="grey-des-container">
        <p className="grey-description">{props.description}</p>
        <p className="grey-description-short">{props.shortdescription}</p>
      </span>

      {/* <a href="https://www.linkedin.com/in/steven-yang-2059b0268/" target="blank">link</a> */}
    </div>
  );
}

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
      <div className="description-container">
        <div
          className="description"
          style={{ color: theme === "light" ? "#5A5A5A" : "#FEFFDD" }}
        >
          <ul className="description-text">
            I'm a first-year Software Engineering student @ the University of
            Waterloo
          </ul>
          <ul className="description-text">
            This summer I'm doing full stack at
            <a
              href="https://www.stadiumverse.com/"
              className="description-links"
              style={{ color: theme === "light" ? "#5A5A5A" : "#C8FFFF" }}
            >
              {" "}
              Stadium Live Studios.
            </a>
          </ul>
          <ul className="description-text">
            Here's a collection of projects that I've worked on over the years!
          </ul>
        </div>
      </div>

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
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
          <ProjectContainer // UFC Rax
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
        </PContainer>

        <PContainer phone={isPhone}>
          <ProjectContainer // Bucks Hackathon
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
          <ProjectContainer // LeGM
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
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
          <ProjectContainer // LeResume
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
          <ProjectContainer // UFC Rax
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
        </PContainer>

        <PContainer phone={isPhone}>
          <ProjectContainer // Bucks Hackathon
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
          <ProjectContainer // LeGM
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
        </PContainer>
      </DirtContainer>

      {/* 2022 */}
      <DirtContainer theme={theme} light={"#726240"} dark={"#4C5046"}>
        <YearTitle theme={theme} light={"#4C370D"} dark={"#FEFFDD"}>
          2023
        </YearTitle>

        <PContainer phone={isPhone}>
          <ProjectContainer // LeResume
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
          <ProjectContainer // UFC Rax
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
        </PContainer>

        <PContainer phone={isPhone}>
          <ProjectContainer // Bucks Hackathon
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
          <ProjectContainer // LeGM
            background={"#445F3E"}
            border={"#73dd79"}
            emoji={"🏀"}
            title={"test title test"}
            image={legm}
            description={
              "We won 2nd place at 2024 Milwaukee Bucks Data analytics hackathon. Our project used ML to optimize ticket pricing. It was a lot of fun & had a great time"
            }
            more={"https://www.stadiumverse.com/"}
          />
        </PContainer>
      </DirtContainer>
    </PageWrap>
  );
};

export default Projects;
