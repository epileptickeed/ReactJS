import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Puppy from './components/Puppy'
import Carousel from './components/Carousel/Carousel'

function App() {
  

  return (
    <div className='wrapper'>
      <Header />
      <Puppy />
      {/* <Carousel /> */}
    </div>
  )
}

export default App
