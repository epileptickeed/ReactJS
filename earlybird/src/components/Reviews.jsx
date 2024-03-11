import React from 'react'

const Reviews = () => {

    const [reviewNum, setReviewNum] = React.useState(0)

    const reviews = [
        {
            title: "'Another reason people just can't keep away from their local coffee shop is the quality of coffee that's on offer. 1'",
            name: 'Henry Monro',
        },
        {
            title: "'Another reason people just can't keep away from their local coffee shop is the quality of coffee that's on offer. 2'",
            name: 'Bruce Willis',
        },
        {
            title: "'Another reason people just can't keep away from their local coffee shop is the quality of coffee that's on offer. 3'",
            name: 'John Doe',
        },
    ]

    const handleBtn = (i) => {
        setReviewNum(i)
    }

  return (
    <div className='reviews'>
        <div className="reviews_block">
            {reviews.map( (item, index) => {
                return( 
                        <div key={index} className={`review_item ${ reviewNum === index ? 'review_item' : 'notActive'}`}>
                            <h1> {item.title} </h1>
                            <p> {item.name} </p>
                        </div> )
            })}

            <div className='spans'>
                {reviews.map( (item, index) => {
                    return( <button key={index} onClick={() => handleBtn(index)} className={`btn ${ index === reviewNum ? 'btnActive' : 'btn' }`}></button> )
                })}
            </div>

        </div>

        <div className="reviews_image">
            <img src={require('../assets/images/cup_of_tea.png')} alt="cup_of_tea" />
        </div>
    </div>
  )
}

export default Reviews