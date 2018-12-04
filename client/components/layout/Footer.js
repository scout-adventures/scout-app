import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from '@rebass/grid'
import {Link} from 'react-router-dom'

import {colors} from '../../styles/colors'
import {breakpointMappings} from '../../styles/sizes'
import HideBreakPoint from '../layout/HideBreakpoint'

//
// --- Styled Components ---

const StyledFooter = styled.div`
  width: 100%;
  min-height: 260px;
  background-color: ${props => props.theme.colors.lightBrown};
  color: ${props => props.theme.colors.darkBrown};
`

const StyledSiteWrapContainer = styled.div`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  position: relative;
`

const StyledSiteMapContainer = styled(Flex)`
  flex-direction: column;
  padding: ${props => props.theme.space[5]}px;

  ${breakpointMappings.lg} {
    flex-direction: row;
    padding-top: ${props => props.theme.space[6]}px;
    padding-right: ${props => props.theme.space[2]}px;
    padding-left: 0;
    padding-bottom: 0;
  }
`

const StyledFooterNavigationContainer = styled(Flex)`
  flex-direction: column;

  ${breakpointMappings.lg} {
    margin-left: 250px;
    width: 66%;
    justify-content: space-between;
    flex-direction: row;
  }
`

const StyledFooterNavigationSection = styled(Flex)`
  flex-direction: row;
  padding-bottom: ${props => props.theme.space[6]}px;
  flex-wrap: wrap;

  ${breakpointMappings.lg} {
    flex-direction: column;
  }
`

const StyledFooterNavigationLink = styled(Box)`
  margin-top: ${props => props.theme.space[3]}px;
  width: 50%;

  ${breakpointMappings.lg} {
    margin-top: ${props => props.theme.space[2]}px;
    width: 100%;
  }
`

const StyledFooterBottom = styled.footer`
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.colors.darkBrown};
  color: ${props => props.theme.colors.lightBrown};
`

const StyledFooterIconContainer = styled(Flex)`
  width: 100%;

  ${breakpointMappings.lg} {
    width: 33%;
  }
`

const StyledFooterIconSection = styled(Flex)`
  margin: auto;

  ${breakpointMappings.lg} {
    margin-left: auto;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0;
  }
`

const StyledFooterIcon = styled.img`
  position: absolute;
  left: -15px;
  bottom: 35px;
  height: 250px;
  width: 250px;
`

const StyledLegalLinksContainer = styled(Flex)`
  margin: auto;
  ${breakpointMappings.lg} {
    margin: 0;
    margin-left: auto;
  }
`

const StyledLegalLinks = styled(Link)`
  color: ${props => props.theme.colors.lightBrown};
`

const StyledSocialIcon = styled.i`
  font-size: ${props => props.theme.fontSizes[6]}px;

  ${breakpointMappings.lg} {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`

//
// --- Footer ---
const Footer = props => {
  return (
    <div>
      <StyledFooter>
        <StyledSiteWrapContainer>
          <StyledSiteMapContainer>
            <StyledFooterNavigationContainer>
              <Flex flexDirection="column">
                <Box
                  pb={1}
                  css={{borderBottom: `1px solid ${colors.darkBrown}`}}
                >
                  <h3>SERVICES</h3>
                </Box>
                <StyledFooterNavigationSection>
                  <StyledFooterNavigationLink>
                    <h4>Gear Rentals</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>Adventures</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>Used Gear Sales</h4>
                  </StyledFooterNavigationLink>
                </StyledFooterNavigationSection>
              </Flex>
              <Flex flexDirection="column">
                <Box
                  pb={1}
                  css={{borderBottom: `1px solid ${colors.darkBrown}`}}
                >
                  <h3>ABOUT US</h3>
                </Box>
                <StyledFooterNavigationSection>
                  <StyledFooterNavigationLink>
                    <h4>Our Story</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>Press</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>Blog</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>Jobs</h4>
                  </StyledFooterNavigationLink>
                </StyledFooterNavigationSection>
              </Flex>
              <Flex flexDirection="column">
                <Box
                  pb={1}
                  css={{borderBottom: `1px solid ${colors.darkBrown}`}}
                >
                  <h3>PARTNER</h3>
                </Box>
                <StyledFooterNavigationSection>
                  <StyledFooterNavigationLink>
                    <h4>Small Business</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>Influencers</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>Affiliates</h4>
                  </StyledFooterNavigationLink>
                </StyledFooterNavigationSection>
              </Flex>
              <Flex flexDirection="column">
                <Box
                  pb={1}
                  css={{borderBottom: `1px solid ${colors.darkBrown}`}}
                >
                  <h3>QUESTIONS?</h3>
                </Box>
                <StyledFooterNavigationSection>
                  <StyledFooterNavigationLink>
                    <h4>How It Works</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>FAQs</h4>
                  </StyledFooterNavigationLink>
                  <StyledFooterNavigationLink>
                    <h4>Contact Us</h4>
                  </StyledFooterNavigationLink>
                </StyledFooterNavigationSection>
              </Flex>
            </StyledFooterNavigationContainer>
            <StyledFooterIconContainer>
              <StyledFooterIconSection>
                <Box>
                  <StyledSocialIcon className="fab fa-instagram" />
                </Box>
                <Box ml={5}>
                  <StyledSocialIcon className="fab fa-facebook-f" />
                </Box>
                <Box ml={5}>
                  <StyledSocialIcon className="fab fa-twitter" />
                </Box>
                <Box ml={5}>
                  <StyledSocialIcon className="fab fa-youtube" />
                </Box>
              </StyledFooterIconSection>
            </StyledFooterIconContainer>
          </StyledSiteMapContainer>
        </StyledSiteWrapContainer>
      </StyledFooter>
      <StyledFooterBottom>
        <StyledSiteWrapContainer>
          <HideBreakPoint xs sm md>
            <StyledFooterIcon src="/icons/lodge.svg" />
          </HideBreakPoint>
          <Flex flexDirection="column">
            <HideBreakPoint lg>
              <Box pt={2} css={{textAlign: 'center'}}>
                &copy; 2018, Scout Camping, Inc.
              </Box>
            </HideBreakPoint>
            <StyledLegalLinksContainer p={2}>
              <Box ml={3}>
                <StyledLegalLinks to="/privacy">Privacy</StyledLegalLinks>
              </Box>
              <Box ml={3}>
                <StyledLegalLinks to="/terms">Terms</StyledLegalLinks>
              </Box>
              <Box ml={3}>
                <StyledLegalLinks to="/interest-based-ads">
                  Interest-Based Ads
                </StyledLegalLinks>
              </Box>
              <HideBreakPoint xs sm md>
                <Box ml={3}>&copy; 2018, Scout Camping, Inc.</Box>
              </HideBreakPoint>
            </StyledLegalLinksContainer>
          </Flex>
        </StyledSiteWrapContainer>
      </StyledFooterBottom>
    </div>
  )
}

export default Footer
