import React from 'react'
import Navbar from './Header/Navbar'
import HeaderBlock from './Header/HeaderBlock'

const Header = () => {
  return (
    <div className='main_header'>
        <Navbar />
        <HeaderBlock />
    </div>
  )
}

export default Header