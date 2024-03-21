import React from 'react'
import { ProductsContext } from '../App'

const Cart = () => {

  const { products, deleteProduct } = React.useContext(ProductsContext)

  let prices = products.map(item => item.price)
  let total = 0

  prices.forEach(item => {
    total += item
  })

  return (
    <div className='cart'>
      {products && (
        <div className='product_card'>
            {products.map( (item, index) => {
                return( <div key={index}> 
                          <img src={item.image} alt="" />
                          <h1> {item.title} </h1>
                          <p> ${item.price}.00 </p>
                          <button onClick={() => deleteProduct(item.id)}> Delete </button>
                        </div> )
            })}
        </div>
        )}


      <div className='total'>
        <p>Your total is: ${total}.00</p>
        
        <button> Buy </button>
      </div>

    </div>
  )
}

export default Cart