import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'
import {Link} from 'react-router-dom'

import {breakpointMappings} from '../../styles/sizes'

//
// --- Styled Components ---
const StyledSlideContainer = styled.div`
  background-image: url(${props => props.imgSrc});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: calc(100vh - 83px);
  position: absolute;
  top: 0;
  left: 0;

  ${breakpointMappings.xs} {
    background-position-x: ${props =>
      props.imgSrc.indexOf('adventure') > -1 && '-50pc'};
    background-position-y: ${props =>
      props.imgSrc.indexOf('hiking') > -1 && '-10rem'}
    background-position-y: ${props =>
      props.imgSrc.indexOf('camping') > -1 && '-20rem'};
  }

  ${breakpointMappings.lg} {
    background-position-y: ${props =>
      props.imgSrc.indexOf('hiking') > -1 && '-10rem'};
  }

  ${breakpointMappings.xxlg} {
    background-size: 100%;
  }
`

const StyledSiteWrapContainer = styled.div`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  position: relative;
  padding-top: ${props => props.theme.space[6]}px;

  ${breakpointMappings.lg} {
    padding-top: ${props => props.theme.space[8]}px;
  }
`

const StyledCaptionContainer = styled(Flex)`
  background-color: white;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.shadows.elevationShadow};
  text-align: center;
  opacity: 0.8;
  padding: ${props => props.theme.space[3]}px;
  width: 80%;

  ${breakpointMappings.lg} {
    max-width: 50%;
    margin-right: ${props =>
      props.alignment === 'top-right' ? `${props.theme.space[8]}px` : 'auto'};
    margin-left: ${props =>
      props.alignment === 'top-left' ? `${props.theme.space[8]}px` : 'auto'};

    padding: ${props => props.theme.space[5]}px;
  }
`

const StyledTitleContainer = styled(Flex)`
  color: ${props => props.theme.colors.primaryGreen};
  text-transform: uppercase;
  position: relative;
  margin: auto;

  :after {
    right: 35%;
    position: absolute;
    content: '';
    left: 25%;
    bottom: 0;
    height: 2px;
    width: 50%;
    border-bottom: 3px solid ${props => props.theme.colors.primaryGreen};
  }
`

const StyledTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[2]}px;
  font-weight: 600;
`

const StyledSubtitle = styled.p`
  font-style: italic;
`
const StyledLink = styled(Link)`
  width: 80%;
  opacity: 1;
  margin-bottom: ${props => props.theme.space[3]}px;

  ${breakpointMappings.lg} {
    width: 40%;
  }
`

const StyledLinkContainer = styled(Flex)`
  flex-direction: column;
  ${breakpointMappings.lg} {
    flex-direction: row;
    width: 60%;
    margin: auto;
  }
`

//
// --- Carousel Slide Component ---
const CarouselSlide = ({imgSrc, title, subTitle, links, alignment}) => {
  return (
    <StyledSlideContainer imgSrc={imgSrc}>
      <StyledSiteWrapContainer>
        <StyledCaptionContainer flexDirection="column" alignment={alignment}>
          <StyledTitleContainer>
            <StyledTitle>{title}</StyledTitle>
          </StyledTitleContainer>
          <StyledSubtitle>{subTitle}</StyledSubtitle>
          <StyledLinkContainer
            justifyContent="space-around"
            width={0.6}
            m="auto"
          >
            {links.map(link => (
              <StyledLink
                key={`carousel-link-${link.text.toLowerCase()}`}
                to={link.path}
                className="primary"
              >
                {link.text}
              </StyledLink>
            ))}
          </StyledLinkContainer>
        </StyledCaptionContainer>
      </StyledSiteWrapContainer>
    </StyledSlideContainer>
  )
}

//
// --- Prop Types ---
CarouselSlide.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({text: PropTypes.string, path: PropTypes.string})
  ),
  alignment: PropTypes.oneOf(['top-left', 'top-right'])
}

export default CarouselSlide
