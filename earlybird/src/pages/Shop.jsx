import React, { useEffect, useState } from 'react'
import { ProductsContext } from '../App'


const Shop = () => {
    const { addProduct } = React.useContext(ProductsContext)

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

    const [searchValue, setSearchValue] = useState('')

  return (
    <div className='shop'>

    <input type="search"
        className='search'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
    />
        <div className="shopInner">
            {shopItems.filter((obj) => {
                if(obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
                    return true
                }
            }).map( (item, index) => {
                return ( 
                    <div key={index} className='product_card'>
                        <img src={item.image} alt={item.title} />
                        <h1> {item.title} </h1>
                        <p> ${item.price}.00 </p>
                        <button onClick={() => addProduct( item.title, item.price, item.image )}> ADD TO CART </button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Shop