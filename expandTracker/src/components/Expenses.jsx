import React, { useEffect, useState } from 'react'
import { Context } from '../pages/Home'

const Expenses = () => {

  const { expenses, setExpenses, priceValue, activity } = React.useContext(Context)

  
  

  return (
    <div className='expenses'> 
        <h2>Spent this month</h2>
        <h1> {expenses}$ </h1>
    </div>
  )
}

export default Expenses