import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Store from "./Pages/Store"
import { Routes, Route } from "react-router-dom"
import './App.scss'
import { circIn, motion } from 'framer-motion'

function App() {

  const vars = {
    default: {
      opacity: 1,
      y: '0%'
    },
    hidden: {
      y: '-100%'
    }
  }

  return (
    <>

      <motion.div className="dropMenu"
        variants={vars}
        initial='default'
        animate='hidden'
        transition={{ delay: 1, duration: .7, type: 'tween', ease: circIn}}
      >
        Logo
      </motion.div>

      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/store' element={<Store />}></Route>
        </Routes>
      </div>
      
    </>
  )
}

export default App
