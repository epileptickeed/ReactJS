import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className="image_block">
            <img src={require('../../assets/images/main-home.png')} alt="" />
        </div>
        <div className="enjoy_block">
            <h1>ENJOY LIFE SIP BY SIP</h1>
        </div>
    </div>
  )
}

export default Header