import React from 'react'
import { motion } from "framer-motion"

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const OurProducts = () => {

    const items = [ 
        {
            title: "Heather Honey",  
            image: require('../assets/images/jar1.png'),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            price: 10.00,
            id:0,
            new: false,
        },
        {
            title: "Jarrah Honey", 
            image: require('../assets/images/jar2.png'),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            price: 15.00,
            id:1,
            new: true,
        },
        {
            title: "Linden Honey", 
            image: require('../assets/images/jar3.png'),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            price: 20.00,
            id:2,
            new: false,
        },
        {
            title: "Jarrah Honey", 
            image: require('../assets/images/jar2.png'),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            price: 15.00,
            id:1,
            new: true,
        },
        {
            title: "Linden Honey", 
            image: require('../assets/images/jar3.png'),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            price: 20.00,
            id:2,
            new: false,
        },
    ]

    const [activeIndex, setActiveIndex ] = React.useState(0)
    const updateIndex = (newIndex) =>{  
        if(newIndex < 0) {
            newIndex = items.length - 3
        }else if(newIndex >= items.length - 2) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    const [width, setWidth] = React.useState(0)

    const carousel = React.useRef()

    React.useEffect(()=> {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

  return (
    <div className='products_outside'>
        <div className='products_main'>
            <div className="texts">
                <h1>Our<br /> Products</h1>
                <p>Check out our online shop for cute bee-themed apparel, unique bee suits, educational tools, gift certificates and more.</p>
            </div>
            
            <motion.div 
            drag='x' dragConstraints={{right: 0, left: -width}} 
            animate={{ x:`-${activeIndex * 20.7}%`}} 
            whileTap={{cursor:'grabbing'}}
            ref={carousel}
            className='products'>
                {items.map((jar, index) => {
                    return(
                    <div key={index} className='jar_div'>
                        <img src={jar.image} alt="" />
                        <h1>{jar.title}</h1>
                        <span> {jar.price}.00$ </span>
                        <p> {jar.description} </p>
                        <button>Buy</button>
                    </div>
                    )
                })}
            </motion.div>
        </div>
        <button className='arrow_btn arrow_btn1' onClick={() => updateIndex(activeIndex - 1)}><FaArrowLeft size={50} /></button>
        <button className='arrow_btn arrow_btn2' onClick={() => updateIndex(activeIndex + 1)}><FaArrowRight size={50} /></button>
    </div>
  )
}

export default OurProducts