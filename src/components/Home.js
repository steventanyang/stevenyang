import '../static/Home.css'
import island1 from '../images/island1.png'
import island2 from '../images/island2.png'
import island3 from '../images/island3.png'

export default function Home() {
  return (
    <div className='page-wrap'>
        <div className='toggle-container'>
            <div className='test'></div>
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
                <div className='island-and-logo'>
                    <h2 className='island-logo'> (:&lt; </h2>
                    <img className='island island1' src={island1}></img>
                </div>
                <div className='island-and-logo' style={{ marginRight: '2%', marginLeft: '2%' }}>
                    <h2 className='island-logo'> &lt;/&gt; </h2>
                    <img className='island island2' src={island2} ></img>
                </div>
                <div className='island-and-logo'>
                    <h2 className='island-logo'> &lt;3 </h2>
                    <img className='island island3' src={island3}></img>
                </div>
            </div>
        </div>

    </div>
  );
}