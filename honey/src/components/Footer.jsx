import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import minilogo from '../assets/images/minilogo.png'

const Footer = () => {
  return (
    <footer className='footer_main'>
        <div className="socials">
            <div className='icons'><FaFacebookF/></div>
            <div className='icons'><FaInstagram/></div>
            <div className='icons'><FaTwitter/></div>
        </div>
        <img src={minilogo} alt="" />
        <p>© 2020 Qode Interactive All Rights Reserved</p>
    </footer>
  )
}

export default Footer