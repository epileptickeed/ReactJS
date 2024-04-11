import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../context/AuthContextProvider.jsx'
import { MainContext } from '../context/MainContext.jsx'
import { TimeContextProvider } from '../context/TimeContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MainContext>
          <TimeContextProvider>
            <App />
          </TimeContextProvider>
        </MainContext>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
