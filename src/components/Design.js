import '../static/Design.css'
import Toggle from '../components/Toggle'

import styled from 'styled-components'
import { useContext, useState } from 'react'
import { DarkContext } from '../contexts/DarkContext'
import { Link } from 'react-router-dom';
import legm from '../images/legm.png'
import projectlebron from '../images/projectlebron.png'
import chromosense from '../images/chromosense.png'

import giraffe from '../images/giraffe.png'
import turtle from '../images/turtle.png'
import river from '../images/river.png'
import pinkflower from '../images/pinkflower.png'
import zebra from '../images/zebra.png'
import hippo from '../images/hippo.png'
import blueflower from '../images/blueflower.png'
import elephant from '../images/elephant.png'
import bluebird from '../images/bluebird.png'
import tree from '../images/tree.png'


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


function GreyBox(props) {

  

  const Tool = (value) => {
    if (value === 'CSS') {
      return '#757629';
    } else if (value === 'Figma') {
      return '#65499F';
    } else if (value === 'Demo') {
      return '#1F4E68';
    } else if (value === "Overview") {
      return '#404040';
    } else {
      return '#fff';
    }
  };

  return (
    <div className='grey-overlay'>
      <span className='grey-title-container'>
        <h2 className='grey-title'>{props.title}</h2>
      </span>

      <span className='tech-boxes-container'>
          <a href={props.link1} className='techbox' style={{backgroundColor: Tool(props.tool1)}}>
            <p className='techbox-text'>{props.tool1}</p>
          </a>
          <a href={props.link2} className='techbox' style={{backgroundColor: Tool(props.tool2)}}>
            <p className='techbox-text'>{props.tool2}</p>
          </a>
          <a href={props.link3} className='techbox' style={{backgroundColor: Tool(props.tool3)}}>
            <p className='techbox-text'>{props.tool3}</p>
          </a>
      </span>

      <span className='grey-des-container'>
        <p className='grey-description'>{props.description}</p>
        <p className='grey-description-short'>{props.shortdescription}</p>
      </span>

      {/* <a href="https://www.linkedin.com/in/steven-yang-2059b0268/" target="blank">link</a> */}
    </div>
  )
}

export default function Design() {

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
        <Link to='/' style={{ textDecoration: "none"}}><Title> &lt;3 design</Title></Link>
      </div>
      <div className='description-container' >
        <div className='description' style={{ color: theme === 'light' ? '#5A5A5A': '#FEFFDD'}}>
          Click on the boxes to learn more!
        </div>
      </div>

      <div className='grass-humus' style={{ backgroundColor: theme === 'light' ? '#619449': '#3B5856'}}></div>
      <div className='grass-humus' style={{ backgroundColor: theme === 'light' ? '#4C370D': '#2C3023'}}></div>
      <div className='topsoil' style={{ backgroundColor: theme === 'light' ? '#8C6A28': '#576151'}}></div>
      <div className='topsoil' style={{ backgroundColor: theme === 'light' ? '#73551B': '#464D39'}}></div>

      {/* Projects */}
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#654A15': '#3D4334'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#826122': '#576151' }}>Projects</h2>
          
        <div className='projects-container'>
          <div className='image-container' onClick={() => handleClick('legm')}>
            {selectedImage['legm'] 
              ? <GreyBox
                  title='LeGM Fantasy Manager'
                  description='I got tired of losing in my fantasy league. LeGM is an all-in-one fantasy manager so I can start winning again.
                  Features include optimized lineup suggestions, an ai search, a team dashboard, and an injury news feed.'
                  tool1='Demo'
                  tool2='Figma'
                  tool3='Overview'
                  link1='https://www.linkedin.com/in/steven-yang-2059b0268/'
                  link2='https://www.linkedin.com/in/steven-yang-2059b0268/'
                  link3='https://www.linkedin.com/in/steven-yang-2059b0268/'
                />
              : <img className='project-box' src={legm} style={{ marginLeft: 'none' }} alt='none'/>
            }
          </div>
          <div className='image-container' onClick={() => handleClick('projectlebron')}>
            {selectedImage['projectlebron']
              ? <GreyBox
                  title='Project LeBron'
                  description='I was using this productivity app called "forest" and that became the inspiration behind this app. 
                  Tracking shootaround stats was something that I always thought would be cool. The hardware used a motion sensor + vibration sensor.'
                  tool1='Demo'
                  tool2='Figma'
                  tool3='Overview'
                  link1='https://www.linkedin.com/in/steven-yang-2059b0268/'
                  link2='https://www.linkedin.com/in/steven-yang-2059b0268/'
                  link3='https://www.linkedin.com/in/steven-yang-2059b0268/'
                />
                : <img className='project-box' src={projectlebron} alt='none'/>
            }
          </div>
          <div className='image-container' onClick={() => handleClick('chromosense')} style={{ marginRight: '50px'}}>
            {selectedImage['chromosense']
              ? <GreyBox
                  title='iGEM Team Website'
                  description='I had to design and create a website for my igem team. Our project was based on diagnosing fish diseases,
                  so the website was designed to be fish tank themed.'
                  tool1='Demo'
                  tool2='Figma'
                  tool3='Overview'
                  link1='https://www.linkedin.com/in/steven-yang-2059b0268/'
                  link2='https://www.linkedin.com/in/steven-yang-2059b0268/'
                  link3='https://www.linkedin.com/in/steven-yang-2059b0268/'
                />
              : <img className='project-box' src={chromosense} alt='none' />
            }
          </div>
        </div>
      </div>

      {/* Art */}
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#4C370D': '#2C3023'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#654A15': '#464D39' }}>Paintings</h2>

        <div className='projects-container'>

          <div className='painting-container' style={{marginLeft: "50px"}}>
            <img className='project-box-h' src={giraffe} alt='none' /></div>
          <div className='painting-container'>
            <img className='project-box' src={turtle} alt='none' /></div>
          <div className='painting-container'>
            <img className='project-box-h' src={river} alt='none' /></div>
          <div className='painting-container'>
            <img className='project-box' src={pinkflower} alt='none' /></div>
          <div className='painting-container'>
            <img className='project-box-h' src={zebra} alt='none' /></div>
          <div className='painting-container'>
            <img className='project-box' src={hippo} alt='none' /></div>
          <div className='painting-container'>
            <img className='project-box-h' src={elephant} alt='none' /></div>
          <div className='painting-container'>
            <img className='project-box' src={blueflower} alt='none' /></div>
          <div className='painting-container'>
            <img className='project-box-h' src={tree} alt='none' /></div>
          <div className='painting-container' style={{marginRight: '50px'}}>
            <img className='project-box' src={bluebird} alt='none' /></div>
        </div>

      </div>

      {/* Random */}      
      <div className='subsoil' style={{ backgroundColor: theme === 'light' ? '#726240': '#4C5046'}}>
        <h2 className='yeartitle' style={{ color: theme === 'light' ? '#4C370D': '#2C3023' }}>Random - coming soon...</h2>

        <div className='projects-container'>
            
        </div>
      </div>



    </PageWrap>
  );
}