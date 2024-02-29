import React, { useState } from 'react'
import puppy from '../assets/images/puppy.png'

import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { IoIosRadioButtonOff, IoIosRadioButtonOn  } from "react-icons/io";


const Puppy = () => {

    const items = [
        {
        pure: "pure",
        cuteness: "cuteness1",
        description: "A puppy is a juvenile dog. Some puppies123 can weigh 1-1.5 kg, while larger ones can weigh up to 7-11 kg.",
        image: require('../assets/images/puppy.png')
    },
    {
        pure: "pure",
        cuteness: "cuteness2",
        description: "A puppy is a juvenile dog. Some puppies can weigh 2525 kg, while larger ones can weigh up to 7-11 kg.",
        image: require('../assets/images/puppy.png')
    },
    {
        pure: "pure",
        cuteness: "cuteness3",
        description: "A puppy is a juvenile dog. Some puppies can weigh12312412 421412kg, while larger ones can weigh up to 7-11 kg.",
        image: require('../assets/images/puppy.png')
    },
    {
        pure: "pure",
        cuteness: "cuteness4",
        description: "A puppy is a juvenile dog. Some puppies can weigh12312412 421412kg, while larger ones can weigh up to 7-11 kg.",
        image: require('../assets/images/puppy.png')
    }
]

    const [active, setActive] = useState(0)

    const updateActive = (newIndex) => {

        if(newIndex < 0){
            newIndex = items.length - 1
        } else if (newIndex >= items.length){
            newIndex = 0
        }

        setActive(newIndex)
    }

  return (
    <div className='puppy_main'>

        

        {items.map((item, index) => {
            return(
                <div key={index} className={index === active ? 'puppy_inner' : 'puppy_hidden'}>
                    <button onClick={() => updateActive(index - 1)}>
                        <FaArrowLeft />
                    </button>
                    <div className="puppy_description">
                        <i style={{color: 'var(--clr-seno)'}}>pure</i>
                        <p>{item.cuteness}</p>
                        <div className='whatever'>
                            <div className="number">
                                <p style={{fontSize: '1rem'}}> <span className='span_number'>0{index + 1}</span>/04</p>
                            </div>
                            <div className="stats">
                                {item.description}
                            </div>
                        </div>
                    </div>
                    <div className="puppy_image">
                        <img src={puppy} alt="" />
                    </div>
                    <button onClick={() => updateActive(index + 1)}>
                        <FaArrowRight />
                    </button>
                </div>                        
            )
        })}

        
        
    </div>
  )
}

export default Puppy