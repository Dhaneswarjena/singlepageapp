import React from 'react';
import '../Styles/About.scss'
import abt from '../Assets/abt.svg'
const About = () => {
  return (
    <>
      <section>
        <div className='About_Section'>
         <div className='About_left'>
         <div className='content'>
         <h1>About <strong className='abttext'>Code Tech</strong></h1>
            <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
            <button>Learn more</button>
         </div>
           
         </div>
         <div className='About_right'>
          <img src={abt} alt="about_image" />
         </div>
        </div>
      </section>
    </>
  )
}

export default About