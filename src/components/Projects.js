import '../static/Projects.css'
import Toggle from '../components/Toggle'

import styled, { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from '../Themes'
import { useState, useContext } from 'react'
import { DarkContext } from '../contexts/DarkContext'
import { Link } from 'react-router-dom';

export default function Projects() {

  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);

  return (
    <div className='page-wrap'>
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
      <div className='test-container'>
        <Link to='/'>
          <h2>penis</h2>
        </Link>
      </div>
    </div>
  );
}