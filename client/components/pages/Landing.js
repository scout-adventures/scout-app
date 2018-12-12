import React from 'react'

import Carousel from '../image-carousel/Carousel'
import Overview from '../overview/Overview'
import Services from '../landing-services/Services'
import Banner from '../landing-banner/Banner'

const Landing = () => {
  return (
    <div>
      <Carousel />
      <Overview />
      <Services />
      <Banner />
    </div>
  )
}

export default Landing
