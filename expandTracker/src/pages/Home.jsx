import React, { useEffect, useReducer, useState } from 'react'
import Header from '../components/Header'
import Expenses from '../components/Expenses'
import Events from '../components/Events'
import Footer from '../components/Footer'
import PopUp from '../components/PopUp'
import Tags from '../components/Tags'

import { db } from '../../config/firebase'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'

export const Context = React.createContext()

const Home = () => {

  const [expenses, setExpenses] = useState(0)
  const [priceValue, setPriceValue] = useState(0)
  
  const [activity, setActivity] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(activity))
  }, [activity])

  const [popUpActive, setPopUpActive] = useState(false)
  const [tagActive, setTagActive] = useState(false)
  const [ConfirmActive, setConfirmActive] = useState(false)

  const [pickedTag, setPickedTag] = useState('select your tag') 


  let sum = 0
  let result = activity.map(v => sum += +v.price)

//в events идёт а в home чтоб вызвать функцию эту 
  const expensesCollectionRef = collection(db, "expenses")

  const deleteItem = async(id) => {
    const delDoc = doc(db, "expenses", id)
    await deleteDoc(delDoc)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
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
  
  useEffect(() => {
    allEvents(),
    setExpenses(sum)
  }, [])


  return (
    <div className='home'>
      <Context.Provider
        value={{
          expenses, setExpenses, sum,
          activity, setActivity,

          deleteItem, allEvents,

          priceValue, setPriceValue,

          ConfirmActive, setConfirmActive,
          popUpActive, setPopUpActive,
          tagActive, setTagActive,

          pickedTag, setPickedTag
        }}
      >
        <Header />
        <Expenses />
        <Events />
        <PopUp />
        <Tags />
        <Footer />
      </Context.Provider>
        
    </div>
  )
}

export default Home