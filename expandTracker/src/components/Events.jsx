import React, { useEffect, useState } from 'react'
import { Context } from '../pages/Home'

import { db } from '../../config/firebase'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'


const Events = () => {


    const { expenses, setExpenses, activity, setActivity } = React.useContext(Context)

    const deleteItem = async(id) => {
      const movieDoc = doc(db, "expenses", id)
      await deleteDoc(movieDoc)
    }

    const expensesCollectionRef = collection(db, "expenses")
    useEffect(() => {
      const allEvents = async() => {

        try{  
          const eventsData = await getDocs(expensesCollectionRef)
          const filteredData = eventsData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))
          setActivity(filteredData)
        } catch (err) {
          console.error(err)
        }
      }
      allEvents()
    })

  return (
    <div className='events'>
        <h1>Today</h1>
        <div className='activities'>
          {activity.map( (item, index) => {
              return ( 
              <div className='activ__inner' key={index}> 
                <h3> {item.tag} </h3>
                <div className="activ__right">
                  <span> {item.price}$ </span> 
                  <button onClick={() => deleteItem(item.id)} className='btn btnDel'>delete</button> 
                </div>
              </div> )
          })}
        </div>
    </div>
  )
}

export default Events