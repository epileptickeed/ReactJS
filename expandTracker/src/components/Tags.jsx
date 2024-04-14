import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Context } from '../pages/Home'



const Tags = () => {


    const { tagActive, setTagActive, pickedTag, setPickedTag} = React.useContext(Context)


    const expensesVars = [
        {
            emoji: '🏡',
            title: 'rent',
        },
        {
            title: 'health',
        },
    ]

    const vars = {
        hidden: {opacity: 0, y: '100%', display: 'none'},
        active: {opacity: 1, y: '50%', display: 'block'},
        exit: {opacity: 0, y: '100%', display: 'none'},
    }

    const setTagHandler = (e) => {
        setTagActive(false)
        setPickedTag(e.target.innerHTML)
    }

  return (
    <motion.div className={'tags'}
        initial='hidden'
        animate={tagActive ? 'active' : ''}
        exit='exit'
        variants={vars}
        transition={{duration: 0.8, ease: [.2, 0, 0.24,1]}}
    >
        <h3>EXPENSES</h3>
        <div className='tags_arr'>
            {expensesVars.map( (item, index) => {
                return( 
                <div className='tags_arr__item' key={index} onClick={(e) => setTagHandler(e)}> 
                    <div className="emoji__item">{item.emoji}</div> 
                    <div className="emoji__title">{item.title}</div>  
                </div>
                 )
            })}
        </div>
    </motion.div>
  )
}

export default Tags