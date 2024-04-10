import React from 'react'
import logo from '../assets/images/logo.jpg'
import '../assets/styles/header.css'
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='header'>
        <div className="header_inner">

            <div className="logo">
                <img src={logo} alt="" />
                <div className="logo_inner">
                    <h1>React Pizza</h1>
                    <span>самая вкусная пицца во вселенной</span>
                </div>
            </div>

            <div className="cart">
                <p className='text'>0 ₽</p>
                <FaCartShopping />
            </div>

        </div>
        <hr />
    </div>

  )
}

export default Header