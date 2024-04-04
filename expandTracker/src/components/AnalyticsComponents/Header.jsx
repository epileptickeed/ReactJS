import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { UseMainContext } from '../../../context/MainContext';


const Header = () => {

  const { theme, setTheme } = UseMainContext()
  return (
    <div className='header'>
        <div className='page_theme'>
          <FaMoon onClick={() => setTheme(!theme)} className={ theme ? 'hidden' : 'active' } color={theme ? 'white' : 'black'} size={30}/>
          <LuSunMedium onClick={() => setTheme(!theme)} className={ theme ? 'active' : 'hidden' } color={theme ? 'white ' : 'black'}  size={30}/>
        </div>

        <h1>ANALYTICS</h1>

        <div className='exit'>
          <IoExitOutline color={theme ? 'white' : 'black'} size={40}/>
        </div>
    </div>
  )
}

export default Header