import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled, {css} from 'styled-components'
import {Flex, Box} from '@rebass/grid'

import {StyledIcon} from '../brand/Logo'

//
// --- Styled Components ---
const openStateStyles = css`
  transform: translateX(0, 0);
  transform: translate3d(0, 0, 0);
`

const closedStateStyles = css`
  transform: translateX(210vw, 0);
  transform: translate3d(210vw, 0, 0);
`

const StyledMobileMenu = styled.div`
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background-color: white;
  top: 83px;
  right: 0;
  transition: all 0.8s ease;
  border-top: 1px solid ${props => props.theme.colors.lightGray};
  ${props => (props.isOpen ? openStateStyles : closedStateStyles)};
`

const StyledMobileContainer = styled.div`
  padding: ${props => props.theme.space[5]}px;
`

const StyledMobileMenuSectionContainer = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

const StyledMobileMenuLink = styled.h3`
  margin-bottom: ${props => props.theme.space[3]}px;
`

//
// --- Mobile Menu ---
const MobileMenu = ({isOpen, links, onCloseClick}) => {
  return (
    <StyledMobileMenu isOpen={isOpen}>
      <StyledMobileContainer>
        <StyledMobileMenuSectionContainer pt={3} pb={6}>
          <Flex flexDirection="column">
            {links
              .filter(
                link =>
                  link.text.toLowerCase() !== 'gear' &&
                  link.text.toLowerCase() !== 'adventure'
              )
              .map(link => (
                <StyledMobileMenuLink
                  key={`mobile-nav-link=${link.text.toLowerCase()}`}
                  onClick={onCloseClick}
                >
                  <Link to={link.path}>{link.text.toUpperCase()}</Link>
                </StyledMobileMenuLink>
              ))}
          </Flex>
          <Flex flex={1} justifyContent="flex-end">
            <Flex flexDirection="column" className="center-text">
              <Link className="primary" to="/signup" onClick={onCloseClick}>
                Sign Up
              </Link>
              <Link
                className="secondary primary-padding"
                to="/login"
                onClick={onCloseClick}
              >
                Log In
              </Link>
            </Flex>
          </Flex>
        </StyledMobileMenuSectionContainer>
        <StyledMobileMenuSectionContainer pt={8} pb={8}>
          <Flex
            justifyContent="space-evenly"
            className="full-width"
            css={{textAlign: 'center'}}
          >
            <Box>
              <Link to="/gear" onClick={onCloseClick}>
                <StyledIcon src="/icons/backpack.svg" className="mb-three" />
                <h2 className="light-brown">GEAR</h2>
              </Link>
            </Box>
            <Box>
              <Link to="/adventure" onClick={onCloseClick}>
                <StyledIcon src="/icons/compass.svg" className="mb-three" />
                <h2 className="light-brown">ADVENTURE</h2>
              </Link>
            </Box>
          </Flex>
        </StyledMobileMenuSectionContainer>
      </StyledMobileContainer>
    </StyledMobileMenu>
  )
}

export default MobileMenu

//
// --- Prop Types ---
MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      path: PropTypes.string
    })
  ),
  onCloseClick: PropTypes.func
}
