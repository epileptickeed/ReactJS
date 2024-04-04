import React,{ useEffect, useState } from 'react'
import './App.scss'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import SignIn from './pages/SignIn'
import { Routes, Route } from 'react-router-dom'

import { db } from '../config/firebase'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { AuthContextProvider } from '../context/AuthContextProvider'
import { UserAuth } from '../context/AuthContextProvider'
import Protected from './components/Protected'
import { MainContext } from '../context/MainContext'

export const Context = React.createContext()

function App() {

  

  return (
    <div className='main_wrapper'>
      <AuthContextProvider>
        <MainContext>
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
            

        </MainContext>
      </AuthContextProvider>
      
    </div>
  )
}

export default App
