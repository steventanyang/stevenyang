import "../static/Home.css";
import Toggle from "../components/Toggle";
import island1 from "../images/island1.png";
import island2 from "../images/island2.png";
import island3 from "../images/island3.png";
import darkisland1 from "../images/darkisland1.png";
import darkisland2 from "../images/darkisland2.png";
import darkisland3 from "../images/darkisland3.png";
import darkwebring from "../images/darkwebring.png";
import webring from "../images/webring.png";

import {
  useContext,
  useState,
  useRef,
  useEffect,
  lazy,
  Suspense,
  useCallback,
  useMemo,
} from "react";
import { DarkContext } from "../contexts/DarkContext";
import HomeStars from "./HomeStars";

// Import content sections
import {
  ProjectsSection,
  ShinanigansSection,
  LifeSection,
} from "./ContentSections";

// Import styled components
import {
  PageWrap,
  Name,
  LinksContainer,
  StyledLink,
  Spacer,
  HighlightedLink,
  IntroText,
  IslandContainer,
  MainContainer,
  ProjectsSection as ProjectsSectionStyled,
  NavigationText,
  NavItem,
  NavUnderline,
  ContentWrapper,
} from "./HomeStyles";

// Lazy load the Stars component
const Stars = lazy(() => import("./Stars"));

