import React from 'react'

const Cart = ( { products, deleteProduct } ) => {

  // console.log(id)

  let prices = products.map(item => item.price)
  let total = 0

  prices.forEach(item => {
    total += item
  })
  console.log(prices)
  console.log(total)

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