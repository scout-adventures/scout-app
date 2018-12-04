import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'

import {breakpointMappings} from '../../styles/sizes'
import HideBreakPoint from '../layout/HideBreakpoint'
import MobileMenu from './MobileMenu'
import Logo from '../brand/Logo'

//
// --- Styled Components ---
const StyledDesktopNavbarContainer = styled.div`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  padding: ${props => props.theme.space[2]}px;
  padding-bottom: 0;
`
const StyledDesktopAndMobileController = styled(Flex)`
  justify-content: space-between;
  position: relative;
  align-items: center;

  ${breakpointMappings.lg} {
    justify-content: space-between;
  }
`
const StyledHamburgerMenu = styled.i`
  color: ${props => props.theme.colors.primaryGreen};
  font-size: ${props => props.theme.fontSizes[6]}px;
  margin-right: ${props => props.theme.space[3]}px;
`

const StyledLink = styled(Flex)`
  align-items: center;
  border-bottom: 3px solid transparent;
  height: 100%;
  margin-left: ${props => props.theme.space[4]}px;
  transition: all 0.5s;

  :hover {
    border-color: ${props => props.theme.colors.primaryGreen};
    cursor: pointer;
  }
`

//
// --- Desktop Nav Bar ---
class DesktopNavbar extends React.Component {
  state = {
    isMobileMenuOpen: false
  }

  handleOpen = () => {
    this.setState({isMobileMenuOpen: true})
  }

  handleClose = () => {
    this.setState({isMobileMenuOpen: false})
  }

  render() {
    const {links} = this.props
    const {isMobileMenuOpen} = this.state

    return (
      <div>
        <HideBreakPoint lg>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            links={links}
            onCloseClick={this.handleClose}
          />
        </HideBreakPoint>
        <StyledDesktopNavbarContainer>
          <StyledDesktopAndMobileController>
            <Flex>
              <Link to="/">
                <Logo />
              </Link>
              <HideBreakPoint xs sm md>
                <Flex alignItems="center" ml={3} className="full-height">
                  {links.map(link => (
                    <StyledLink key={`nav-link-${link.text.toLowerCase()}`}>
                      <h3 style={{transform: 'translateY(3px)'}}>
                        <Link to={link.path}>{link.text.toUpperCase()}</Link>
                      </h3>
                    </StyledLink>
                  ))}
                </Flex>
              </HideBreakPoint>
            </Flex>
            <HideBreakPoint lg>
              <StyledHamburgerMenu
                className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}
                onClick={isMobileMenuOpen ? this.handleClose : this.handleOpen}
              />
            </HideBreakPoint>
            <HideBreakPoint xs sm md>
              <Flex alignItems="center" className="full-height">
                <Link className="secondary" to="/login">
                  Log In
                </Link>
                <Link className="primary ml-three" to="/signup">
                  Sign Up
                </Link>
              </Flex>
            </HideBreakPoint>
          </StyledDesktopAndMobileController>
        </StyledDesktopNavbarContainer>
      </div>
    )
  }
}

export default DesktopNavbar

//
// --- Prop Types ---
DesktopNavbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      path: PropTypes.string
    })
  )
}
