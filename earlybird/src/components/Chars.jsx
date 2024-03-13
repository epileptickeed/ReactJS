import React from 'react'

const Chars = () => {

    const chars = [
        {
            title: 'Delivery',
            text: 'Vivamus hendrerit at sapien nec mattis. Quisque quis arcu',
            btn: 'view more',
        },
        {
            title: 'Wholesale',
            text: 'Pellentesque in tempor lorem, vel porttitor est.',
            btn: 'view more',
        },
        {
            title: 'Consistency',
            text: 'Aliquam ut arcu sodales, gravida quam vitae.',
            btn: 'view more',
        },
        {
            title: 'Quality',
            text: 'Nam at sapien ligula. Morbi maximus scelerisque mi sed.',
            btn: 'view more',
        },
    ]

  return (
    <div className='chars'>
            <div className="chars_showcase">
                <h1>SWING By our place we also have food</h1>
            </div>

            <div className="chars_about">
                {chars.map( (item, index) => {
                    return ( <div key={index} className='chars_card'>
                                <div className='chars__info'>
                                    <h1> {item.title} </h1>
                                    <p> {item.text} </p>
                                </div>
                                <button className='chars__button'>
                                    {item.btn}
                                </button>
                                
                            </div> )
                })}
            </div>
    </div>
  )
}

export default Chars