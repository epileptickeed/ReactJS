import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { UseMainContext } from '../../../context/MainContext'



const Tags = () => {


    const { tagActive, allTags, setTagHandler} = UseMainContext()

    // console.log(allTags)
   

    const vars = {
        hidden: {opacity: 0, y: '100%', display: 'none'},
        active: {opacity: 1, y: '50%', display: 'block'},
        exit: {opacity: 0, y: '100%', display: 'none'},
    }

  return (
    <motion.div className={'tags'}
        initial='hidden'
        animate={tagActive ? 'active' : 'hidden'}
        exit='exit'
        variants={vars}
        transition={{duration: 0.8, ease: [.2, 0, 0.24,1]}}
    >
        <h3>EXPENSES</h3>
        <div className='tags_arr'>
            {allTags.map((item, index) => {
                return (
                    <div className='tags_arr__item' key={index} onClick={(e) => setTagHandler(e, item)}>
                        <span className='tag_emojis'>{item.emoji}</span>
                        <p>{item.title}</p>
                    </div>
                )
            })}


            {/* {expensesVars.map( (item, index) => {
                return( 
                <div className='tags_arr__item' key={index} onClick={(e) => setTagHandler(e)}> 
                    <div className="emoji__item">{item.emoji}</div> 
                    <div className="emoji__title">{item.title}</div>  
                </div>
                 )
            })} */}
        </div>
    </motion.div>
  )
}

export default Tags