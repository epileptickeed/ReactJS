import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter_main'>
        <div className="newsletter_inner">
            <div className="newsletter__image">
                <img src={require('../assets/images/newsletter.png')} alt="" />
            </div>

            <div className="newsletter__signup">
                <h1>Newsletter signup</h1>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem dolores.</p>
                <input type="email" placeholder='Email Address' />
                <button className='btn btn_sub'>subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter