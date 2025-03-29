import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Shinanigans from "./components/Shinanigans";
import Love from "./components/Love";
import Design from "./components/Design";
import Vorp from "./pages/Vorp";
import Ball from "./pages/Ball";
import Stadiumlive from "./pages/Stadiumlive";
import GlobalStyle from "./GlobalStyle";
import { DarkContext } from "./contexts/DarkContext";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import LeCoach from "./pages/LeCoach";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Check localStorage for saved theme preference
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);
  const [isToggled, setIsToggled] = useState(savedTheme === "dark");

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      <DarkContext.Provider
        value={{ isToggled, setIsToggled, theme, setTheme }}
      >
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle /> {/* Apply Global Styles */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/shinanigans" element={<Shinanigans />} />
              <Route path="/life" element={<Love />} />

              {/* writing */}
              <Route path="/ball" element={<Ball />} />
              <Route path="/vorp" element={<Vorp />} />
              <Route path="/stadiumlive" element={<Stadiumlive />} />

              {/* private pages */}
              <Route path="/design" element={<Design />} />
              <Route path="/lecoach" element={<LeCoach />} />
            </Routes>
          </main>
        </ThemeProvider>
      </DarkContext.Provider>
    </BrowserRouter>
  );
}

export default App;
