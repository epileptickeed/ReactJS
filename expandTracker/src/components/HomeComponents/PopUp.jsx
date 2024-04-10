import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CiShoppingTag } from "react-icons/ci";

import { auth, db } from '../../../config/firebase'
import { collection, addDoc, serverTimestamp, query, where, orderBy, doc } from 'firebase/firestore'
import { UseMainContext } from '../../../context/MainContext';
import { UserAuth } from '../../../context/AuthContextProvider';
import { getAuth } from 'firebase/auth';


const PopUp = () => {

    

    const { popUpActive, setPopUpActive, setTagActive, pickedTag, priceValue, setPriceValue, ConfirmActive, setConfirmActive, allEvents, activity } = UseMainContext()
    const { user, onAuthStateChanged } = UserAuth()
    // console.log(userExpensesCollectionRef)



    let newDate = new Date()
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = newDate.getDay()
    let month = newDate.getMonth()
    let year = newDate.getFullYear()
    let minutes = newDate.getMinutes()
    let hours = newDate.getHours()

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
    // const userExpensesQuery = query(expensesCollectionRef, where("user", "==", auth.currentUser.uid));
    
    const confirmHandler = async() => { // конферм баттон
        if(priceValue > 0){
            setConfirmActive(false)
            setPopUpActive(false)

            if(auth.currentUser) {

                const userDocRef = doc(db, "users", auth.currentUser.uid)
                const userExpensesCollectionRef = collection(userDocRef, "expenses")

                await addDoc(userExpensesCollectionRef, {
                    tag: pickedTag,
                    dateHours: hours,
                    dateMin: minutes,
                    price: priceValue,
                    date: new Date(),
                    userName: auth.currentUser.displayName,
                    user: auth.currentUser.uid
                })

                console.log("Expense added successfully for user:", auth.currentUser.uid);
                allEvents()
            } else {
                console.error("user not auth-ed")
            } 
            
        } else return false
    }
    
    const showActiv = useMemo(() => {
        console.log(activity)
    } , [activity])


    // TODO: IN FIRESTORE????? maybe i was searching for the wrong thing all this time?
    // service cloud.firestore {
    //     match /databases/{database}/documents {
    //       match /expenses/{expenseId} {
    //         allow read, write: if request.auth != null && request.auth.uid == resource.data.user;
    //       }
    //     }
    //   }


    // im hopeless at this point
    // To ensure that users can only see their own expenses and not those of other users, you need to implement a filtering mechanism when fetching and displaying expenses. Here are some steps you can take: 

    // 1. When fetching expenses to display in the app, make sure to only retrieve expenses that belong to the currently logged-in user. You can do this by adding a query to filter expenses based on the user ID. 

    // 2. Update your Firestore security rules to restrict access to expenses data. You can set rules that only allow users to read and write expenses documents if they match the user ID stored in the document. 

    // 3. When adding a new expense, make sure to include the user ID of the currently logged-in user in the expense document. This way, you can later use this information to filter expenses based on the user. 

    // By implementing these steps, you can ensure that each user can only see and manage their own expenses in the app. If you need further assistance with implementing these changes, feel free to ask.
    

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