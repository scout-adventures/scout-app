import React from 'react'
import {Link} from 'react-router-dom'
import {Flex, Box} from '@rebass/grid'
import styled from 'styled-components'

import {breakpointMappings} from '../../styles/sizes'

//
// --- Styled Components ---
const StyledOverview = styled.div`
  padding-top: ${props => props.theme.space[8]}px;
  padding-bottom: ${props => props.theme.space[8]}px;
  background-color: ${props => props.theme.colors.whiteGray};
  border-top: 1px solid ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

const StyledOverviewSiteWrapContainer = styled(Flex)`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
  text-align: center;
`

const StyledOverviewIconContainer = styled(Flex)`
  flex-direction: column;
  ${breakpointMappings.sm_up} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const StyledOverviewSection = styled(Flex)`
  width: 80%;
  justify-content: space-between;
  padding-top: ${props => props.theme.space[6]}px;

  ${breakpointMappings.sm_down} {
    margin: auto;
  }

  ${breakpointMappings.sm_up} {
    width: 40%;
  }

  ${breakpointMappings.md_up} {
    width: 20%;
  }
`

const StyledOverviewIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: ${props => props.theme.space[3]}px;
`

//
// --- Overview Component ---
const Overview = () => {
  return (
    <StyledOverview>
      <StyledOverviewSiteWrapContainer flexDirection="column">
        <h1>
          You don't have to own the gear, or even plan the adventure.<br />
          Scout has got you covered!
        </h1>
        <StyledOverviewIconContainer justifyContent="space-evenly">
          <StyledOverviewSection flexDirection="column">
            <Box>
              <StyledOverviewIcon src="/icons/backpack-green.svg" />
              <h3>GEAR RENTALS</h3>
              <p>
                We keep it simple by offering curated gear packs based on the
                intensity of your outdoor activities. Leave the guess work out
                of it. We provide everything you'll need!
              </p>
            </Box>
            <Box>
              <Link className="secondary" to="/gear">
                <h5>Grab Your Gear ></h5>
              </Link>
            </Box>
          </StyledOverviewSection>
          <StyledOverviewSection flexDirection="column">
            <Box>
              <StyledOverviewIcon src="/icons/map-green.svg" />
              <h3>ADVENTURES</h3>
              <p>
                Whether you need a little inspiration or you want one of our
                professionals to build your complete itinerary, our adventure
                packages are sure to provide you with an excitement-filled trip.
              </p>
            </Box>
            <Box>
              <Link className="secondary" to="/gear">
                <h5>Start Your Adventure ></h5>
              </Link>
            </Box>
          </StyledOverviewSection>
          <StyledOverviewSection flexDirection="column">
            <Box>
              <StyledOverviewIcon src="/icons/compass-green.svg" />
              <h3>PLANNED BY PROS</h3>
              <p>
                We've spent years planning trips and packing gear! Scout takes
                out the guess work when it comes to what to do and what to pack.
              </p>
            </Box>
            <Box>
              <Link className="secondary" to="/gear">
                <h5>Learn About Us ></h5>
              </Link>
            </Box>
          </StyledOverviewSection>
          <StyledOverviewSection flexDirection="column">
            <Box>
              <StyledOverviewIcon src="/icons/money-green.svg" />
              <h3>MONEY SAVINGS</h3>
              <p>
                We bring you the highest quality gear at a fraction of the cost
                to own. Don't let the expenses associated with getting outside
                slow you down. We have a pack or an adventure for everyone's
                budget!
              </p>
            </Box>
            <Box>
              <Link className="secondary" to="/gear">
                <h5>See The Breakdown ></h5>
              </Link>
            </Box>
          </StyledOverviewSection>
        </StyledOverviewIconContainer>
      </StyledOverviewSiteWrapContainer>
    </StyledOverview>
  )
}

export default Overview
