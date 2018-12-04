import React from 'react'
import styled from 'styled-components'

import DesktopNavbar from './DesktopNavbar'

//
// --- Variables ---
const links = [
  {
    text: 'Gear',
    path: '/gear'
  },
  {
    text: 'Adventure',
    path: '/adventure'
  },
  {
    text: 'How It Works',
    path: '/how-it-works'
  },
  {
    text: 'Why Scout?',
    path: '/why-scout'
  },
  {
    text: 'About Us',
    path: '/about'
  },
  {
    text: 'Blog',
    path: '/blog'
  }
]

//
// --- Styled Components ---
const StyledNavbar = styled.header`
  position: sticky;
  top: 0px;
  z-index: 1;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  background-color: white;
`

//
// --- Nav Bar ---
const Navbar = props => {
  return (
    <StyledNavbar>
      <DesktopNavbar links={links} />
    </StyledNavbar>
  )
}

export default Navbar
