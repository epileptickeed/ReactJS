import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='address'>
            <img src={require('../assets/images/footer-img.png')} alt="footre-img.png" />
            <div className='address_inner'>
                <h2>Early Birds</h2>
                <p>Weteringstraat 48,1017 SP</p>
                <p>Amsterdam</p>
                <p>Tel: 020-7718364</p>
            </div>
        </div>
        
        <div className="links">
            <ul>
                <li><Link>My account</Link></li>
                <li><Link>Checkout</Link></li>
                <li><Link to='/cart'> Cart </Link></li>
                <li><Link to='/shop'> Shop </Link></li>
            </ul>
        </div>

        <div className="socials">
            <ul>
                <li><Link>Facebook</Link></li>
                <li><Link>Instagram</Link></li>
                <li><Link>Twitter</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer