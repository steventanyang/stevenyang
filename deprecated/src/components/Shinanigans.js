import "../static/Projects.css";
import Toggle from "./Toggle";
import Code from "./CodeText";

import styled from "styled-components";
import { useContext, useState } from "react";
import { DarkContext } from "../contexts/DarkContext";
import { Link } from "react-router-dom";

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

const Description = styled.div`
  font-family: "Source Code Pro", monospace;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 8%;
  margin-right: 8%;
`;

const Paragraph = styled.div`
  color: ${(props) => (props.theme === "light" ? "#5A5A5A" : "#feffdd")};
  font-family: "Roboto";
  font-size: 1.8rem;
  font-weight: 900;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 15%;
  margin-right: 15%;
  line-height: 2;
`;

export default function Shinanigans() {
  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);

  const sampleCode = `
  const greet = () => {
    console.log('under construction!');
  }
  `;

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
          <Title> (:&lt; </Title>
        </Link>
      </div>

      {/* <div className="description-container">
        <Description
          className="description"
          style={{ color: theme === "light" ? "#5A5A5A" : "#FEFFDD" }}
        >
          <Link to="/ball">
            <Paragraph theme={theme} style={{ textDecoration: "underline" }}>
              {" "}
              vorp{" "}
            </Paragraph>
          </Link>
        </Description>
      </div> */}
    </PageWrap>
  );
}
