import '../static/Home.css'
import Toggle from '../components/Toggle'
import island1 from '../images/island1.png'
import island2 from '../images/island2.png'
import island3 from '../images/island3.png'
import darkisland1 from '../images/darkisland1.png'
import darkisland2 from '../images/darkisland2.png'
import darkisland3 from '../images/darkisland3.png'


import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from '../Themes'

const PageWrap = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Name = styled.div`
  color: ${props => props.theme.color};
  font-family: 'Roboto';
  font-size: 3.5rem;
  font-weight: 400;
  margin-top: 5%;
  text-shadow: 0 0 1px #FEFFDD, 0 0 2px #FEFFDD, 0 0 3px #FEFFDD;
`;

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
      <PageWrap>
        <div className='toggle-container'>
          <Toggle 
            rounded={true} 
            isToggled={isToggled} 
            onToggle={() => {
              setIsToggled(!isToggled); 
              theme === 'light' ? setTheme('dark') : setTheme('light')
              }}
          />
        </div>
        <div className='main-container'>
          <Name>steven yang</Name>

          <div className='links-container'>
            <a className={theme === 'light' ? 'link-text': 'dark-link-text'} href='https://github.com/steventanyang' target="_blank">
              github</a>
            <a className={theme === 'light' ? 'link-text': 'dark-link-text'} href='https://www.linkedin.com/in/stevenyangtan/' target="_blank" style={{ marginRight: '2%', marginLeft: '2%' }}>
              linkedin</a>
            <a className={theme === 'light' ? 'link-text': 'dark-link-text'} href='https://www.linkedin.com/in/stevenyangtan/'>
              email</a>
          </div>

          <div className='island-container'>
            <div className='island-and-logo island2'>
              <a href='/projects'>
                <h2 className={theme === 'light' ? 'island-logo': 'dark-island-logo'}> &lt;/&gt; </h2>
                <img className='island' src={theme === 'light' ? island2: darkisland2}></img>
              </a>
            </div>
            <div className='island-and-logo island1' style={{ marginRight: '2%', marginLeft: '2%' }}>
              <a href='/projects'>
                <h2 className={theme === 'light' ? 'island-logo': 'dark-island-logo'}> (:&lt; </h2>
                <img className='island' src={theme === 'light' ? island1: darkisland1}></img>
              </a>
            </div>
            <div className='island-and-logo island3'>
              <a href='/projects'>
                <h2 className={theme === 'light' ? 'island-logo': 'dark-island-logo'}> &lt;3 </h2>
                <img className='island' src={theme === 'light' ? island3: darkisland3}></img>
              </a>
            </div>
          </div>
        </div>

      </PageWrap>
    </ThemeProvider>
  );
}