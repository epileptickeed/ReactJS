import React from 'react'
import { UseMainContext } from '../../../context/MainContext'

const Events = () => {

  const { expenses, setExpenses, activity, setActivity, deleteItem, theme } = UseMainContext()

  return (
    <div className='events'>
        <h1>Today</h1>
        <div className='activities'>
          {activity.map( (item, index) => {
            return ( 
              <div className='activ__inner' key={index}> 
                <h3> {item.tag || item.title} </h3>
                <div className="activ__right">
                  <span> {item.price}$ </span> 
                  <button onClick={() => deleteItem(item.id)} className='btn btnDel' style={theme ? {color: 'white'} : {color: 'black'}}>delete</button> 
                </div>
              </div> 
            )
          })}
        </div>
    </div>
  )
}

export default Events