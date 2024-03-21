import React from 'react'

import { useScroll, useTransform, motion } from 'framer-motion'

const Barista = () => {

    const container = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [.3, .8])    
    // const x4 = useTransform(scrollYProgress, [0, 1], [0, -150])    

  return (
    <div ref={container} className='barista'>
        <div className="sticky_container">
            <div className='element'>
                <motion.img src={require('../assets/images/barista.png')} alt="image" 
                    style={{scale: scale4,}}
                    
                />
            </div>
        </div>

        <div className="text">

            <p>We host courses covering everything from simple home brewing techniques to advanced latte art to allow you to learn the essential life skill of how to make truly great coffee.</p>
        </div>
    </div>
  )
}

export default Barista