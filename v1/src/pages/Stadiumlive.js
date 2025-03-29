import "../static/Projects.css";
import Toggle from "../components/Toggle";
import Code from "../components/CodeText";

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
  font-size: 3rem;
  font-weight: 400;
  margin-left: 10%;
  margin-bottom: 2%;
  text-shadow: 0 0 1px #feffdd, 0 0 2px #feffdd, 0 0 3px #feffdd;
`;

const CodeBlock = styled.div`
  color: ${(props) => (props.theme === "light" ? "#5A5A5A" : "#feffdd")};
  font-family: "Source Code Pro", monospace;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 15%;
  margin-right: 15%;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3%;
  margin-bottom: 3%;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.div`
  color: ${(props) => (props.theme === "light" ? "#5A5A5A" : "#C7C7B7")};
  font-family: "Roboto";
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 15%;
  margin-right: 15%;
  line-height: 2;
`;

const Bold = styled.span`
  color: ${(props) => (props.theme === "light" ? "#5A5A5A" : "#feffdd")};
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 900;
`;

const ExLink = styled.a`
  color: ${(props) => (props.theme === "light" ? "#5A5A5A" : "#feffdd")};
  font-family: "Roboto";
  font-size: 1.6rem;
  text-decoration: underline;
  font-weight: 900;
`;

const Heading = styled.div`
  color: ${(props) => (props.theme === "light" ? "#5A5A5A" : "#feffdd")};
  font-family: "Roboto";
  font-size: 2.5rem;
  font-weight: 900;
  margin-top: 8%;
  margin-bottom: 1%;
  margin-left: 15%;
  margin-right: 15%;
`;

const SubHeading = styled.div`
  color: ${(props) => (props.theme === "light" ? "#5A5A5A" : "#feffdd")};
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: 900;
  margin-top: 5%;
  margin-bottom: 1%;
  margin-left: 15%;
  margin-right: 15%;
`;

const StadiumLive = () => {
  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);

  const trueShooting = `
   ts% = pts / ( 2 * (fga + 0.44 * fta))
 `;

  const reboundingPercentage = `
   trb% = trb / mp / (tmTrb + oppTrb) * tmMp / 5
 `;

  const possessions = `
   poss = 0.96 * (game.fga + game.turn + 0.44 * game.fta - game.oreb)
 `;

  const vorp = `
   vorp = (bpm - (-2.0)) * (% of possessions played) * team games / total games available
 `;

  const ExternalLink = ({ href, children, theme }) => {
    return (
      <ExLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        theme={theme}
      >
        {children}
      </ExLink>
    );
  };

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
          <Title> VORP + basketball analytics </Title>
        </Link>
      </div>

      <div className="description-container">
        <Heading theme={theme}>Intro</Heading>

        <Paragraph theme={theme}>
          People love to hate advanced stats in basketball. They've been called
          misleading, made-up, useless, voodoo math ... you can take your pick.
          But here's my take: the real issue isn’t the stats themselves; it’s
          when people whip them out like a magic wand, trying to win arguments
          without knowing what they’re talking about.
        </Paragraph>

        <Paragraph theme={theme}>
          Advanced stats are very much a double-edged sword. On one side, they
          give you a clearer understanding of what’s happening in the game. On
          the other, they can be twisted to tell whatever story you want, kind
          of like a basketball version of telephone. No matter how you see it,
          advanced stats in basketball are misunderstood. So my goal of this
          piece is to help people understand — I think there are a lot of people
          who would appreciate this side of the sport more.
        </Paragraph>

        <Paragraph theme={theme}>
          I think basketball analytics can be thought of as a pyramid. Each
          ascending layer becomes more technical and adds more context. While
          every stat has its downsides, the next layer up in the pyramid aims to
          address and cover these gaps.
        </Paragraph>

        <SubHeading theme={theme}>PO: Traditional Stats</SubHeading>
      </div>
    </PageWrap>
  );
};

export default StadiumLive;
