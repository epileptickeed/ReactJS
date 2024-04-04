import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { UseMainContext } from '../../../context/MainContext';
import { UserAuth } from '../../../context/AuthContextProvider';


const Header = () => {

  const { logOut } = UserAuth()

  const handleSignOut = async() => {
    try{
      await logOut()
      if(user == null) {
        navigate('/')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const { theme, setTheme } = UseMainContext()

  return (
    <div className='header'>
        <div className='page_theme'>
          <FaMoon onClick={() => setTheme(!theme)} className={ theme ? 'hidden' : 'active' } color={theme ? 'white' : 'black'} size={30}/>
          <LuSunMedium onClick={() => setTheme(!theme)} className={ theme ? 'active' : 'hidden' } color={theme ? 'white ' : 'black'}  size={30}/>
        </div>

        <h1>ANALYTICS</h1>

        <div className='exit'>
          <IoExitOutline onClick={() => handleSignOut()} color={theme ? 'white' : 'black'} size={40}/>
        </div>
    </div>
  )
}

export default Header