import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import { Context } from '../pages/Home'

const Footer = () => {

  const { setPopUpActive } = React.useContext(Context)

  return (
    <div className='footer'>
      <GrAnalytics size={30}/>
      <FaPlus className='svgplus' size={30} onClick={() => setPopUpActive(true)}/>
      <FaRobot size={30}/>
    </div>
  )
}

export default Footer