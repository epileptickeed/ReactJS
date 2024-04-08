import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Context } from '../pages/Home'
import { FaPlus } from "react-icons/fa6";


const Tags = () => {


    const { tagActive, setTagActive, pickedTag, setPickedTag, allTags, setAllTags} = React.useContext(Context)


    const [tagsCreator, setTagsCreator] = useState(false)

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
    
    const addNewTag = () => {

        setAllTags(curTags => {
            return [
                ...curTags,

                {id: crypto.randomUUID, title: '11', emoji: '11'}
            ]
        })
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
            <FaPlus className='svgplus' size={30} 
                onClick={() => addNewTag()}
            />
            {allTags.map( (item, index) => {
                return(
                    <div className='tags_arr__item' key={index} onClick={(e) => setTagHandler(e)}> 
                        <div className="emoji__item">{item.emoji}</div> 
                        <div className="emoji__title">{item.title}</div>  
                    </div>
                )
            })}

            <motion.div className={'tags'}
                    initial='hidden'
                    animate={tagsCreator ? 'active' : ''}
                    exit='exit'
                    variants={vars}
                    transition={{duration: 0.8, ease: [.2, 0, 0.24,1]}}
            >

            </motion.div>
        </div>
    </motion.div>
  )
}

export default Tags