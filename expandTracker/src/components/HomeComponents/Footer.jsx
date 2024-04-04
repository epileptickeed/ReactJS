import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import { Link } from 'react-router-dom'

import { UseMainContext } from '../../../context/MainContext';

const Footer = () => {

  const { setPopUpActive, theme } = UseMainContext()

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

  return (
    <div className='footer' style={ theme ? { backgroundColor: '#131313' } : { backgroundColor: 'white' }}>
      <Link to='/analytics'><GrAnalytics color={theme ? 'white' : 'black'} size={30}/></Link>  
      <FaPlus color={theme ? 'white' : 'black'} className='svgplus' size={30} onClick={() => setPopUpActive(true)}/>
      <FaRobot onClick={() => handleSignOut()} color={theme ? 'white' : 'black'} size={30}/>
    </div>
  )
}

export default Footer