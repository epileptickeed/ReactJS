import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

import { motion, AnimatePresence } from 'framer-motion'
 
const Navbar = ({ textenter, textleave }) => {

    const [navVisible, setNavVisible] = useState(true)

    const nav = [
        'Home',
        'Pages',
        'Shop',
        'Blog'
    ]

    const navMenu = [
        'Home',
        'Pages',
        'Shop',
        'Blog',
        'Cart(0)',
        'Search'
    ]

    const dropIn = {
        hidden: {
            x: '-50%',
            opacity: 0,
        },
        visible: {
            x: '0%',
            opacity: 1,
        },
        exit: {
            x:'-50%',
            opacity: 0,
        }
    }

  return (
    <div className='navbar'>
        <div className="nav">
            <button className={navVisible ? "menuButton" : "notVisible"} onClick={() => setNavVisible(!navVisible)}><RiMenu2Fill size={30}/></button>
            <AnimatePresence className={navVisible ? 'notVisible' : 'nav_menu'} mode='wait'>
                {navVisible || (
                    <motion.div className="navMenu"
                        variants={dropIn}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        transition={{ type: 'tween', ease: 'backOut'}}
                    >
                        <button className={navVisible ? "notVisible" : "menuButton"} onClick={() => setNavVisible(!navVisible)}><IoCloseSharp size={30}/></button>
                        {navMenu.map( (item, index) => {
                            return(<a key={index} href=''>{item}</a>)
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
            {nav.map( (item, index) => {
                return( <a 
                            key={index} 
                            href='#'
                            onMouseEnter={textenter}
                            onMouseLeave={textleave}
                            className={navVisible ? 'nav_items' : 'notVisible'}
                            > {item} </a> )
            })}
        </div>
        <div className="logo">
            <img src={require('../../assets/images/logo.png')} alt="logoearlybird" />
        </div>
        <div className='cart'>
            <a className={navVisible ? 'nav_items' : 'notVisible'} onMouseEnter={textenter} onMouseLeave={textleave} href="">cart (0)</a>
            <a className={navVisible ? 'nav_items' : 'notVisible'} onMouseEnter={textenter} onMouseLeave={textleave} href="">search</a>
            <img src={require('../../assets/images/icon.png')} alt="icon" />
        </div>
    </div>
  )
}

export default Navbar