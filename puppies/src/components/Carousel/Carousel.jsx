import React from 'react'
import CarouselItem from './CarouselItem'

import puppy0 from '../../assets/images/puppy.png'
import puppy1 from '../../assets/images/puppy2.jpg'
import puppy2 from '../../assets/images/puppy3.png'

import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { IoIosRadioButtonOff, IoIosRadioButtonOn  } from "react-icons/io";



const Carousel = () => {

    const items = [
        {
        pure: "pure",
        cuteness: "cuteness",
        description: "A puppy is a juvenile dog. Some puppies123 can weigh 1-1.5 kg, while larger ones can weigh up to 7-11 kg.",
        image: require('../../assets/images/puppy.png')
    },
    {
        pure: "pure",
        cuteness: "cuteness",
        description: "A puppy is a juvenile dog. Some puppies can weigh 2525 kg, while larger ones can weigh up to 7-11 kg.",
        image: require('../../assets/images/puppy.png')
    },
    {
        pure: "pure",
        cuteness: "cuteness",
        description: "A puppy is a juvenile dog. Some puppies can weigh12312412 421412kg, while larger ones can weigh up to 7-11 kg.",
        image: require('../../assets/images/puppy.png')
    },
]

    const [activeIndex, setActiveIndex] = React.useState(0)

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = 0
        }else if (newIndex >= items.length){
            newIndex = items.length - 1 
        }
        
        setActiveIndex(newIndex)
    }

  return (
    <div className='carousel'>
        <div 
            className="carousel_inner"
            style={{transform: `translate(-${activeIndex * 100}%)`}}
            >
            {items.map((item, i) => {
                return ( <CarouselItem key={i} {...item}/> )
            })}
        </div>

        <div className="carousel_buttons">
            <button onClick={() => updateIndex(activeIndex-1)}>
                <FaArrowLeft />
            </button>
            <div className="indicators">
                {items.map((item, i) => {
                    return ( 
                    <button 
                    className={i === activeIndex ? <IoIosRadioButtonOn color='white'/> : <IoIosRadioButtonOff color="white" />}
                    onClick={() => updateIndex(i)}
                    key={i}
                    >                      
                    </button> )
                })}
            </div>
            <button onClick={() => updateIndex(activeIndex+1)}>
                <FaArrowRight />
            </button>
        </div>
        
    </div>
  )
}

export default Carousel