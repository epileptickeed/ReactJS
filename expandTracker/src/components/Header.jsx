import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";


const Header = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className='header'>
        <div className='page_theme'>
          <FaMoon className={ isActive ? 'hidden' : 'active' } size={30}/>
          <LuSunMedium className={ isActive ? 'active' : 'hidden' } size={30}/>
        </div>

        <h1>EXPENSES</h1>

        <div className='exit'>
          <IoExitOutline size={40}/>
        </div>
    </div>
  )
}

export default Header