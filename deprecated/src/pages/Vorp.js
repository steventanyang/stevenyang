import "../static/Projects.css";
import Toggle from "../components/Toggle";
import Code from "../components/CodeText";

import styled from "styled-components";
import { useContext, useState } from "react";
import { DarkContext } from "../contexts/DarkContext";
import { Link } from "react-router-dom";

import projectlebron from "../images/projectlebron.png";

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

const CodeBlock = styled.div`
  font-family: "Source Code Pro", monospace;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 8%;
  margin-right: 8%;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.div`
  font-family: "Source Code Pro", monospace;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 8%;
  margin-right: 8%;
  line-height: 2;
`;


const Vorp = () => {
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
          <Title> Vorp </Title>
        </Link>
      </div>

      <div className="description-container">
        <CodeBlock
          className="description"
          style={{ color: theme === "light" ? "#5A5A5A" : "#FEFFDD" }}
        >
          <Code code={sampleCode} />
        </CodeBlock>

        <Paragraph style={{ color: theme === "light" ? "#5A5A5A" : "#FEFFDD" }}>
          asdfjkljsdfja sdklfj; hjklh kjh kjhlk h jklsdfjl asdjfkl jalsdkfj{" "}
          <br />
          asdjflkja sdfjkasdklfj asdfjklajsd fklasdjf klajsd fklajsdf
        </Paragraph>

        <Image>
          <img
            src={projectlebron}
            alt=""
            style={{
              width: "40%",
              height: "auto",
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>


      </div>
    </PageWrap>
  );
};

export default Vorp;
