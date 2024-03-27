import React from 'react'


import '../App.scss'
import '../Media.scss'

import Header from '../components/Header/Header'
import Coffees from '../components/Coffees'
import MoreSection from '../components/MoreSection'
import Reviews from '../components/Reviews'
import Locations from '../components/Locations'
import Products from '../components/Products'
import Chars from '../components/Chars'
import Team from '../components/Team'
import ReserveTable from '../components/ReserveTable'
import OurSupplies from '../components/OurSupplies'
import Barista from '../components/Barista'
import FollowUs from '../components/FollowUs'
import OurCoffee from '../components/OurCoffee'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        
    <Header />  

    <div className="organic">
    <span>Fairtrade</span>
    <span>Organic</span>
    <span>Climate neutral</span>
    </div>

    <Coffees />
    <MoreSection />
    <Reviews />
    <Locations />

    <section className="thecoffee">The coffee that's right for you</section>

    <Products />
    <Chars />
    <ReserveTable />

    <section className="team_header">our awesome team</section>

    <Team />

    {/* <Barista /> */}

    <OurSupplies />
    <OurCoffee />
    <section className="team_header">Follow us for more</section>
    <FollowUs />

    <Footer />
    
    </div>
  )
}

export default Home