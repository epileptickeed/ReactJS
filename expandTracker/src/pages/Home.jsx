import React, { useEffect, useReducer, useState } from 'react'
import Header from '../components/Header'
import Expenses from '../components/Expenses'
import Events from '../components/Events'
import Footer from '../components/Footer'
import PopUp from '../components/PopUp'
import Tags from '../components/Tags'

export const Context = React.createContext()

const Home = () => {

  const [expenses, setExpenses] = useState(0)
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)

  


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
  useEffect(() => {
    setExpenses(sum)
  }, [])

  return (
    <div className='home'>
      <Context.Provider
        value={{
          expenses, setExpenses, sum,
          activity, setActivity,
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