import React from 'react'
import { UseMainContext } from '../../../context/MainContext'

const Events = () => {

  const { activity, deleteItem, theme } = UseMainContext()
  
  // console.log(activity)
  const dateObj = new Date()
  dateObj.setDate(dateObj.getDate() - 1)
  const prevDay = dateObj.toLocaleDateString() 
  // console.log(dateObj)
  // console.log(prevDay)

  const getFormattedDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000)
    const prevDate = new Date(timestamp.seconds * 1000)
    prevDate.setDate(prevDate.getDate() - 1)

    const formattedDate = date.toLocaleString()
    const formattedDateCurDay = date.toLocaleDateString()
    const formattedDatePrevDay = prevDate.toLocaleDateString()
    // console.log(formattedDatePrevDay)
    return { formattedDateCurDay, formattedDate, formattedDatePrevDay }
  }

  // date.toLocaleString()


  return (
    <div className='events'>
        <h1>Expenses</h1>
        <div className='activities'>
          {activity.map( (item, index) => {
            const { formattedDate, formattedDateCurDay, formattedDatePrevDay } = getFormattedDate(item.timeStamp)

            // console.log(item.timeStamp.toLocaleString)

            return ( 
              <div className='activ__inner' key={index}> 
                <div className="activ__left">
                  <h3 color={theme ? 'white' : 'black'}> {item.tag || item.title} </h3>
                  <span> at {formattedDate} </span> 
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