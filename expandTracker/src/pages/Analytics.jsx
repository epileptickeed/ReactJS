import React from 'react'
import { Context } from '../App' 
import Header from '../components/AnalyticsComponents/Header'
import Footer from '../components/AnalyticsComponents/Footer'

const Analitycs = () => {

    const { theme } = React.useContext(Context)

  return (
    <div className='analytics' style={ theme ? {backgroundColor: '#131313'} : {backgroundColor: 'white'}}>
        <Header />
        <Footer />
    </div>
  )
}

export default Analitycs