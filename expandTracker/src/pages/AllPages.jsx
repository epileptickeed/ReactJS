import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Protected from '../components/Protected'
import SignIn from './SignIn'
import Analytics from './Analytics'
import { UseMainContext } from '../../context/MainContext'

const AllPages = () => {

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

export default AllPages