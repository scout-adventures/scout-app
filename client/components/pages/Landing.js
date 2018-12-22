import React from 'react'

import Carousel from '../image-carousel/Carousel'
import Overview from '../overview/Overview'
import Services from '../landing-services/Services'
import Banner from '../landing-banner/Banner'
import Reviews from '../landing-reviews/Reviews'

const Landing = () => {
  return (
    <div>
      <Carousel />
      <Overview />
      <Services />
      <Banner />
      <Reviews />
    </div>
  )
}

export default Landing
