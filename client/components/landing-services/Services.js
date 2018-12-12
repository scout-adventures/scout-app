import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from '@rebass/grid'
import {Link} from 'react-router-dom'

import {breakpointMappings} from '../../styles/sizes'

//
// --- Constants ---
const serviceDetails = [
  {
    title: 'Grab Your Gear & Go',
    caption:
      'From cozy cabins to back-country camping - take our simple survey, pick your rental dates and your fully packed, professionally curated gear will be delivered right to your door.',
    image: '/images/girl-hiking.jpeg',
    linkText: 'Grab Your Gear',
    linkPath: '/gear'
  },
  {
    title: 'Escape the Hustle. Without the Hassle.',
    caption:
      "For when you want an adventure, but don't want to plan it. You outline your interests, select your intensity level and we delivery you the gear and the plans to make your adventerous dreams a reality.",
    image: '/images/airplane-city.jpeg',
    linkText: 'Get out of town',
    linkPath: '/adventure'
  }
]

//
// --- Styled Components ---
const StyledServices = styled.div`
  padding-top: ${props => props.theme.space[8]}px;
  padding-bottom: ${props => props.theme.space[8]}px;
`

const StyledServicesSiteWrapContainer = styled(Flex)`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
`

const StyledServicesSectionContainer = styled(Flex)`
  flex-direction: column;
  width: 85%;
  margin: auto;
`

const StyledServicesSection = styled(Flex)`
  flex-direction: column;
  margin-top: ${props => (props.index % 2 === 0 ? 0 : props.theme.space[8])}px;
  ${breakpointMappings.md_up} {
    justify-content: 'space-between';
    flex-direction: ${props => (props.index % 2 !== 0 ? 'row-reverse' : 'row')};
  }
`

const StyledServicesImage = styled.div`
  background-image: url('${props => props.src}');
  background-position: center;
  height: 300px;
  width: 100%;
  background-position-x: ${props =>
    props.src.indexOf('girl') > -1 ? '-15rem' : ''};
  background-position-y: ${props =>
    props.src.indexOf('girl') > -1 ? '-4rem' : ''};
  margin: auto;
  margin-bottom: ${props => props.theme.space[3]}px;

  ${breakpointMappings.sm} {
    height: 250px;
    margin-bottom: 0;
    background-position-x: '';
    background-position-y: '';
  }


  ${breakpointMappings.md}{
    background-size: 160%;
    background-position: center;
    height: 375px;
    min-width: 60%;
    background-position-x: '';
    background-position-y: '';
  }

  ${breakpointMappings.lg} {
    min-width: 60%;
    background-position: center;
    height: 450px;
    background-size: 160%;
    background-position-x: '';
    background-position-y: '';
  }
`

const StyledServicesContent = styled(Flex)`
  margin: auto;
  justify-content: space-between;
  flex-direction: column;

  ${breakpointMappings.md_up} {
    height: 300px;
    padding-left: ${props =>
      props.index % 2 === 0 ? props.theme.space[6] : 0}px;
    padding-right: ${props =>
      props.index % 2 !== 0 ? props.theme.space[6] : 0}px;
  }
`

const StyledServicesLink = styled(Link)`
  ${breakpointMappings.sm_up} {
    width: fit-content;
  }
`

//
// --- Services Component ---
const Services = () => {
  return (
    <StyledServices>
      <StyledServicesSiteWrapContainer>
        <StyledServicesSectionContainer>
          {serviceDetails.map((service, index) => (
            <StyledServicesSection
              key={`service-section-${service.title}`}
              index={index}
            >
              <StyledServicesImage src={service.image} />
              <StyledServicesContent index={index}>
                <h1>{service.title}</h1>
                <p>{service.caption}</p>
                <StyledServicesLink
                  className="outline mt-three center-text"
                  to={service.linkPath}
                >
                  {service.linkText}
                </StyledServicesLink>
              </StyledServicesContent>
            </StyledServicesSection>
          ))}
        </StyledServicesSectionContainer>
      </StyledServicesSiteWrapContainer>
    </StyledServices>
  )
}

export default Services
