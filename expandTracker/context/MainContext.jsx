import React from 'react'
import { useContext, createContext, useState, useMemo, useEffect } from 'react'

import { db } from '../config/firebase'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'

const Context = createContext()

export const MainContext = ({ children }) => {

    const [expenses, setExpenses] = useState(0) // все траты
    const [priceValue, setPriceValue] = useState(0) // намбер в инпуте фигово работает :( 
        //мб попробовать в UseMemo PriceValue??? чтоб типо инпут не багался?
  
    const [activity, setActivity] = useState([])
    
    
    const [theme, setTheme] = useState(false) // тема для стр
    const [popUpActive, setPopUpActive] = useState(false) //попАп 1ый для инпута
    const [tagActive, setTagActive] = useState(false)//попАп для тагов
    const [ConfirmActive, setConfirmActive] = useState(false) //попАп для конферма

    const [pickedTag, setPickedTag] = useState('select your tag') 

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

    const allEvents = async() => {

        try{
        const eventData = await getDocs(expensesCollectionRef)
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