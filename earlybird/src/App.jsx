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

  

    const [products, setProducts] = useState(() => {
        const localValue = localStorage.getItem('ITEMS')
        if(localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(products))

    }, [products])

    const addProduct = (title, price, image) => {
        setProducts(currentProducts => {
          return [
              ...currentProducts,
              {id: crypto.randomUUID(), title: title, price: price, image: image }
          ]
        })
    } 

    const deleteProduct = (id) => {
      console.log(products)
      console.log(id)
      setProducts(currentProducts => {
        return currentProducts.filter(product => product.id !== id)
      })
    }




  return (
    <>

      <div className="shippinig">Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands.</div>

      <Navbar lent={products.length}/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pages' element={<Pages />} />
          <Route path='/Shop' element={<Shop lent={products.length} addProduct={addProduct} />} />
          <Route path='/Blog' element={<Blog  />} />
          <Route path='/Cart' element={<Cart products={products} id={products.id} deleteProduct={deleteProduct} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
