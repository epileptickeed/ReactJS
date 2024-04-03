import { animate, useMotionValue } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type BrandsItemsProps = {
    title: string
    img: string
    id: number
}

const BrandsItems = ({ title, img }: BrandsItemsProps) => {

    const [width, setWidth] = React.useState(0)
    const containerRef = useRef()
    const refValue = containerRef.current
    const xTranslation = useMotionValue(0)

    useEffect(() => {
        let controls 
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)

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
    <div className='brands_card' ref={containerRef} style={{x: xTranslation}}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
    </div>
  )
}

export default BrandsItems