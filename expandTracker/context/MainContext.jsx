import React from 'react'
import { useContext, createContext, useState, useMemo, useEffect } from 'react'

import { auth, db } from '../config/firebase'
import { getDocs, collection, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { UserAuth } from './AuthContextProvider'
import { getAuth } from 'firebase/auth'

const Context = createContext()

export const MainContext = ({ children }) => {


    

    const [expenses, setExpenses] = useState(0) // все траты
    const [priceValue, setPriceValue] = useState(0) // намбер в инпуте фигово работает :( 
        //мб попробовать в UseMemo PriceValue??? чтоб типо инпут не багался?
  
    const [activity, setActivity] = useState([])
    
    // console.log('hello')
    
    // console.log(activity)


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

    //в events идёт а в home чтоб вызвать функцию эту в попАпе
    const expensesCollectionRef = collection(db, "expenses") //база для expenses

    const deleteItem = async(id) => {
        const delDoc = doc(db, "expenses", id)
        await deleteDoc(delDoc)
        allEvents()
    }

    

    const { user, setUser } = UserAuth()
    // console.log(user.uid)
    
    const allEvents = async(auth, currentUser) => {       
        
        const userDocRef = doc(db, "users", currentUser.uid)
        const userExpensesCollectionRef = collection(userDocRef, "expenses")
        try{

            const eventData = await getDocs(userExpensesCollectionRef)
            const filteredData = eventData.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setActivity(filteredData)
            setExpenses(sum)
        } catch (err) {
            console.error(err)
        }
    }
    

    //чтоб грузило базу сразу при загрузке стр 
    useEffect(() => {
        allEvents()
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

            deleteItem, allEvents,

            priceValue, setPriceValue,

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