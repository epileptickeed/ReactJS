import React from 'react'
import honeyImg from '../../assets/images/honey_image.png'

const HeaderBlock = () => {
  return (
    <div className='header_block'>
        <div className="header_block_info">
            <h2>FRESH & SWEET AS HONEY</h2>
            <h1>honey bee</h1>
            <p>Lorem ipsum dolor sit amet, sint nostrum mea ut, vel semper vidisse eu usu temporibus disputationi voluptatibus in ei est possit salutandi abhorrea acusa</p>
            <button className='btnView'>view more</button>
        </div>
        <div className="header_block_image">
            <img src={honeyImg} alt="" />
        </div>
    </div>
  )
}

export default HeaderBlock