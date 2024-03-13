import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import { RiShoppingBasket2Line } from "react-icons/ri";
import logo from '../../assets/images/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [btnActive, setBtnActive] = useState(false)

  const close = () => setBtnActive(false)
  const open = () => setBtnActive(true)

  const dropIn = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 65,
        stiffness: 700,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className="navbar_inner">
            <a href="#">Home</a>
            <a href="#">Pages</a>
            <a href="#">Products</a>
            <a href="#">Blog</a>
            <a href="#">Portfolio</a>
            <a href="#"><RiShoppingBasket2Line /></a>
            <button className='btn_contact'>
                contact
            </button>
        </div>
        <div onClick={() => open()} className='btnOpen'>{btnActive ? '' : <CiMenuFries size={30}/>}</div>
        <AnimatePresence mode='wait'>
          {btnActive && (
              <motion.div 
                key='modal'
                className="navbar_toggleMenu"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit">
                
                <motion.div className="navbar_toggleMenu__inner" key='notmodal'>
                  <IoMdClose className='' onClick={() => close()} size={30}/>
                  <a href="#">Home</a>
                  <a href="#">Pages</a>
                  <a href="#">Products</a>
                  <a href="#">Blog</a>
                  <a href="#">Portfolio</a>
                  <a href="#"><RiShoppingBasket2Line /></a>
                  <button className='btn_contact'>
                    contact
                  </button>
                </motion.div>

              </motion.div>
          )}
        </AnimatePresence>
        
        
    </div>
  )
}

export default Navbar