import React from 'react'

const OurProducts = () => {

    const items = [
        {
            title: "Heather Honey",  
            image: require('../assets/images/jar1.png'),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            price: 10.00,
            id:0,
            new: false,
        },
        {
            title: "Jarrah Honey", 
            image: require('../assets/images/jar2.png'),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            price: 15.00,
            id:1,
            new: true,
        },
        {
            title: "Linden Honey", 
            image: require('../assets/images/jar3.png'),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            price: 20.00,
            id:2,
            new: false,
        },
    ]


  return (
    <div className='products_main'>
        <div className="texts">
            <h1>Our<br /> Products</h1>
            <p>Check out our online shop for cute bee-themed apparel, unique bee suits, educational tools, gift certificates and more.</p>
        </div>
        <div className="products">
            {items.map(jar => {
                return ( 
                    <div className='jar_div'>
                        <img src={jar.image} alt="" />
                        <h1>{jar.title}</h1>
                        <span> {jar.price}.00$ </span>
                        <p> {jar.description} </p>
                        <button></button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default OurProducts