export default function Home() {
  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);
  const [unlocked, setUnlocked] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const isPhone = windowSize.width < 1300;

  // Add a state to track the current section
  const [currentSection, setCurrentSection] = useState("projects");

  const topRef = useRef(null);
  const projectsRef = useRef(null);

  // Add refs for navigation items
  const homeNavRef = useRef(null);
  const projectsNavRef = useRef(null);
  const shinanigansNavRef = useRef(null);
  const lifeNavRef = useRef(null);

  // Add state for underline position
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  // Add this to optimize initial render
  const [isInitialRender, setIsInitialRender] = useState(true);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth < 768;

    // Get the position of the grass/soil section
    const projectsSectionTop =
      projectsRef.current?.getBoundingClientRect().top + window.scrollY || 0;
    const grassSectionTop = projectsSectionTop + windowHeight * 0.2; // Approximate position of grass

    // Show navigation when islands are out of view but hide when reaching grass
    const navThreshold = isMobile ? windowHeight * 0.6 : windowHeight * 0.9;
    const shouldShowNav =
      scrollPosition > navThreshold && scrollPosition < grassSectionTop;

    setShowNavigation(shouldShowNav);

    // Auto-unlock when scrolled down
    if (scrollPosition > windowHeight * 0.5 && !unlocked) {
      setUnlocked(true);
    }
  }, [unlocked]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Mark initial render as complete
    setIsInitialRender(false);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Update underline position when section changes
  useEffect(() => {
    if (!showNavigation) return; // Skip calculations if navigation is hidden

    let activeRef;

    switch (currentSection) {
      case "projects":
        activeRef = projectsNavRef.current;
        break;
      case "design":
        activeRef = shinanigansNavRef.current;
        break;
      case "life":
        activeRef = lifeNavRef.current;
        break;
      default:
        activeRef = homeNavRef.current;
    }

    if (activeRef) {
      // Calculate position relative to the navigation container
      const navContainer = activeRef.parentElement;
      const containerLeft = navContainer.getBoundingClientRect().left;
      const itemLeft = activeRef.getBoundingClientRect().left;
      const relativeLeft = itemLeft - containerLeft;

      setUnderlineStyle({
        left: relativeLeft,
        width: activeRef.offsetWidth,
      });
    }
  }, [currentSection, showNavigation]);

  const handleIslandClick = (section) => {
    setCurrentSection(section);
    setUnlocked(true);
    setTimeout(() => {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Navigation handlers
  const navigateToProjects = () => {
    setCurrentSection("projects");

    if (!unlocked) {
      setUnlocked(true);
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const navigateToDesign = () => {
    setCurrentSection("design");

    if (!unlocked) {
      setUnlocked(true);
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const navigateToLife = () => {
    setCurrentSection("life");

    if (!unlocked) {
      setUnlocked(true);
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Add this function to handle the home navigation
  const navigateToHome = () => {
    // Immediately hide the navigation
    setShowNavigation(false);
    // Then scroll to top
    scrollToTop();
  };

  // Render the appropriate content based on currentSection
  const sectionContent = useMemo(() => {
    switch (currentSection) {
      case "design":
        return <ShinanigansSection theme={theme} />;
      case "life":
        return <LifeSection theme={theme} />;
      case "projects":
      default:
        return <ProjectsSection theme={theme} isPhone={isPhone} />;
    }
  }, [currentSection, theme, isPhone]);

  return (
    <PageWrap unlocked={unlocked}>
      <div ref={topRef}></div>
      {theme === "dark" && !isInitialRender && (
        <Suspense fallback={<div></div>}>
          <Stars />
        </Suspense>
      )}
      <div className="top-container">
        <div className="webring-container">
          <a href="https://se-webring.xyz/" style={{ textDecoration: "none" }}>
            <img
              className="webring"
              src={theme === "light" ? webring : darkwebring}
              alt="webring"
            ></img>
          </a>
        </div>
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
      </div>

      <MainContainer>
        <Name>steven yang</Name>
        <LinksContainer>
          <StyledLink
            href="https://github.com/steventanyang"
            target="_blank"
            rel="noreferrer"
          >
            github
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/stevenyangtan/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </StyledLink>
          <StyledLink
            href="mailto:steventanyang@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            email
          </StyledLink>
        </LinksContainer>

        <Spacer />

        <IntroText>
          <span className="heading">Currently:</span> Working on the gen ai
          integration team @ sunlife. I'm looking for opportunities in
          engineering / product / design.
          <br />
          <br />
          <span className="heading">Previously:</span> Built products for 500k
          sports-fans at{" "}
          <HighlightedLink
            onClick={() => handleIslandClick("projects")}
            theme={theme}
            darkColor="#7FDFFF"
          >
            Stadium Live.
          </HighlightedLink>{" "}
          Built data infrastructure + led software development for varsity
          sports analytics at waterloo.{" "}
          <HighlightedLink
            onClick={() => handleIslandClick("projects")}
            theme={theme}
            darkColor="#7FDFFF"
          >
            Created cool projects.
          </HighlightedLink>{" "}
          <br />
          <br />
          <span className="heading">Background:</span> I'm in my 2nd year
          studying{" "}
          <HighlightedLink
            as="a"
            href="https://uwaterloo.ca/future-students/programs/software-engineering"
            target="_blank"
            rel="noreferrer"
            theme={theme}
            darkColor="#7FDFFF"
          >
            Software Engineering @ Waterloo
          </HighlightedLink>
          . I grew up in southern Alberta.
          <br />
          <br />
          <span className="heading">Interests:</span> I love sports - especially{" "}
          <HighlightedLink
            as="a"
            href="https://www.youtube.com/watch?v=qBN90Ymk_gM&ab_channel=%EC%9D%B4%EC%A4%80%ED%98%81"
            target="_blank"
            rel="noreferrer"
            theme={theme}
            darkColor="#7FDFFF"
          >
            basketball
          </HighlightedLink>
          . I also enjoy spending time engaging with art. I paint, make music,
          and like graphic design.
        </IntroText>

        <IslandContainer>
          <div className="island-and-logo island2">
            <div
              onClick={() => handleIslandClick("projects")}
              style={{ cursor: "pointer" }}
            >
              <h2
                className={
                  theme === "light" ? "island-logo" : "dark-island-logo"
                }
              >
                {" "}
                &lt;/&gt;{" "}
              </h2>
              <img
                className="island"
                src={theme === "light" ? island2 : darkisland2}
                alt="island"
              ></img>
            </div>
          </div>
          <div className="island-and-logo island1">
            <div
              onClick={() => handleIslandClick("design")}
              style={{ cursor: "pointer" }}
            >
              <h2
                className={
                  theme === "light" ? "island-logo" : "dark-island-logo"
                }
              >
                {" "}
                (:&lt;{" "}
              </h2>
              <img
                className="island"
                src={theme === "light" ? island1 : darkisland1}
                alt="island"
              ></img>
            </div>
          </div>
          <div className="island-and-logo island3">
            <div
              onClick={() => handleIslandClick("life")}
              style={{ cursor: "pointer" }}
            >
              <h2
                className={
                  theme === "light" ? "island-logo" : "dark-island-logo"
                }
              >
                {" "}
                &lt;3{" "}
              </h2>
              <img
                className="island"
                src={theme === "light" ? island3 : darkisland3}
                alt="island"
              ></img>
            </div>
          </div>
        </IslandContainer>
      </MainContainer>

      {/* Content Section */}
      <ProjectsSectionStyled ref={projectsRef}>
        <NavigationText theme={theme} visible={showNavigation}>
          <NavItem
            ref={homeNavRef}
            theme={theme}
            onClick={navigateToHome}
            active={false}
          >
            about
          </NavItem>
          <NavItem
            ref={projectsNavRef}
            theme={theme}
            onClick={navigateToProjects}
            active={currentSection === "projects"}
          >
            projects
          </NavItem>
          <NavItem
            ref={shinanigansNavRef}
            theme={theme}
            onClick={navigateToDesign}
            active={currentSection === "design"}
          >
            design
          </NavItem>
          <NavItem
            ref={lifeNavRef}
            theme={theme}
            onClick={navigateToLife}
            active={currentSection === "life"}
          >
            life
          </NavItem>

          {/* Add the sliding underline */}
          <NavUnderline
            theme={theme}
            left={underlineStyle.left}
            width={underlineStyle.width}
          />
        </NavigationText>

        {/* Render the memoized content without the wrapper */}
        {sectionContent}
      </ProjectsSectionStyled>
    </PageWrap>
  );
}
