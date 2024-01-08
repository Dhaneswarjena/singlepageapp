import React from 'react'
import '../Styles/Footer.scss'
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='foot_left'>
         <h2>CodeTech.</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut, </p>
         <p><MdEmail style={{marginTop: '2px', marginRight: '10px'}}/><a href="email:codetech@tech.com">codetech@tech.com</a></p>
         <p><IoIosCall style={{marginTop: '2px', marginRight: '10px'}}/><a href="tel:+91 400-2563874">+91 400-2563874</a></p>
      </div>
      <div className='foot_middle'>
      <ul>
        <li>About Us.</li>
        <li>FaQ</li>
        <li>Privacy policy</li>
        <li>Contact us</li>
      </ul>
      <ul className='right_list'>
        <li>Product</li>
        <li>Brand</li>
      </ul>
      </div>
      <div className='foot_last'>
      <h2>Social media.</h2>
         <p><FaYoutube style={{marginTop: '2px', marginRight: '10px'}}/><a href="youtube.com">Youtube</a></p>
         <p><FaLinkedin style={{marginTop: '2px', marginRight: '10px'}}/><a href="linkedin.com">Linked In</a></p>
         <p><FaSquareInstagram style={{marginTop: '2px', marginRight: '10px'}}/><a href="instagram.com">Instagram</a></p>
</div>
    </div>
    </>
  )
}

export default Footer