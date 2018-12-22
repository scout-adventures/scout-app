import React, {Component} from 'react'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'
import {Link} from 'react-router-dom'

//
// --- Constants ---
const reviews = [
  {
    id: 1,
    image: '/icons/avatars/owl.svg',
    name: 'Morgan',
    city: 'Chicago',
    state: 'IL',
    stars: 5,
    reviewTitle: 'What a trip!',
    reviewContent:
      "I rented gear from Scout for a trip I had planned to Iceland and I wouldn't have done it any other way! The gear was dropped at my apartment the night before my flight and it included everything I needed to experience Iceland at ease. I didn't have to worry about a thing!",
    productCategory: 'Gear Rental',
    rentalDate: 'May 2018'
  },
  {
    id: 2,
    image: '/icons/avatars/fox.svg',
    name: 'Alex',
    city: 'Denver',
    state: 'CO',
    stars: 5,
    reviewTitle: 'Super convenient.',
    reviewContent:
      "I had some friends visiting me in Denver. We wanted to spend a few days backpacking up in the mountains. My friends didn't own any gear - so we turned to Scout to help us. Everyone we spoke with was super professional and the gear they provided was high quality and met our needs perfectly!",
    productCategory: 'Gear Rental',
    rentalDate: 'July 2018'
  },
  {
    id: 3,
    image: '/icons/avatars/turtle.svg',
    name: 'Christine',
    city: 'San Francisco',
    state: 'CA',
    stars: 5,
    reviewTitle: 'A great trip with no planning.',
    reviewContent:
      "I took an adventure organized by Scout. I already had my gear, but didn't have the time to plan my next adventure. After filling out a brief survey about my interests and skill level, Scout took care of everything else! I had a great weekend exploring Boulder, CO and the surrounding area. I'd highly reccomend Scout Adventures.",
    productCategory: 'Adventure',
    rentalDate: 'November 2018'
  }
]

//
// --- Styled Components ---
const StyledReviews = styled.div`
  padding-top: ${props => props.theme.space[8]}px;
  padding-bottom: ${props => props.theme.space[8]}px;
`

const StyledReviewsSiteWrapContainer = styled(Flex)`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
`

const StyledReviewsIcon = styled.img`
  height: 50px;
  width: 50px;
  margin: auto;
  margin-bottom: ${props => props.theme.space[3]}px;
`

const StyledReviewContainer = styled(Flex)`
  justify-content: space-evenly;
`

const StyledReviewContent = styled(Flex)`
  width: 30%;
  flex-direction: column;
`

const StyledAvatarImage = styled.img`
  height: 45px;
  width: 45px;
  margin-right: ${props => props.theme.space[3]}px;
`

//
// --- Reviews Component ---
const Reviews = () => {
  return (
    <StyledReviews>
      <StyledReviewsSiteWrapContainer flexDirection="column">
        <Flex flexDirection="column" m="auto" mb={8}>
          <StyledReviewsIcon src="/icons/quotes.svg" />
          <h1>Happy Campers</h1>
        </Flex>
        <StyledReviewContainer>
          {reviews.map(review => (
            <StyledReviewContent key={`review-content-${review.id}`}>
              <Flex flexDirection="column" mb={3}>
                <Flex>
                  <StyledAvatarImage src={review.image} />
                  <Flex flexDirection="column">
                    <h3>{review.name}</h3>
                    <h5>{`${review.city}, ${review.state}`}</h5>
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexDirection="column">
                <h2>{review.reviewTitle}</h2>
                <p>{review.reviewContent}</p>
                <h5>{`${review.productCategory} | ${review.rentalDate}`}</h5>
              </Flex>
            </StyledReviewContent>
          ))}
        </StyledReviewContainer>
      </StyledReviewsSiteWrapContainer>
    </StyledReviews>
  )
}

export default Reviews
