import React from 'react'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'

//
// --- Styled Components ---
export const StyledIcon = styled.img`
  width: 75px;
  height: 75px;
`

//
// --- Logo Component ---

const Logo = props => {
  return (
    <Flex alignItems="center">
      <StyledIcon src="/icons/mountain.svg" />
      <h1 className="logo">scout</h1>
    </Flex>
  )
}

export default Logo
