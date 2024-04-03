import React from 'react'
import { Context } from '../../App' 

const Expenses = () => {

  const { expenses } = React.useContext(Context)

  
  

  return (
    <div className='expenses'> 
        <h2>Spent this month</h2>
        <h1> {expenses}$ </h1>
    </div>
  )
}

export default Expenses