import React,{ useEffect, useState } from 'react'
import './App.scss'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import SignIn from './pages/SignIn'
import { Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from '../context/AuthContextProvider'
import Protected from './components/Protected'
import { MainContext } from '../context/MainContext'
import AllPages from './pages/AllPages'

function App() {
  

  return (
    <AuthContextProvider>
      <MainContext>
          <AllPages />
      </MainContext>
    </AuthContextProvider>
  )

}

export default App
