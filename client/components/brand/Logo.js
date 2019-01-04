import React from 'react'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'

//
// --- Styled Components ---
export const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
`

//
// --- Logo Component ---

const Logo = () => {
  return (
    <Flex alignItems="center">
      <StyledIcon src="/icons/mountain.svg" />
      <h1 className="logo">scout</h1>
    </Flex>
  )
}

export default Logo
