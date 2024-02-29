import React, { useState } from 'react'

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

  return (
    <div className='header'>
        <div className="header_inner">
            <nav className="nav">
                <div className="logo">
                    g.
                </div>
                <a href="#">Inspiration</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className="menu" style={{cursor: 'pointer'}} onClick={() => setMenuActive(!menuActive)}>
                {menuActive ? <IoMdClose color='white' size={30} /> : <CiMenuFries color='white' size={30} />}
                <div className={menuActive ? 'menu_inner' : 'menu-hidden'}>
                    <div className="menu_nav">
                        <a href="#">Inspiration</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header