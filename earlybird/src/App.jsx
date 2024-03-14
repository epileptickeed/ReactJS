import { useState, useEffect, useRef } from 'react'
import './App.scss'
import './Media.scss'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Header/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Shop from './pages/Shop'
import Pages from './pages/Pages'
import Blog from './pages/Blog'
import Cart from './pages/Cart'

function App() {


  return (
    <>

      <div className="shippinig">Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands.</div>

      <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pages' element={<Pages />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
