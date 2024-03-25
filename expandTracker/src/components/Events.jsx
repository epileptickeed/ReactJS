import React, { useEffect, useState } from 'react'
import { Context } from '../pages/Home'

const Events = () => {

    const { expenses, setExpenses, activity, setActivity } = React.useContext(Context)

  return (
    <div className='events'>
        <h1>Today</h1>
        {activity.map( (item, index) => {
            return ( <div key={index}> {item.title} {item.price} </div> )
        })}
    </div>
  )
}

export default Events