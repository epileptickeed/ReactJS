import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion' 
import useMeasure from 'react-use-measure' 

const OurSupplies = () => {

    const supplies = [
        {
            image: require('../assets/images/supplies/goodcoffee.png')
        },
        {
            image: require('../assets/images/supplies/perfectfoods.png')
        },
        {
            image: require('../assets/images/supplies/funnyfarm.png')
        },
        {
            image: require('../assets/images/supplies/philylily.png')
        },
        {
            image: require('../assets/images/supplies/kingsdrink.png')
        },

    ]


    
    // let [ref, { width }] = useMeasure()
    
    const [width, setWidth] = React.useState(0)
    const ref = useRef(null)

    const xTranslation = useMotionValue()

    
    useEffect(() => {
        let controls 

        setWidth(ref.current.scrollWidth - ref.current.offsetWidth)

        let finalPosition = -width / 1.09
        
        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 15,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });
        
        return controls.stop
    }, [xTranslation, width])

  return (
    <div className='supplies'>
        <h1>Our Trusted Supplies</h1>
        <motion.div className='supplies_images' ref={ref} style={{x: xTranslation}}>
            {[...supplies, ...supplies].map( (item, index) => {
                return (
                    <div className='supplies_image__item' key={index}> 
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </motion.div>
    </div>
  )
}

export default OurSupplies