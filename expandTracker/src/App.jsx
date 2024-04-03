import React,{ useEffect, useState } from 'react'
import './App.scss'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import SignIn from './pages/SignIn'
import { Routes, Route } from 'react-router-dom'

import { db } from '../config/firebase'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { AuthContextProvider } from '../context/AuthContextProvider'
import { UserAuth } from '../context/AuthContextProvider'

export const Context = React.createContext()

function App() {

  const [expenses, setExpenses] = useState(0) // все траты
  const [priceValue, setPriceValue] = useState(0) // намбер в инпуте фигово работает :( 
        //мб попробовать в UseMemo PriceValue??? чтоб типо инпут не багался?

  const { user, logOut } = UserAuth()
  console.log(user)
  
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
    <div className='main_wrapper'>
      <AuthContextProvider>
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
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/analytics' element={<Analytics />}></Route>
            </Routes> 
            <SignIn />
          
          
          

        </Context.Provider>
      </AuthContextProvider>
      
    </div>
  )
}

export default App
