import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CiShoppingTag } from "react-icons/ci";
import { Context } from '../../App' 

import { db } from '../../../config/firebase'
import { collection, addDoc } from 'firebase/firestore'


const PopUp = () => {

    const { popUpActive, setPopUpActive, setTagActive, pickedTag, priceValue, setPriceValue, ConfirmActive, setConfirmActive, allEvents} = React.useContext(Context)

    let date = new Date()
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()

    const vars = {
        hidden: {opacity: 0, y: '100%'},
        active: {opacity: 1, y: '0'},
        exit: {opacity: 0, y: '100%'},
    }

    const nextHandler = () => {
        if(pickedTag !== 'select your tag' && priceValue !== 0) {
            setConfirmActive(true)
        } else return false

    }

    const expensesCollectionRef = collection(db, "expenses")

    const confirmHandler = async() => { // конферм баттон
        if(priceValue > 0){
            setConfirmActive(false)
            setPopUpActive(false)
           
            await addDoc(expensesCollectionRef, {
                tag: pickedTag, Date: new Date(), price: priceValue
            })
            
            allEvents()
        }else return false
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