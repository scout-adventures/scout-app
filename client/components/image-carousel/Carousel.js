import React, {Component} from 'react'
import styled from 'styled-components'

import CarouselSlide from './CarouselSlide'

//
// --- Constants ---
const slides = [
  {
    imgSrc: '/images/landing-carousel/adventure.jpeg',
    title: 'adventure awaits.',
    subTitle:
      'Whether you need gear or want to take a fully planned trip, adventure is just a click away!',
    links: [
      {
        text: 'GEAR',
        path: '/gear'
      },
      {
        text: 'ADVENTURE',
        path: '/adventure'
      }
    ],
    alignment: 'top-left'
  },
  {
    imgSrc: '/images/landing-carousel/camping.jpeg',
    title: 'take a hike.',
    subTitle:
      'We deliver hand-picked gear right to your door so you can experience the great outdoors without the hassle.',
    links: [
      {
        text: 'BROWSE GEAR',
        path: '/gear'
      }
    ]
  },
  {
    imgSrc: '/images/landing-carousel/hiking.jpeg',
    title: 'we plan. you explore.',
    subTitle:
      'Scout can plan your entire adventure with just a few clicks. Start exploring!',
    links: [
      {
        text: 'EXPLORE',
        path: '/adventure'
      }
    ]
  }
]

//
// --- Styled Components ---
const StyledCarousel = styled.div`
  position: relative;
  min-height: calc(100vh - 83px);
`

const StyledSlider = styled.div`
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')}
  opacity: ${props => (props.isActive ? '1' : '0')}
  transition: all ease-in 0.75s;
`

//
// --- Carousel Component ---
class Carousel extends Component {
  state = {
    activeSlide: 0
  }
  componentDidMount() {
    setInterval(() => {
      const {activeSlide} = this.state
      if (activeSlide < 2) {
        this.setState({activeSlide: activeSlide + 1})
      } else {
        this.setState({activeSlide: 0})
      }
    }, 6500)
  }

  render() {
    const {activeSlide} = this.state

    return (
      <StyledCarousel>
        {slides.map((slide, index) => (
          <StyledSlider
            key={`slide-${slide.title}`}
            isActive={activeSlide === index}
          >
            <CarouselSlide
              imgSrc={slide.imgSrc}
              title={slide.title}
              subTitle={slide.subTitle}
              links={slide.links}
              alignment={slide.alignment}
            />
          </StyledSlider>
        ))}
      </StyledCarousel>
    )
  }
}

export default Carousel
