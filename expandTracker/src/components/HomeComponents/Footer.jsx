import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import { Context } from '../../App' 
import { Link } from 'react-router-dom'

const Footer = () => {

  const { setPopUpActive, theme } = React.useContext(Context)

  return (
    <div className='footer' style={ theme ? { backgroundColor: '#131313' } : { backgroundColor: 'white' }}>
      <Link to='/analytics'><GrAnalytics color={theme ? 'white' : 'black'} size={30}/></Link>  
      <FaPlus color={theme ? 'white' : 'black'} className='svgplus' size={30} onClick={() => setPopUpActive(true)}/>
      <FaRobot color={theme ? 'white' : 'black'} size={30}/>
    </div>
  )
}

export default Footer