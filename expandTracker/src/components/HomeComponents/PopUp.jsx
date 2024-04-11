import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CiShoppingTag } from "react-icons/ci";

import { auth, db } from '../../../config/firebase'
import { collection, addDoc, serverTimestamp, query, where, orderBy, doc } from 'firebase/firestore'
import { UseMainContext } from '../../../context/MainContext';
import { UserAuth } from '../../../context/AuthContextProvider';
import { getAuth } from 'firebase/auth';
import { UseTimeContext } from '../../../context/TimeContextProvider';


const PopUp = () => {

    

    const { nextHandler, confirmHandler, popUpActive, setPopUpActive, setTagActive, pickedTag, priceValue, setPriceValue, ConfirmActive, setConfirmActive} = UseMainContext()
    const { weekDay, day, monthNames, month, year } = UseTimeContext()

    

    const vars = {
        hidden: {opacity: 0, y: '100%'},
        active: {opacity: 1, y: '0'},
        exit: {opacity: 0, y: '100%'},
    }

  return (
    <div>

        <motion.div className={'popUp'}
            variants={vars}
            transition={{duration: 0.8, ease: [.2, 0, 0.24,1]}}
            initial='hidden'
            animate={popUpActive ? 'active' : 'hidden'}
            exit='exit'
        >
            <h1> Today at {weekDay[day]} {monthNames[month]} {day} {year} </h1>
            <input type="number" 
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
            />

            <div className='tag' onClick={() => setTagActive(true)}>
                 {pickedTag === 'select your tag' ? <CiShoppingTag /> : ''}  <span> {pickedTag} </span>
            </div>

            <div>
                <button className='btn btnDanger' onClick={() => setPopUpActive(false)}>Cancel</button>
                <button className='btn btnNext' onClick={() => nextHandler()}>Next</button>
            </div>

            <AnimatePresence>
                {ConfirmActive && (
                    <motion.div className='confirm'
                        variants={vars}
                        transition={{duration: 0.8, ease: [.2, 0, 0.24,1]}}
                        initial='hidden'
                        animate={ConfirmActive ? 'active' : 'hidden'}
                        exit='exit'
                    >
                        <h2>Confirm</h2>
                        <p>Help us ensure accuracy by reviewing your expense before confirming because you can edit it later.</p>
                        <p> {priceValue} {pickedTag} </p>
                        <button className='btnDanger' onClick={() => setConfirmActive(false)}>Cancel</button>
                        <button className='btnConfirm' onClick={() => confirmHandler()}>Confirm</button>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    </div>
  )
}

export default PopUp