import React from 'react'

const HoneyTypes = () => {

    const items = [
        {
            image: require('../assets/images/types/type1.png'),
            title: 'Forest honey',
            text: 'Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.'
        },
        {
            image: require('../assets/images/types/type2.png'),
            title: 'Creamed honey',
            text: 'Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.'
        },
        {
            image: require('../assets/images/types/type3.png'),
            title: 'Meadow honey',
            text: 'Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.'
        },
        {
            image: require('../assets/images/types/type4.png'),
            title: 'Liquid honey',
            text: 'Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.'
        }
    ]

  return (
    <div className='types_main'>
        <div className="types_inner">
            <h1>Types of Honey</h1>
            <p>Learn more about some of the products we take special pride in.</p>
            <div className="types_cards">
                {items.map((item, index) => {
                    return(
                        <div className='type_card_inner' 
                        key={index}>
                            <div className='type_card_inner__image'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='type_card_inner__info'>
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                                <button className='btn btn_types'>Learn More</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default HoneyTypes