import React, { useState } from 'react'

const Shop = () => {

    const shopItems = [
        {
            title: 'French Roast',
            price: 37.00,
            image: require('../assets/images/products/French Roast.png'),
            new: false,
            sold: false,
        },
        {
            title: 'Decaf espresso',
            price: 35.00,
            image: require('../assets/images/products/Decaf espresso.png'),
            new: true,
            sold: false,
        },
        {
            title: 'Costa Rica',
            price: 35.00,
            image: require('../assets/images/products/Costa Rica.png'),
            new: false,
            sold: false,
        },
        {
            title: 'Decaf French Roast',
            price: 35.00,
            image: require('../assets/images/products/Decaf French Roast.png'),
            new: false,
            sold: true,
        },
    ]


    const [products, setProducts] = useState([])

    const addProduct = (title, price, image) => {
        setProducts(currentProducts => {
            return [
                ...currentProducts,
                {id: crypto.randomUUID(), title: title, price: price, image: image }
            ]
        })
        console.log(products)
    } 

  return (
    <div className='shop'>
        {shopItems.map( (item, index) => {
            return ( 
                <div key={index} className='product_card'>
                    <img src={item.image} alt={item.title} />
                    <h1> {item.title} </h1>
                    <p> ${item.price}.00 </p>
                    <button onClick={(e) => addProduct( ( item.title, item.price, item.image ) )}> ADD TO CART </button>
                </div>
             )
        })}
        
        {products &&  (
            <div>
                {products.map( (item, index) => {
                    return( <div key={index}> 
                                <img src={item.image} alt="" />
                                <h1> {item.title} </h1>
                                <p> {item.price} </p>
                            </div> )
                })}
            </div>
        )}

    </div>
  )
}

export default Shop