import React from 'react'

import Carousel from '../image-carousel/Carousel'
import Overview from '../overview/Overview'
import Services from '../landing-services/Services'

const Landing = () => {
  return (
    <div>
      <Carousel />
      <Overview />
      <Services />
    </div>
  )
}

export default Landing
