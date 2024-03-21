import { useState, useEffect, useRef, useContext, createContext } from 'react'
import './App.scss'
import './Media.scss'
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/CartSlice'

import Navbar from './components/Header/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Shop from './pages/Shop'
import Pages from './pages/Pages'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Search from './pages/Search'

export const ProductsContext = createContext()

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  

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
      setProducts(currentProducts => {
        return currentProducts.filter(product => product.id !== id)
      })
    }

  return (
    <>

      <div className="shippinig">Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands.</div>

      <Navbar lent={products.length}/>
      <ProductsContext.Provider
        value={{ products, addProduct, deleteProduct }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pages' element={<Pages />} />
          <Route path='/Shop' element={<Shop lent={products.length} />} />
          <Route path='/Blog' element={<Blog  />} />
          <Route path='/Cart' element={<Cart  id={products.id} />} />
          <Route path='/Search' element={<Shop  />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </ProductsContext.Provider>
    </>
  )
}

export default App
