import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CiShoppingTag } from "react-icons/ci";
import { Context } from '../pages/Home'


const PopUp = () => {

    const { popUpActive, setPopUpActive, setTagActive, pickedTag, priceValue, setPriceValue, ConfirmActive, setConfirmActive, setActivity} = React.useContext(Context)


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

    const nextHandler = () => { // след
        if(pickedTag !== 'select your tag' && priceValue > 0){
            setConfirmActive(true)
        }else return false
    }

    const confirmHandler = () => { // конферм баттон
        if(priceValue > 0){
            setConfirmActive(false)
            setPopUpActive(false)

            setActivity(currentActivities => {
                return [
                    ...currentActivities,
                    {id: crypto.randomUUID(), title: pickedTag, price: priceValue,}
                ]
            })
            setTimeout(() => {
                window.location.reload();
            }, 500)

        }else return false
    }


  return (
    <div>

        <motion.div className={'popUp'}
            variants={vars}
            transition={{duration: 0.8, ease: [.2, 0, 0.24,1]}}
            initial='hidden'
            animate={popUpActive ? 'active' : ''}
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
                        animate={ConfirmActive ? 'active' : ''}
                        exit='exit'
                    >
                        <h2>Confirm</h2>
                        <p>Help us ensure accuracy by reviewing your expense before confirming because you can edit it later.</p>
                        <p> {priceValue} {pickedTag} </p>
                        <button onClick={() => setConfirmActive(false)}>Cancel</button>
                        <button onClick={() => confirmHandler()}>Confirm</button>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    </div>
  )
}

export default PopUp