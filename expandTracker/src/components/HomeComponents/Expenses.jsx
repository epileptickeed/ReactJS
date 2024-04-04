import React from 'react'
import { UseMainContext } from '../../../context/MainContext'

const Expenses = () => {

  const { expenses } = UseMainContext()

  
  

  return (
    <div className='expenses'> 
        <h2>Spent this month</h2>
        <h1 className='expensesHeader'> {expenses}$ </h1>
    </div>
  )
}

export default Expenses