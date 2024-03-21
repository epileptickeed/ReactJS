import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Reviews = () => {

    const [reviewNum, setReviewNum] = React.useState(0)

    const reviews = [
        {
            title: "'Another reason people just can't keep away from their local coffee shop is the quality of coffee that's on offer. 1'",
            name: 'Henry Monro',
        },
        {
            title: "'Another reason people just can't keep away from their local coffee shop is the quality of coffee that's on offer. 2'",
            name: 'Bruce Willis',
        },
        {
            title: "'Another reason people just can't keep away from their local coffee shop is the quality of coffee that's on offer. 3'",
            name: 'John Doe',
        },
    ]

    const handleBtn = (i) => {
        setReviewNum(i)
    }

    const variants = {
        hidden: {
            opacity: 0,
            ease: [0, 0.71, 0.2, 1.01],
            scale: 0.5,
            display: 'none',
        },
        visible: {
            opacity: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: 1,
            display: 'block',
        },
        exit: {
            opacity: 0,
            ease: [0, 0.71, 0.2, 1.01],
            scale: 0.5,
        }
    }

  return (
    <div className='reviews'>
        <div className="reviews_block">
            <AnimatePresence>
                {reviews.map( (item, index) => {
                    return( 
                            <motion.div key={index} className={`review_item `}
                            variants={variants}
                            initial='hidden'
                            animate={reviewNum === index ? 'visible' : 'hidden'}
                            exit='exit'
                            >
                                <h1> {item.title} </h1>
                                <p> {item.name} </p>
                            </motion.div> )
                })}
            </AnimatePresence>

            <div className='spans'>
                {reviews.map( (item, index) => {
                    return( <button key={index} onClick={() => handleBtn(index)} className={`btn ${ index === reviewNum ? 'btnActive' : 'btn' }`}></button> )
                })}
            </div>

        </div>

        <div className="reviews_image">
            <img src={require('../assets/images/cup_of_tea.png')} alt="cup_of_tea" />
        </div>
    </div>
  )
}

export default Reviews