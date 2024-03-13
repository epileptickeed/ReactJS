import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './App.scss'
import './Media.scss'
import Navbar from './components/Header/Navbar'
import Header from './components/Header/Header'
import Coffees from './components/Coffees'
import MoreSection from './components/MoreSection'
import Reviews from './components/Reviews'
import Locations from './components/Locations'
import Products from './components/Products'
import Chars from './components/Chars'
import Team from './components/Team'
import ReserveTable from './components/ReserveTable'

function App() {

  const [mousePos, setMousePos] = useState({x:0, y:0,})
  const [cursorVar, setCursorVar] = useState('default')

  useEffect(() => {
    const mouseMove = e => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () =>{
      window.addEventListener('mousemove', mouseMove)
    }

  }, [])

  const variants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
    },
    text: {
      scale: 5,
      x: mousePos.x - 5,
      y: mousePos.y - 5,
    }
  }

  function textEnter() { setCursorVar('text') }
  function textLeave() { setCursorVar('default') }

  return (
    <>
      {/* <motion.div className="cursor"
        variants={variants}
        animate={cursorVar}
        transition={{type: 'Tween', ease: 'backOut'}}
      /> */}

      <div className="shippinig">Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands.</div>

      <Navbar textleave={textLeave} textenter={textEnter}/>
      <Header />

      <div className="organic">
        <span>Fairtrade</span>
        <span>Organic</span>
        <span>Climate neutral</span>
      </div>

      <Coffees />
      <MoreSection />
      <Reviews />
      <Locations />

      <div className="thecoffee">
        <h1>The coffee that's right for you</h1>
      </div>

      <Products />
      <Chars />
      <ReserveTable />

      <div className="team_header">our awesome team</div>

      <Team />
    </>
  )
}

export default App
