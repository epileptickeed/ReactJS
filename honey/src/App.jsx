import { useState } from 'react'
import './assets/App.scss'
import './assets/Media.scss'
import Header from './components/Header'
import OurProducts from './components/OurProducts'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery/Gallery'
import NewsLetter from './components/NewsLetter'
import HoneyTypes from './components/HoneyTypes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main">
      <div className="container">
        <Header />
        
        <OurProducts />
        <Reviews />
        <Gallery />
        <NewsLetter />
        <HoneyTypes />
        <Footer />
      </div>
    </div>
  )
}

export default App
