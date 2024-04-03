import React from 'react'
import Header from '../components/HomeComponents/Header'
import Expenses from '../components/HomeComponents/Expenses'
import Events from '../components/HomeComponents/Events'
import Footer from '../components/HomeComponents/Footer'
import PopUp from '../components/HomeComponents/PopUp'
import Tags from '../components/HomeComponents/Tags'
import { Context } from '../App' 


const Home = () => {

  const { theme } = React.useContext(Context)

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