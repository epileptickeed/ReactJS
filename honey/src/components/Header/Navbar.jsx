import React from 'react'
import { RiShoppingBasket2Line } from "react-icons/ri";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
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
    </div>
  )
}

export default Navbar