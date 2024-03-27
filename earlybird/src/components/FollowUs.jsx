import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion' 
import useMeasure from 'react-use-measure' 

const FollowUs = () => {

    const follow = [
        {
            image: require('../assets/images/followUs/1.png')
        },
        {
            image: require('../assets/images/followUs/2.png')
        },
        {
            image: require('../assets/images/followUs/3.png')
        },
        {
            image: require('../assets/images/followUs/4.png')
        },
        {
            image: require('../assets/images/followUs/5.png')
        },
        {
            image: require('../assets/images/followUs/6.png')
        },
        {
            image: require('../assets/images/followUs/7.png')
        },
        {
            image: require('../assets/images/followUs/8.png')
        },
        {
            image: require('../assets/images/followUs/9.png')
        },
        {
            image: require('../assets/images/followUs/10.png')
        },
    ]
    
    

  return (
    <div className='followUs'>
        <motion.div className="followUs_inner">
            {follow.map( (item, index) => {
                return ( 
                    <div key={index} className='followUs_inner__card'>
                        <img src={item.image} alt={item.image} /> 
                    </div>
                )
            })}
        </motion.div>
    </div>
  )
}

export default FollowUs