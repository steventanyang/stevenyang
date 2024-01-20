import '../static/Projects.css'
import Toggle from '../components/Toggle'

import styled from 'styled-components'
import { useContext, useState } from 'react'
import { DarkContext } from '../contexts/DarkContext'
import { Link } from 'react-router-dom';
import legm from '../images/legm.png'
import projectlebron from '../images/projectlebron.png'
import asklebron from '../images/asklebron.png'
import pokemon from '../images/pokemon.png'
import chromosense from '../images/chromosense.png'

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

// const Description = styled.div`
//   color: ${props => props.theme.color};
//   font-family: 'Roboto';
//   font-size: 2rem;
//   font-weight: 400;
//   margin-top: 5%;
//   margin-bottom: 5%;
//   margin-left: 5%;
//   margin-right: 5%;
//   text-shadow: 0 0 1px #FEFFDD, 0 0 2px #FEFFDD, 0 0 3px #FEFFDD;
// `;


function GreyBox(props) {

  const Tool = (value) => {
    if (value === 'CSS') {
      return '#757629';
    } else if (value === 'Django') {
      return '225724';
    } else if (value === 'Flask') {
      return '#404040';
    } else if (value === "Git") {
      return '#814A17';
    } else if (value === "JavaScript") {
      return '#767319';
    } else if (value === "MongoDB") {
      return '#1C431E';
    } else if (value === "MySQL") {
      return '#85621E';
    } else if (value === "Pandas") {
      return '#1C431E';
    } else if (value === "Python") {
      return '#496A7C';
    } else if (value === "React" || value === "React Native") {
      return '#1F4E68';
    } else if (value === "Selenium") {
      return '#405B39';
    } else if (value === "SQLite") {
      return '#275B5B';
    } else {
      return '#404040';
    }
  };

  return (
    <div className='grey-overlay'>
      <span className='grey-title-container'>
        <h2 className='grey-title'>{props.title}</h2>
      </span>

      <span className='tech-boxes-container'>
          <div className='techbox' style={{backgroundColor: Tool(props.tool1)}}>
            <p className='techbox-text'>{props.tool1}</p>
          </div>
          <div className='techbox' style={{backgroundColor: Tool(props.tool2)}}>
            <p className='techbox-text'>{props.tool2}</p>
          </div>
          <div className='techbox' style={{backgroundColor: Tool(props.tool3)}}>
            <p className='techbox-text'>{props.tool3}</p>
          </div>
      </span>

      <span className='grey-des-container'>
        <p className='grey-description'>{props.description}</p>
        <p className='grey-description-short'>{props.shortdescription}</p>
      </span>

      {/* <a href="https://www.linkedin.com/in/steven-yang-2059b0268/" target="blank">link</a> */}
    </div>
  )
}

export default function Projects() {

  const { theme, setTheme, isToggled, setIsToggled } = useContext(DarkContext);

    const [selectedImage, setSelectedImage] = useState({});

    const handleClick = (imageId) => {
      setSelectedImage(prevSelected => ({
          ...prevSelected,
          [imageId]: !prevSelected[imageId]
      }));
    };

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
        <Link to='/' style={{ textDecoration: "none"}}><Title> &lt;/&gt; projects</Title></Link>
      </div>
      <div className='description-container' >
        <div className='description' style={{ color: theme === 'light' ? '#5A5A5A': '#FEFFDD'}}>
          here's a collection of projects that I've worked on over the years!
        </div>
      </div>

      <div className='grass-humus' style={{ backgroundColor: theme === 'light' ? '#619449': '#3B5856'}}></div>
      <div className='grass-humus' style={{ backgroundColor: theme === 'light' ? '#4C370D': '#2C3023'}}></div>
      <div className='topsoil' style={{ backgroundColor: theme === 'light' ? '#8C6A28': '#576151'}}></div>
      <div className='topsoil' style={{ backgroundColor: theme === 'light' ? '#73551B': '#464D39'}}></div>

      {/* 2024 */}
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#654A15': '#3D4334'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#826122': '#576151' }}>2024</h2>
          
        <div className='projects-container'>
          <div className='image-container' onClick={() => handleClick('legm')}>
              {selectedImage['legm'] 
                  ? <GreyBox
                      title='LeGM Fantasy Manager'
                      description='I got tired of losing in my fantasy league. LeGM is an all-in-one fantasy manager so I can start winning again.
                      Features include optimized lineup suggestions, an ai search, a team dashboard, and an injury news feed.'
                      shortdescription='All-in-one fantasy manager with lineup suggestions, ai search, team dashboard, and news feed'
                      tool1='React'
                      tool2='MySQL'
                      tool3='Selenium'
                    />
                  : <img className='project-box' src={legm} style={{ marginLeft: 'none' }} alt='none'/>
              }
          </div>
        </div>
      </div>

      {/* 2023 */}
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#4C370D': '#2C3023'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#654A15': '#464D39' }}>2023</h2>

        <div className='projects-container'>
          <div className='image-container' onClick={() => handleClick('projectlebron')}>
            {selectedImage['projectlebron']
              ? <GreyBox
                  title='Project LeBron'
                  description='I was using this productivity app called "forest" and that became the inspiration behind this app. 
                  Tracking shootaround stats was something that I always thought would be cool. The hardware used a motion sensor + vibration sensor.'
                  tool1='React Native'
                  tool2='MongoDB'
                  tool3='Flask'
                />
                : <img className='project-box' src={projectlebron} alt='none'/>
            }
          </div>
          <div className='image-container' onClick={() => handleClick('pokemon')}>
            {selectedImage['pokemon']
                ? <GreyBox
                    title='Pokemon Hunting Simulator'
                    description='Back in my pokemon prime I used to hunt for shinies on my DS. 
                    This is a simple simulator that I made to simulate the experience. It tracks all 9 regions and you can adjust the odds.'
                    tool1='Django'
                    tool2='SQLite'
                    tool3='Python'
                  />
                : <img className='project-box' src={pokemon} alt='none'/>
            }
          </div>
          <div className='image-container' onClick={() => handleClick('chromosense')}>
            {selectedImage['chromosense']
                ? <GreyBox
                    title='iGEM Team Website'
                    description='I had to design and create a website for my igem team. Our project was based on diagnosing fish diseases,
                    so the website was designed to be fish tank themed.'
                    tool1='HTML'
                    tool2='CSS'
                    tool3='JavaScript'
                  />
                : <img className='project-box' src={chromosense} alt='none' style={{ marginRight: '50px'}}/>
            }
          </div>
        </div>
      </div>

      {/* 2022 */}      
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#726240': '#4C5046'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#4C370D': '#2C3023' }}>2022</h2>

        <div className='projects-container'>
          <div className='image-container' onClick={() => handleClick('asklebron')} style={{ marginBottom: '20%'}}>
            {selectedImage['asklebron']
                ? <GreyBox
                    title='AskLebron'
                    description='I was addicted to this fantasy-sports mobile game called stadium live app in highschool. At one point I was probably spending 3+ hours everyday making lineups. 
                    I said enough was enough and made a program that would automate the process for me. '
                    tool1='Python'
                    tool2='Pandas'
                    tool3='Flask'
                  />
                : <img className='project-box' src={asklebron} style={{ marginLeft: 'none' }} alt='none'/>
            }
          </div>
        </div>
      </div>

      {/* <div className='test-container'>
        <Link to='/'>
          <h2>penis</h2>
        </Link>
      </div> */}

    </PageWrap>
  );
}