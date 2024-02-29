import React from 'react'

const CarouselItem = ({ description, image, pure, cuteness }) => {
  return (
    <div className='carousel_item'>
        <div></div>
        <img className='carousel_image' src={image} alt="" />
        <div className='carousel_item_text'>{description}</div>
    </div>
  )
}

export default CarouselItem