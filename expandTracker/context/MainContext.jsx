import React from 'react'
import { useContext, createContext, useState, useMemo, useEffect } from 'react'

import { auth, db } from '../config/firebase'
import { getDocs, collection, deleteDoc, doc, getDoc, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'

const Context = createContext()

export const MainContext = ({ children }) => {

    const [expenses, setExpenses] = useState(0) // все траты
    const [priceValue, setPriceValue] = useState(0) // намбер в инпуте фигово работает :( 
        //мб попробовать в UseMemo PriceValue??? чтоб типо инпут не багался?
  
    const [activity, setActivity] = useState([])
    
    const [allTags, setAllTags] = useState([])

    const [theme, setTheme] = useState(false) // тема для стр
    const [popUpActive, setPopUpActive] = useState(false) //попАп 1ый для инпута
    const [tagActive, setTagActive] = useState(false)//попАп для тагов
    const [ConfirmActive, setConfirmActive] = useState(false) //попАп для конферма

    const [pickedTag, setPickedTag] = useState('select your tag') 

    const onlyPrice = activity.map(item => parseFloat(item.price)) //<-- получение всех прайсов а потом самого большого из них
    const highestPrice = Math.max(...onlyPrice)

    // сумма для expenses
    let sum = 0
    let result = activity.map(v => sum += +v.price)



    const getAllTags = async() => {

        if(!auth.currentUser?.uid){
            setTimeout(() => {
                getAllTags()
            }, 1000)
            return
        }

        try {
            const userDocRef = doc(db, "users", auth.currentUser?.uid)
            const userTagsCollection = collection(userDocRef, "tags")
            const tagsSnapshot = await getDocs(userTagsCollection)
            const filteredData = tagsSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            // console.log(filteredData)
            setAllTags(filteredData)
        } catch (err) {
            console.error(err)
        }
        
    }
    
    // console.log(allTags)


    const setTagHandler = (e, item) => {
        setTagActive(false)
        const emoji = item.emoji;
        const title = item.title;
        setPickedTag(emoji + title)
    }


    const deleteItem = async(id) => {
        try {
            const userDocRef = doc(db, "users", auth.currentUser.uid)
            const delDoc = doc(userDocRef, "expenses", id)
            await deleteDoc(delDoc)
            allEvents()
            console.log(`expense for user ${auth.currentUser.displayName} has been succesfully deleted`)
        } catch (err) {
            console.error(err)
        }
    }


    const nextHandler = () => {
        if(pickedTag !== 'select your tag' && priceValue !== 0) {
            setConfirmActive(true)
        } else return false

    }    

    const confirmHandler = async() => { // конферм баттон
        if(priceValue > 0){
            setConfirmActive(false)
            setPopUpActive(false)

            if(auth.currentUser) {

                const userDocRef = doc(db, "users", auth.currentUser.uid)
                const userExpensesCollectionRef = collection(userDocRef, "expenses")

                await addDoc(userExpensesCollectionRef, {
                    tag: pickedTag,
                    timeStamp: serverTimestamp(),
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

    
    // console.log(activity)

    // КОРОЧЕ ПИПЕЦ РАБОТАЕТ!!!! уРАААААА СКОЛЬКО Я НАД НИМ КОПАЛСЯ
    // data created by users can only be seen by themselves - как то так крч
    const allEvents = async() => {

        if(!auth.currentUser?.uid){
            setTimeout(() => {
                allEvents()
            }, 1000)
            return
        }

        const userDocRef = doc(db, "users", auth.currentUser.uid)
        const userExpensesCollectionRef = collection(userDocRef, "expenses")
        try {
            //                              sort by time 
            const eventData = await getDocs(query(userExpensesCollectionRef, orderBy('date', 'desc')))
            const filteredData = eventData.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))


            // const q = query(userExpensesCollectionRef, orderBy('timeStamp', 'desc'))

            // const querySnapshot = await getDocs(q)
            // querySnapshot.forEach((doc) => {
            //     console.log(doc.id, '=>', doc.data())
            // })

            // Calculate sum of expenses
            const sum = filteredData.reduce((total, item) => total + item.amount, 0)

            setActivity(filteredData)
            setExpenses(sum)
        } catch (err) {
            console.error(err)
        }
    } 
    
    //чтоб грузило базу сразу при загрузке стр 
    useEffect(() => {
        allEvents()
        getAllTags()
    }, [])
    

    // при изменение [sum] призывается setExpenses(sum) 
    const updateSum = React.useMemo(() => {
        setExpenses(sum)
    }, [sum])





  return (
    <Context.Provider
        value={{
            expenses, setExpenses, sum,
            activity, setActivity,

            theme, setTheme,

            highestPrice,

            deleteItem, allEvents, confirmHandler, nextHandler,

            setTagHandler,

            priceValue, setPriceValue,

            allTags, setAllTags,

            ConfirmActive, setConfirmActive,
            popUpActive, setPopUpActive,
            tagActive, setTagActive,

            pickedTag, setPickedTag
        }}  
    >
        {children}
    </Context.Provider>
  )
}

export const UseMainContext = () => {
    return useContext(Context)
}