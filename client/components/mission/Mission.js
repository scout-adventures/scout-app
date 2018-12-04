import React from 'react'
import styled from 'styled-components'

//
// --- Styled Component ---
const StyledMissionContainer = styled.div`
  background-color: ${props => props.theme.colors.whiteGray};
`

const StyledSiteWrapContainer = styled.div`
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
  padding: ${props => props.theme.space[3]}px;
  text-align: center;
`

//
// --- Mission Component ---
const Mission = () => {
  return (
    <StyledMissionContainer>
      <StyledSiteWrapContainer>
        <h2>
          scout aims to make the outdoors accessible to all - regardless of
          where you live.
        </h2>
      </StyledSiteWrapContainer>
    </StyledMissionContainer>
  )
}

export default Mission
