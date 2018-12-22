import React from 'react'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'
import {Link} from 'react-router-dom'

import {breakpointMappings} from '../../styles/sizes'

//
// --- Styled Components ---
const StyledBanner = styled.div`
  padding-top: ${props => props.theme.space[8]}px;
  padding-bottom: ${props => props.theme.space[8]}px;
  min-height: 300px;
  background-image: linear-gradient(
      #0000007d,
      #00000069,
      transparent,
      transparent
    ),
    url('/images/landing-campsite.jpeg');
  background-position: center;

  ${breakpointMappings.md_up} {
    background-size: 120%;
  }

  ${breakpointMappings.xlg} {
    background-size: 120%;
  }
`

const StyledBannerSiteWrapContainer = styled(Flex)`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
`

const StyledBannerContentContainer = styled(Flex)`
  max-width: 75%;
`

const StyledBannerHeader = styled.h1`
  font-weight: 600;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.25) 1px 1px 1px;
  position: relative;
  padding-bottom: ${props => props.theme.space[3]}px;

  :after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 5px;
    width: 20%;
    border-bottom: 5px solid ${props => props.theme.colors.primaryGreen};
  }
`
const StyledBannerContent = styled.p`
  color: white;
  text-shadow: rgba(0, 0, 0, 0.25) 1px 1px 1px;
  font-size: 1.5rem;
`

//
// --- Banner Component ---
const Banner = () => {
  return (
    <StyledBanner>
      <StyledBannerSiteWrapContainer justifyContent="space-around">
        <StyledBannerContentContainer flexDirection="column">
          <StyledBannerHeader>
            All That's Left To Do Is Explore
          </StyledBannerHeader>
          <StyledBannerContent>
            Scout aims to take the complexities out of exploring the outdoors
            and provide you with everything you need - including the time to
            make adventure possible.
          </StyledBannerContent>
          <Link
            className="primary primary-padding fit-content"
            to="/how-it-works"
          >
            See How It Works
          </Link>
        </StyledBannerContentContainer>
      </StyledBannerSiteWrapContainer>
    </StyledBanner>
  )
}

export default Banner
