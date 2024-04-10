import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Menu from './components/PizzaBlock/Menu'
import Skeleton from './components/PizzaBlock/Skeleton'
import Sort from './components/Sort'



function App() {

  



  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // fetch('https://65d6e54f27d9a3bc1d79936b.mockapi.io/items')
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr)
    //     setIsLoading(false)
    // })

    async function getPizzas() {
      try {
        const res = await fetch('https://65d6e54f27d9a3bc1d79936b.mockapi.io/items');
        const arr = await res.json();
        setItems(arr)
        setIsLoading(false)
      }
     catch (error) {
      console.error(error)
    }
  }
    getPizzas()
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className="categories">
        <List />
        <Sort />
      </div>
      

      <br />
      <h1>Все пиццы</h1>
      <br />

      <div className='pizza_block'>
        {isLoading
        ? [...new Array(10)].map( (_, index) => <Skeleton key={index} /> )
        : items.map((obj) => <Menu key={obj.title} {...obj}/>)
        }
        
      </div>
      
        
    </div>
  )
}

export default App
