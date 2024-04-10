import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CiShoppingTag } from "react-icons/ci";

import { auth, db } from '../../../config/firebase'
import { collection, addDoc, serverTimestamp, query, where, orderBy } from 'firebase/firestore'
import { UseMainContext } from '../../../context/MainContext';
import { AuthContextProvider, UserAuth } from '../../../context/AuthContextProvider';


const PopUp = () => {

    const { popUpActive, setPopUpActive, setTagActive, pickedTag, priceValue, setPriceValue, ConfirmActive, setConfirmActive, allEvents } = UseMainContext()
    const { user } = UserAuth()


    let newDate = new Date()
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = newDate.getDay()
    let month = newDate.getMonth()
    let year = newDate.getFullYear()
    let minutes = newDate.getMinutes()
    let hours = newDate.getHours()


    const userID = user?.uid

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
                tag: pickedTag, dateHours: hours, dateMin: minutes, price: priceValue, date: new Date(), user: auth.currentUser.displayName
            })
            console.log(expensesCollectionRef)
            
            allEvents()
        }else return false
    }
    

    // TODO: IN FIRESTORE????? maybe i was searching for the wrong thing all this time?
    // service cloud.firestore {
    //     match /databases/{database}/documents {
    //       match /expenses/{expenseId} {
    //         allow read, write: if request.auth != null && request.auth.uid == resource.data.user;
    //       }
    //     }
    //   }
    

    useEffect(() => {
        const queryEvents = query(
            collection(db, "expenses"),
            orderBy("date")
            // where("user", "==", userID)

            // expensesCollectionRef,
            // where("user", "===", auth.currentUser)
            //orderBy("date") <-- сделать, вроде бы в 11:00 обновиться quota
        )
        
        // console.log(queryEvents)
    }, [])
    // console.log(user)

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