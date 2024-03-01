import { useState } from 'react'
import './assets/App.scss'
import Header from './components/Header'
import OurProducts from './components/OurProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <div className="container">
        <Header />
        
        <OurProducts />
      </div>
    </div>
      
    
  )
}

export default App
