import React from 'react'
import { UseMainContext } from '../../../context/MainContext'

const Events = () => {

  const { activity, deleteItem, theme, user } = UseMainContext()
  
  // console.log(activity)

  return (
    <div className='events'>
        <h1>Today</h1>
        <div className='activities'>
          {activity.map( (item, index) => {
            return ( 
              <div className='activ__inner' key={index}> 
                <div className="activ_left">
                  <h3> {item.tag || item.title} </h3>
                  <span> {item.dateHours}:{item.dateMin} </span> 
                </div>
                
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