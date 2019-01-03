import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'

import {breakpointMappings} from '../../styles/sizes'
import CategoryDropDown from './CategoryDropDown'
import DesktopLoginSection from './DesktopLoginSection'
import HideBreakPoint from '../layout/HideBreakpoint'
import MobileMenu from './MobileMenu'
import Logo from '../brand/Logo'
import Search from '../search/Search'

//
// --- Styled Components ---
const StyledSiteWrap = styled(Flex)`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  width: 100%;
`

const StyledDesktopNavbarContainer = styled(Flex)`
  padding: ${props => props.theme.space[2]}px;
  padding-bottom: 0;
  width: 100%;
`

const StyledDesktopCategoryContainer = styled(Flex)`
  margin-top: ${props => props.theme.space[2]}px;
  margin-bottom: ${props => props.theme.space[2]}px;
  border-top: 1px solid ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
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
  transition: all 0.5s;
  border-color: ${props =>
    props.isActive ? props.theme.colors.primaryGreen : 'transparent'};

  :hover {
    border-color: ${props => props.theme.colors.primaryGreen};
    cursor: pointer;
  }
`
const StyledLinkContent = styled.h4`
  position: relative;
  transform: 'translateY(3px)';
  margin-top: ${props => props.theme.space[2]}px;
  margin-bottom: ${props => props.theme.space[1]}px;
`

//
// --- Desktop Nav Bar ---
class DesktopNavbar extends React.Component {
  state = {
    isMobileMenuOpen: false,
    activeCategory: undefined
  }

  handleOpen = () => {
    this.setState({isMobileMenuOpen: true})
  }

  handleClose = () => {
    this.setState({isMobileMenuOpen: false})
  }

  handleActiveCategoryChange = categoryIndex => {
    this.setState({activeCategory: categoryIndex})
  }

  render() {
    const {links} = this.props
    const {isMobileMenuOpen, activeCategory} = this.state

    return (
      <div>
        <HideBreakPoint lg>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            links={links}
            onCloseClick={this.handleClose}
          />
        </HideBreakPoint>
        <StyledSiteWrap>
          <StyledDesktopNavbarContainer flexDirection="column">
            <StyledDesktopAndMobileController>
              <Flex>
                <Link to="/">
                  <Logo />
                </Link>
                <Search />
              </Flex>
              <HideBreakPoint lg>
                <StyledHamburgerMenu
                  className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}
                  onClick={
                    isMobileMenuOpen ? this.handleClose : this.handleOpen
                  }
                />
              </HideBreakPoint>
              <HideBreakPoint xs sm md>
                <Flex alignItems="center" className="full-height">
                  <DesktopLoginSection />
                </Flex>
              </HideBreakPoint>
            </StyledDesktopAndMobileController>
          </StyledDesktopNavbarContainer>
        </StyledSiteWrap>
        <HideBreakPoint xs sm md>
          <span onMouseLeave={() => this.handleActiveCategoryChange(undefined)}>
            <StyledDesktopCategoryContainer className="full-height">
              <StyledSiteWrap justifyContent="space-around">
                {links.map((link, index) => (
                  <StyledLink
                    key={`nav-link-${link.text.toLowerCase()}`}
                    isActive={index === activeCategory}
                  >
                    <StyledLinkContent
                      onMouseEnter={() =>
                        this.handleActiveCategoryChange(index)
                      }
                    >
                      <Link to={link.path}>{link.text}</Link>
                    </StyledLinkContent>
                  </StyledLink>
                ))}
              </StyledSiteWrap>
            </StyledDesktopCategoryContainer>
            {links.map((link, index) => {
              if (
                !link.PageLevelCategories ||
                !link.PageLevelCategories.length
              ) {
                return null
              }

              return (
                <CategoryDropDown
                  key={`category-drop-down-${link.text}`}
                  categoryTitle={link.text}
                  categories={link.PageLevelCategories}
                  display={index === activeCategory ? true : undefined}
                />
              )
            })}
          </span>
        </HideBreakPoint>
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
