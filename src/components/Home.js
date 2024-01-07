import '../static/Home.css'
import Toggle from '../components/Toggle'
import island1 from '../images/island1.png'
import island2 from '../images/island2.png'
import island3 from '../images/island3.png'
import { useState } from 'react'

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='page-wrap'>
      <div className='toggle-container'>
        <Toggle rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
      </div>
      <div className='main-container'>
        <h2 className='name'>steven yang</h2>

        <div className='links-container'>
          <a className='link-text' href='https://github.com/steventanyang' target="_blank">
            github</a>
          <a className='link-text' href='https://www.linkedin.com/in/stevenyangtan/' target="_blank" style={{ marginRight: '2%', marginLeft: '2%' }}>
            linkedin</a>
          <a className='link-text' href='https://www.linkedin.com/in/stevenyangtan/'>
            email</a>
        </div>

        <div className='island-container'>
          <div className='island-and-logo island2'>
            <a href='/projects'>
              <h2 className='island-logo'> &lt;/&gt; </h2>
              <img className='island' src={island2} ></img>
            </a>
          </div>
            <div className='island-and-logo island1' style={{ marginRight: '2%', marginLeft: '2%' }}>
              <h2 className='island-logo'> (:&lt; </h2>
              <img className='island' src={island1}></img>
            </div>
            <div className='island-and-logo island3'>
              <h2 className='island-logo'> &lt;3 </h2>
              <img className='island' src={island3}></img>
            </div>
        </div>
      </div>

    </div>
  );
}