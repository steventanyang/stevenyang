import "../static/Projects.css";
import Toggle from "../components/Toggle";
import Code from "./CodeBlock";

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
`;

const Title = styled.div`
  color: ${(props) => props.theme.color};
  font-family: "Roboto";
  font-size: 3.5rem;
  font-weight: 400;
  margin-left: 10%;
  text-shadow: 0 0 1px #feffdd, 0 0 2px #feffdd, 0 0 3px #feffdd;
`;

export default function Shinanigans() {
  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);

  const sampleCode = `
  const greet = () => {
    console.log('Hello, World!');
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
      <div className="description-container">
        <div
          className="description"
          style={{ color: theme === "light" ? "#5A5A5A" : "#FEFFDD" }}
        >
          <Code code={sampleCode} />
        </div>
      </div>
    </PageWrap>
  );
}
