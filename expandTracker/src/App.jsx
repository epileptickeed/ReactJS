import React,{ useEffect, useState } from 'react'
import './App.scss'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import SignIn from './pages/SignIn'
import { Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from '../context/AuthContextProvider'
import Protected from './components/Protected'
import { MainContext, UseMainContext } from '../context/MainContext'

function App() {
  
  const { theme } = UseMainContext()

  return (
    
    <div className='main_wrapper' style={theme ? { backgroundColor: '#272727' } : { backgroundColor: '#cacaca50'}}>
      <Routes>

          <Route
              path='/home' 
              element={ 
                  <Protected> 
                      <Home /> 
                  </Protected>
              }>
          </Route>

          <Route
              path='/analytics' 
              element={ 
                  <Protected> 
                      <Analytics /> 
                  </Protected>
              }>
          </Route>

          <Route path='/' element={<SignIn />}></Route>

        </Routes> 
      </div>
    
  )

}

export default App
