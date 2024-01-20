import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects'
import Shinanigans from './components/Shinanigans'
import Love from './components/Love'
import { DarkContext } from './contexts/DarkContext';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes';
import { useState } from 'react';

function App() {

  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState('light');

  return (
    <BrowserRouter>
      <DarkContext.Provider value={{ isToggled, setIsToggled, theme, setTheme }}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/shinanigans" element={<Shinanigans />} />
              <Route path="/life" element={<Love />} />
            </Routes>
          </main>
        </ThemeProvider>
      </DarkContext.Provider>
    </BrowserRouter>
  );
}

export default App;
