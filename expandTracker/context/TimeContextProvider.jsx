import React, { createContext, useContext } from 'react'

export const TimeContext = createContext()

export const TimeContextProvider = ( {children} ) => {

    let newDate = new Date()
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = newDate.getDay()
    let month = newDate.getMonth()
    let year = newDate.getFullYear()

  return (
    <TimeContext.Provider value={{
        weekDay, monthNames, day, month, year
    }}>
        {children}
    </TimeContext.Provider>
  )
}

export const UseTimeContext = () => useContext(TimeContext)