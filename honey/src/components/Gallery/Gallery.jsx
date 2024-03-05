import React, { useState } from 'react'
import Backdrop from './Backdrop'
import { motion, AnimatePresence } from "framer-motion"


const Gallery = () => {

    const images = [
        {
            image: require('../../assets/images/gallery/gallery1.png')
        },
        {
            image: require('../../assets/images/gallery/gallery2.png')
        },
        {
            image: require('../../assets/images/gallery/gallery3.png')
        },
        {
            image: require('../../assets/images/gallery/gallery4.png')
        },
        {
            image: require('../../assets/images/gallery/gallery5.png')
        },
        {
            image: require('../../assets/images/gallery/gallery6.png')
        }
    ]

    const [modalOpen, setModalOpen] = React.useState(false)

    const [currentImage, setCurrentImage] = useState({})

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    const handleModal = (e) => {
        e.stopPropagation()
        modalOpen ? close() : open()
        setCurrentImage(e.target.src)
    }

    const dropIn = {
        hidden: {
          y: "-100vh",
          opacity: 0,
        },
        visible: {
          y: "0",
          opacity: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
          },
        },
        exit: {
          y: "100vh",
          opacity: 0,
        },
      };

  return (
    <div className='gallery_main'>
        <div className="gallery_inner">
            <h1>Our<br/> Gallery</h1>
            <p>Mellifera is a true beehive of activity! Check out the latest news and events in our image gallery and see for yourself.</p>
            <div className="gallery__photos">
                {images.map((image, index) => {
                    return (
                        <motion.img 
                            src={image.image}
                            key={index} alt=""
                            whileHover={{ scale: 1.02 }} 
                            onClick={(e) => handleModal(e)}
                            />
                        )
                    })}
                <AnimatePresence 
                    initial={false}
                    mode='wait'
                    onExitComplete={() => null}>
                    {modalOpen && (
                        <Backdrop onClick={() => close()}>
                            <motion.div
                                onClick={(e) => e.stopPropagation()}  
                                className="modal"
                                variants={dropIn}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <img src={currentImage} alt="" />
                                <button onClick={() => close()}>Close</button>
                            </motion.div>
                        </Backdrop>
                    )}
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

export default Gallery