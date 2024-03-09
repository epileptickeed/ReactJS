import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)


  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0,
  })

  const [cursorVariant, setCursorVariant] = useState("default")


  React.useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.addEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants ={ 
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      scale: 5,
      x: mousePosition.x,
      y: mousePosition.y,
    }
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default");


  
  return (
    <>
      <div className="main_wrapper">
        <motion.div 
        transition={{type: 'Miscellaneous', ease: 'backOut'}}
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        />
        <div className="wrapper_inner">
          <div className="nav">
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="">Home</a>
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="">About</a>
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="">Contact</a>
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="">Our projects</a>
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="">Our Address</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
