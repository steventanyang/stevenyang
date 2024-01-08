import '../static/Projects.css'
import Toggle from '../components/Toggle'

import styled from 'styled-components'
import { useContext } from 'react'
import { DarkContext } from '../contexts/DarkContext'
import { Link } from 'react-router-dom';

const PageWrap = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Title = styled.div`
  color: ${props => props.theme.color};
  font-family: 'Roboto';
  font-size: 3.5rem;
  font-weight: 400;
  margin-left: 10%;
  text-shadow: 0 0 1px #FEFFDD, 0 0 2px #FEFFDD, 0 0 3px #FEFFDD;
`;

const Description = styled.div`
  color: ${props => props.theme.color};
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 400;
  margin-top: 3%;
  margin-bottom: 3%;
  text-shadow: 0 0 1px #FEFFDD, 0 0 2px #FEFFDD, 0 0 3px #FEFFDD;
`;

export default function Projects() {

  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);

  return (
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


      <div className='title-container'>
        <Link to='/'><Title> &lt;/&gt; projects</Title></Link>
      </div>
      <div className='description-container'>
        <Description>
          here's a collection of projects that I've worked on over the years!
        </Description>
      </div>

      <div className='grass-humus' style={{ backgroundColor: theme === 'light' ? '#619449': '#3B5856'}}></div>
      <div className='grass-humus' style={{ backgroundColor: theme === 'light' ? '#4C370D': '#2C3023'}}></div>
      <div className='topsoil' style={{ backgroundColor: theme === 'light' ? '#8C6A28': '#576151'}}></div>
      <div className='topsoil' style={{ backgroundColor: theme === 'light' ? '#73551B': '#464D39'}}></div>

      {/* 2024 */}
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#654A15': '#3D4334'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#826122': '#576151' }}>2024</h2>
      </div>

      {/* 2023 */}
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#4C370D': '#2C3023'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#654A15': '#464D39' }}>2023</h2>
      </div>

      {/* 2022 */}      
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#726240': '#4C5046'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#4C370D': '#2C3023' }}>2022</h2>
      </div>

      {/* <div className='test-container'>
        <Link to='/'>
          <h2>penis</h2>
        </Link>
      </div> */}



    </PageWrap>
  );
}