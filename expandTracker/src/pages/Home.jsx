import React from 'react'
import Header from '../components/HomeComponents/Header'
import Expenses from '../components/HomeComponents/Expenses'
import Events from '../components/HomeComponents/Events'
import Footer from '../components/HomeComponents/Footer'
import PopUp from '../components/HomeComponents/PopUp'
import Tags from '../components/HomeComponents/Tags'
import { UseMainContext } from '../../context/MainContext'


const Home = () => {

  const { theme } = UseMainContext()

  return (
    <div className='home' style={ theme ? { backgroundColor: '#131313' } : { backgroundColor: 'white' }}>
      
      <Header />
      <Expenses />
      <Events />
      <PopUp />
      <Tags />
      <Footer />
        
    </div>
  )
}

export default Home