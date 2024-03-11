import React from 'react'

const Coffees = () => {

    const coffees = [
        {
            title: 'Arabica Bekele',
            price: 44.00,
            img: require('../assets/images/Arabica Bekele.png')
        },
        {
            title: 'Robusta santa',
            price: 35.00,
            img: require('../assets/images/Robusta santa.png')
        }
    ]

  return (
    <div className='coffees'>
        <div className="text">
            <h1>Our blends deliver on the promise of balance and consistency, <span>roasted to</span>maximize sweetness.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>

        <div className='coffees_content'>
            {coffees.map( (item, index) => {
                return( 
                    <div key={index} className='coffee_item'>
                        <img src={item.img} alt={item.title} />
                        <h1> {item.title} </h1>
                        <p> ${item.price}.00 </p>
                    </div> )
            })}
        </div>

    </div>
  )
}

export default Coffees