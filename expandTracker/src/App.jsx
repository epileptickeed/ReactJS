import { useEffect, useState } from 'react'
import './App.scss'
import Home from './pages/Home'

import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function App() {
  
  const [exps, setExps] = useState([])

  const moviesCollectionRef = collection(db, "expenses")

  // useEffect(() => {
  //   const expsList = async () => {

  //     try{
  //       const data = await getDocs(moviesCollectionRef)
  //       const filterData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id
  //       }))
  //       console.log(data)
  //       setExps(filterData)
  //       console.log(filterData)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }

  //   expsList()
  // }, [])

  return (
    <div className='main_wrapper'>
        {/* {exps.map(item => {
          return ( <div> {item.Date} </div> )
        })} */}
        <Home />
    </div>
  )
}

export default App
