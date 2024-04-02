import React, { useEffect, useReducer, useState } from 'react'
import Header from '../components/Header'
import Expenses from '../components/Expenses'
import Events from '../components/Events'
import Footer from '../components/Footer'
import PopUp from '../components/PopUp'
import Tags from '../components/Tags'

export const Context = React.createContext()

const Home = () => {

  const [expenses, setExpenses] = useState(0) // все затраты
  const [priceValue, setPriceValue] = useState(0) // стоимость услуги
  
  // const [activity, setActivity] = useState(() => { // все услуги 
  //   const localValue = localStorage.getItem('ITEMS')
  //   if (localValue == null) return []

  //   return JSON.parse(localValue)
  // })

  const [activity, setActivity] = useState([])

  const [allTags, setAllTags] = useState(() => { // все теги
    const localValue2 = localStorage.getItem('ITEMS')
    if(localValue2 == null) return []

    return JSON.parse(localValue2)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(activity))
  }, [activity, allTags])


  

  const [popUpActive, setPopUpActive] = useState(false) // попап с ценой и выбором тэга
  const [tagActive, setTagActive] = useState(false) // попап с тэгом
  const [ConfirmActive, setConfirmActive] = useState(false) // попап с подтверждением

  const [pickedTag, setPickedTag] = useState('select your tag') // выбранный тэг 


  // сумма всех тэгов
  let sum = 0
  let result = activity.map(v => sum += +v.price)
  useEffect(() => {
    setExpenses(sum)
  })

  return (
    <div className='home'>
      <Context.Provider
        value={{
          expenses, setExpenses, sum,
          activity, setActivity,
          priceValue, setPriceValue,

          allTags, setAllTags,

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