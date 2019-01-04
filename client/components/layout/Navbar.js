import * as _ from 'lodash'
import React from 'react'
import styled from 'styled-components'

import DesktopNavbar from './DesktopNavbar'

//
// --- Styled Components ---
const StyledNavbar = styled.header`
  top: 0px;
  z-index: 1;
  width: 100%;
  background-color: white;
`

//
// --- Nav Bar ---
const Navbar = props => {
  const {currentUser, isUserLoggedIn, links, onLogOut} = props
  if (!links.length || _.isEmpty(links)) {
    return null
  }

  return (
    <StyledNavbar>
      <DesktopNavbar
        currentUser={currentUser}
        isUserLoggedIn={isUserLoggedIn}
        links={links}
        onLogOut={onLogOut}
      />
    </StyledNavbar>
  )
}

export default Navbar
