import "../static/Projects.css";
import Toggle from "../components/Toggle";
import Code from "../components/CodeText";

import styled from "styled-components";
import { useContext, useState } from "react";
import { DarkContext } from "../contexts/DarkContext";
import { Link } from "react-router-dom";

import pyramid from "../images/bballpyramid.png";
import chrispaul from "../images/chrispaul42.png";
import fourfactor from "../images/fourfactor.png";
import vorpdatabase from "../images/vorpdatabase.png";
import positionEst from "../images/position_est.png";
import offroleEst from "../images/offrole_est.png";
import bpm from "../images/bpm.png";
import vorpCoeff from "../images/vorp_coeff.png";
import vorpFinal from "../images/vorp.png";

import { vorpObj } from "../constants/Constants";

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

const Ball = () => {
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

        <Image>
          <img
            src={pyramid}
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

        <Paragraph theme={theme}>
          I think basketball analytics can be thought of as a pyramid. Each
          ascending layer becomes more technical and adds more context. While
          every stat has its downsides, the next layer up in the pyramid aims to
          address and cover these gaps.
        </Paragraph>

        <SubHeading theme={theme}>PO: Traditional Stats</SubHeading>

        <Paragraph theme={theme}>
          These are the stats we all know: points, rebounds, assists — stuff
          you'd hear Stephen A. Smith and Skip Bayless debate about. They're
          popular because they're easy to understand. The top players in points
          are usually the best scorers, and the leaders in assists are generally
          the best playmakers.
        </Paragraph>

        <Paragraph theme={theme}>
          However, they leave out a lot of context, on both ends of the court.
          Not all stats are created equal in terms of difficulty and impact — A
          three-pointer by Chris Paul to cut the lead down to 42 counts the same
          as a Ray Allen corner three to clinch Game 7. Traditional numbers miss
          out on things like efficiency, team context, or the situation in which
          a play occurs.
        </Paragraph>

        <Image>
          <img
            src={chrispaul}
            alt=""
            style={{
              width: "30%",
              height: "auto",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>

        <Paragraph theme={theme}>
          As we move up the pyramid, the next layers help us better quantify
          player value and skill, going beyond basic measurements and
          generalizations.
        </Paragraph>

        <SubHeading theme={theme}>P1: Efficiency</SubHeading>

        <Paragraph theme={theme}>
          Efficiency adds context by revealing how well a player maximizes their
          scoring opportunities. This matters as basketball is a game with
          limited scoring opportunities.
        </Paragraph>

        <Paragraph theme={theme}>
          In the past, field goal percentage (FG%) was the go-to stat for
          measuring a player's scoring efficiency. However, FG% doesn’t account
          for the fact that not all shots are worth the same. When people
          started to realize that a player shooting 33% on threes generated the
          same amount of points as a player shooting 50% from 2, our standards
          began to change.
        </Paragraph>

        <CodeBlock className="description" theme={theme}>
          <Code code={trueShooting} />
        </CodeBlock>

        <Paragraph theme={theme}>
          As we move up the pyramid, the next layers help us better quantify
          player value and skill, going beyond basic measurements and
          generalizations.
        </Paragraph>

        <SubHeading theme={theme}>P2 : Rate Based Metrics</SubHeading>

        <Paragraph theme={theme}>
          Efficiency and traditional stats still fail to capture the full
          context. Basketball is a possession-based game. The number of
          possessions can differ depending on the team, impacting the scoring
          opportunities and box stats.
        </Paragraph>

        <Paragraph theme={theme}>
          This shift in understanding introduced metrics like offensive and
          defensive rating — points scored or allowed per 100 possessions — to
          provide a clearer view of team performance. The same adjustments apply
          to individual stats, which are now measured in rates to account for
          the context of each game.
        </Paragraph>

        <Paragraph theme={theme}>
          We can take rebounding as an example. "Rebounds per game" doesn't
          account for minutes played, possessions per game, or available
          rebounds to grab. This gave way to Rebounding Percentage, or the
          percent of available rebounds grabbed while in the game.
        </Paragraph>

        <CodeBlock className="description" theme={theme}>
          <Code code={reboundingPercentage} />
        </CodeBlock>

        <Paragraph theme={theme}>
          Combining the ideas of efficiency and rate-based metrics, Dean Oliver
          introduced the "Four Factors" of basketball, which generalize team
          performance to 4 key metrics: Effective field goal %, Turnover %,
          Offensive Rebound %, and Free Throw Rate. These factors not only
          identify a team's strengths and weaknesses, but they also correlate
          closely with winning basketball games.
        </Paragraph>

        <Image>
          <img
            src={fourfactor}
            alt=""
            style={{
              width: "35%",
              height: "auto",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>

        <SubHeading theme={theme}>P3: Impact</SubHeading>

        <Paragraph theme={theme}>
          Basketball analytics aim to measure player value, which is ultimately
          defined by how much they contribute to winning. There have been
          multiple attempts to create an all-in-one metric that condenses an
          "impact" to a single number. These impact metrics can be categorized
          into two groups: "top-down" and "bottom-up".
        </Paragraph>

        <Paragraph theme={theme}>
          Top-down metrics look at a player's value by analyzing how their team
          performs with and without them on the court. A popular top-down metric
          is RAPM (Regularized Adjusted Plus-Minus), an optimized version of RPM
          (Real Plus-Minus).
        </Paragraph>

        <Paragraph theme={theme}>
          Bottom-up metrics focus on the box score, assigning specific values
          and weights to each player's action to quantify "impact". Popular
          examples of bottom-up metrics include PER, Win Shares per 48 (WS/48),
          FIC, and WPA.
        </Paragraph>

        <Paragraph theme={theme}>
          However, the most trusted metrics combine methodologies from both
          subgroups of metrics. You can look at metrics like{" "}
          <ExternalLink
            href="https://fivethirtyeight.com/features/introducing-raptor-our-new-metric-for-the-modern-nba/"
            theme={theme}
          >
            RAPTOR
          </ExternalLink>
          ,{" "}
          <ExternalLink
            href="https://www.bball-index.com/lebron-introduction/"
            theme={theme}
          >
            LEBRON
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://dunksandthrees.com/epm" theme={theme}>
            EPM
          </ExternalLink>
          , and{" "}
          <ExternalLink href="https://www.stadiumverse.com" theme={theme}>
            DPM.
          </ExternalLink>
        </Paragraph>

        <Heading theme={theme}>VORP</Heading>

        <SubHeading theme={theme}>Calculating VORP</SubHeading>

        <Paragraph theme={theme}>
          VORP (Value Over Replacement Player) in an all-in-one metric that
          assigns a player a value based on their estimated contributions
          compared to what a "replacement player" would provide.
        </Paragraph>

        <Paragraph theme={theme}>
          I've spent the past month building out data infrastructure for our
          varsity warriors basketball team. Now, I'm creating an advanced
          analytics dashboard for our coaching staff, inspired by
          DunksAndThrees.com and Ben Taylor's thinkingbasketball.net. I choose
          to start with VORP.
        </Paragraph>

        <Paragraph theme={theme}>
          There's a few reasons why I chose VORP : <br />
          1. It's relatively <Bold theme={theme}>
            {" "}
            easy to understand.
          </Bold>{" "}
          -2.0 is replacement level and +10 is really good. <br />
          2. It relies only on <Bold theme={theme}> box score data.</Bold> this
          was important since I don't have accurate play by play data. <br />
          3. VORP is <Bold theme={theme}> unique</Bold> because it's impact
          metric classification isn't defined -- to me to falls somewhere in
          between. While it is built upon box score data, it estimates a players
          on-off impact. <br />
          4. <Bold theme={theme}> OBPM</Bold> (Offensive Box Plus-Minus) and
          <Bold theme={theme}> DBPM</Bold> (Defensive Box Plus-Minus) can be
          easily derived from VORP since their underlying calculations are quite
          similar.
        </Paragraph>

        <SubHeading theme={theme}>Aggregate Traditional Stats</SubHeading>

        <Paragraph theme={theme}>
          I originally set up scripts that scraped Synergy Sports, but switched
          over everything to{" "}
          <ExternalLink
            href="https://usportshoops.ca/wbb2024/index.php"
            theme={theme}
          >
            usportshoops.ca
          </ExternalLink>
          , which has data that is manually inputted and thus more accurate.
          Shoutout to Martin Timmerman for letting me scrape his website.
        </Paragraph>

        <Paragraph theme={theme}>
          There were still a few missing pieces that I needed, the most
          important being possession data. Since usportshoops didn't have play
          by play data, I estimated possessions using a formula :
        </Paragraph>

        <CodeBlock className="description" theme={theme}>
          <Code code={possessions} />
        </CodeBlock>

        <Paragraph theme={theme}>
          My possession estimates closely matched what Synergy had. This allowed
          me to fully transitioned away from Synergy and consolidate my data
          source. I also manually calculated pace, offrtg, and defrtg. This is
          visualization of my database schema :
        </Paragraph>

        <Image>
          <img
            src={vorpdatabase}
            alt=""
            style={{
              width: "70%",
              height: "auto",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>

        <Paragraph theme={theme}>
          After converting all stats to per-100 metrics and calculating numbers
          for team efficiency, I needed to estimate player position and
          offensive role.
        </Paragraph>

        <SubHeading theme={theme}>
          Position regression + Offensive role regression
        </SubHeading>

        <Paragraph theme={theme}>
          Using only raw box score stats, we can assign weights to each of these
          stats to get an estimate of position. For example, a pass first guard
          is likely to contribute a greater % to team assists than a center.
          This method was developed by applying regression on a 20-year sample
          of NBA stats. Although the coefficients that I used were based off
          historical NBA data, the results were similar enough to indicate that
          the differences weren’t significant.
        </Paragraph>

        <Image>
          <img
            src={positionEst}
            alt=""
            style={{
              width: "35%",
              height: "auto",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>

        <Paragraph theme={theme}>
          Similarly, offensive role is also calculated with box score data,
          placing players on a spectrum between a creator (someone who makes
          plays for others) or a finisher (someone who scores themselves). You
          can think of how a player who takes a lot of unassisted shots is
          likely more of a scorer, while someone with a high number of assists
          is closer to a playmaker.
        </Paragraph>

        <Image>
          <img
            src={offroleEst}
            alt=""
            style={{
              width: "35%",
              height: "auto",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>

        <SubHeading theme={theme}>BPM</SubHeading>

        <Paragraph theme={theme}>
          Box Plus Minus is calculated by using each player's position and
          offensive role estimates to assign weights to each stat. The value of
          each stat is tied to player archetype. This makes sense—small guards
          shouldn’t be penalized for grabbing fewer rebounds, but bigs should be
          held to a higher standard.
        </Paragraph>

        <Paragraph theme={theme}>
          The coefficients vary linearly, so if a player has position 3, their
          coefficients land exactly halfway between position 1 and position 5.
        </Paragraph>

        <Image>
          <img
            src={vorpCoeff}
            alt=""
            style={{
              width: "45%",
              height: "auto",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>

        <Paragraph theme={theme}>
          By applying these coefficients directly to per 100 stats, and applying
          a position and team efficiency adjustment, I obtained BPM values.
        </Paragraph>

        <Image>
          <img
            src={bpm}
            alt=""
            style={{
              width: "35%",
              height: "auto",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>

        <SubHeading theme={theme}>VORP</SubHeading>

        <Paragraph theme={theme}>
          VORP simply converts a player's BPM to a team contribution metric by
          adjusting for minutes and games played :
        </Paragraph>

        <CodeBlock className="description" theme={theme}>
          <Code code={vorp} />
        </CodeBlock>

        <Image>
          <img
            src={vorpFinal}
            alt=""
            style={{
              width: "35%",
              height: "auto",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          />
        </Image>

        <Heading theme={theme}>Outro</Heading>

        <Paragraph theme={theme}>
          In the upcoming weeks, I'll be aggregating more advanced metrics to
          complete the our warriors analytics dashboard. If you see any glaring
          mistakes please call me out on it. Thank you Jason, Jessica, Roy,
          Martin and David + uwaggs for your support.
        </Paragraph>

        <SubHeading theme={theme}>Appendix :</SubHeading>

        <Paragraph theme={theme}>
          <ExternalLink
            href="https://www.basketball-reference.com/about/bpm2.html"
            theme={theme}
          >
            bpm + vorp in depth
          </ExternalLink>
        </Paragraph>

        <Paragraph theme={theme}>
          Full code snippet of my VORP object :
        </Paragraph>

        <CodeBlock className="description" theme={theme}>
          <Code code={vorpObj} />
        </CodeBlock>
      </div>
    </PageWrap>
  );
};

export default Ball;
