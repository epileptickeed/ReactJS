import React from 'react'

const OurCoffee = () => {

    const coffeItem = [
        {
            title: 'Caffe Latte',
            text: 'Fresh brewed coffee',
            price: 5,
        },
        {
            title: 'Cappucino',
            text: 'Espresso and milk',
            price: 7,
        },
        {
            title: 'Ice Coffee',
            text: 'Cold brewed espresso',
            price: 4,
        },
        {
            title: 'Mocha',
            text: 'Espresso, mocha sauce, milk',
            price: 7,
        },
        {
            title: 'Espresso',
            text: 'Rich espresso with milk',
            price: 4,
        },
    ]

  return (
    <div className = 'ourCoffee'>
        <div className='coffee_menu'>
            {coffeItem.map( (item, index) => {
                return (
                    <div key={index} className='coffee_item'>
                        <div className='coffee_item__name'>
                            <h1> {item.title} </h1>
                            <span> {item.text} </span>
                        </div>
                        <span className='coffee_item__price'>{item.price}.00$</span>
                    </div>
                )
            })}
    

            
        </div>

        <img src={require('../assets/images/ourCoffee.png')} alt="" />
    </div>
  )
}

export default OurCoffee