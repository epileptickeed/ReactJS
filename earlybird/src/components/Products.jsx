import React from 'react'
import { motion } from 'framer-motion'

const Products = () => {

    const products = [
        {
            title: 'French Roast',
            price: 37.00,
            img: require('../assets/images/products/French Roast.png'),
            new: false,
            sold: false,
        },
        {
            title: 'Decaf espresso',
            price: 35.00,
            img: require('../assets/images/products/Decaf espresso.png'),
            new: true,
            sold: false,
        },
        {
            title: 'Costa Rica',
            price: 35.00,
            img: require('../assets/images/products/Costa Rica.png'),
            new: false,
            sold: false,
        },
        {
            title: 'Decaf French Roast',
            price: 35.00,
            img: require('../assets/images/products/Decaf French Roast.png'),
            new: false,
            sold: true,
        },
    ]

    const [activeIndex, setActiveIndex ] = React.useState(0)

    const [width, setWidth] = React.useState(0)

    const carousel = React.useRef()

    React.useEffect(()=> {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

  return (
    <div className='products'>

    <motion.div className='products_inner'
        drag='x' dragConstraints={{right: 0, left: -width}}
        ref={carousel}
    >

        {products.map( (item, index) => {
            return (
                <motion.div key={index} className="product_card"
                whileTap={{cursor:'grabbing'}}
                >
                        <img src={item.img} alt={item.title} />
                        <h1> {item.title} </h1>
                        <p> ${item.price}.00 </p>
                    </motion.div>
            )
        })}

    </motion.div>
        
    </div>
  )
}

export default Products