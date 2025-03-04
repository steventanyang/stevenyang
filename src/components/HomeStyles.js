import styled from "styled-components";

export const PageWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: ${(props) => (props.unlocked ? "0" : "2rem")};
  position: relative;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Name = styled.div`
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

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const StyledLink = styled.a`
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

export const Spacer = styled.div`
  width: 300px;
  height: 1px;
  background-color: ${(props) => props.theme.color};
  margin: 1.5rem auto;
  opacity: 0.2;
`;

export const HighlightedLink = styled.span`
  font-family: "Source Code Pro", monospace;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;

  ${(props) =>
    props.theme === "light"
      ? `
      color: #424242;
      font-weight: 700;
    `
      : `
      color: ${props.darkColor || "#7FDFFF"};
      text-shadow: 0 0 2px #fff, 0 0 2px #fff;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

export const IntroText = styled.div`
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

export const IslandContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;

  .island-and-logo {
    text-align: center;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .island {
    width: 160px;
    height: auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;

    .island {
      width: 100px;
    }
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsSection = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 8rem;
  position: relative;
`;

export const NavigationText = styled.div`
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  z-index: ${(props) => (props.visible ? "10" : "-1")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.2s ease,
    z-index 0s ${(props) => (props.visible ? "0s" : "0.2s")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
`;

export const NavItem = styled.span`
  color: ${(props) =>
    props.theme === "light" ? props.theme.color : "#F6F6F6"};
  font-family: "Source Code Pro", monospace;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: ${(props) => (props.active ? "1" : "0.8")};
  transition: opacity 0.2s;
  text-shadow: ${(props) =>
    props.theme === "dark" ? "0 0 1px #FEFFDD" : "none"};
  padding: 0.2rem 0;
  position: relative;

  &:hover {
    opacity: 1;
  }
`;

export const NavUnderline = styled.div`
  position: absolute;
  bottom: -2px;
  height: 2px;
  background-color: ${(props) =>
    props.theme === "light" ? "#424242" : "#fff"};
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  transition: left 0.25s ease, width 0.25s ease;
  box-shadow: ${(props) =>
    props.theme === "dark" ? "0 0 5px #FEFFDD" : "none"};
`;

export const ContentWrapper = styled.div`
  opacity: ${(props) => (props.isLoading ? 0.5 : 1)};
  transition: opacity 0.3s ease;
  width: 100%;
`;
