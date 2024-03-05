import React, { useState } from 'react'

const Reviews = () => {

  const reviews = [
    {
      text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."',
      name: 'Julia Klein',
      profession: 'Biologist',
      image: require('../assets/images/Julia.png'),
    },
    {
      text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."',
      name: 'John Doe',
      profession: 'Machinist',
      image: require('../assets/images/Julia.png'),
    },
    {
      text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."',
      name: 'Memphis Brooklyn',
      profession: 'Designer',
      image: require('../assets/images/Julia.png'),
    },
  ]

  const [itemActive, setItemActive] = useState(0)

  const updateIndex = (newIndex) => {
    setInterval(() => {
      newIndex++
      if(newIndex > reviews.length - 1){
        newIndex = 0
      }
      setItemActive(newIndex)
    }, 5000)
  }

  return (
    <div className='reviews_main'>
        <div className="reviews_inner">
              {
                reviews.map((item, index) => {
                  return (
                    <div key={index} 
                    className={`${itemActive === index ? "reviews_card" : 'review_inActive'}`}
                    onLoad={() => updateIndex(index)}>
                      <img src={item.image} alt="" />
                      <div className="reviews_card__info">
                        <p className='reviews_card__text'>
                          {item.text}
                        </p>
                        <h2 className='reviews_card__name'>
                          {item.name}
                        </h2>
                        <span className='reviews_card__prof'>{item.profession}</span>
                      </div>
                    </div>)
                })
              }
              
        </div>
    </div>
  )
}

export default Reviews