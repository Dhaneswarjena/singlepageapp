import React from 'react'
import '../Styles/Contact.scss'
import contact from '../Assets/contact.svg'
const Contact = () => {
  return (
    <>
    <div className='cont_sec'>
        <div className='cont_sec1'>
           <img src={contact} alt="Contact_svg" />
        </div>
        <div className='cont_sec2'>
        <div className='seccont'>
        <h1>Conatct</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <input type="Name" placeholder='Enter Your name'/>
          <input type="Email" placeholder='Enter Your Email'/>
          <input type="number" placeholder='Enter Mobile Number'/>
           <textarea name="" id="" cols="30" rows="5" placeholder='Enter message...'></textarea>
           <button>Learn more</button>
        </div>
         
        </div>
    </div>
    </>
  )
}

export default Contact