import React from 'react'
import Header from '../components/AnalyticsComponents/Header'
import Footer from '../components/AnalyticsComponents/Footer'
import { UseMainContext } from '../../context/MainContext'

const Analitycs = () => {

    const { theme } = UseMainContext()

  return (
    <div className='analytics' style={ theme ? {backgroundColor: '#131313'} : {backgroundColor: 'white'}}>
        <Header />
        <Footer />
    </div>
  )
}

export default Analitycs