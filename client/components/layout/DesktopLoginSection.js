import React from 'react'
import {Flex} from '@rebass/grid'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

//
// --- Styled Components ---
const StyledDesktopLoginSectionContainer = styled(Flex)``

const StyledCenterSection = styled(Flex)`
  border-left: 1px solid ${props => props.theme.colors.lightGray};
  border-right: 1px solid ${props => props.theme.colors.lightGray};
`

const StyledLoginSection = styled(Flex)`
  justify-content: center;
  text-align: center;
`

const StyledIcon = styled.img`
  height: 35px;
  width: 35px;
  margin: auto;
  margin-bottom: ${props => props.theme.space[1]}px;
`

//
// --- Desktop Login Section ---
class DesktopLoginSection extends React.Component {
  render() {
    return (
      <StyledDesktopLoginSectionContainer alignItems="center">
        <Flex>
          <Link className="secondary sm-text" to="/sell">
            Sell on Scout
          </Link>
        </Flex>
        <StyledCenterSection ml={4} mr={4}>
          <StyledLoginSection ml={4} flexDirection="column">
            <StyledIcon src="/icons/compass-green.svg" />
            <h5>Discover</h5>
          </StyledLoginSection>
          <StyledLoginSection ml={3} mr={4} flexDirection="column">
            <StyledIcon src="/icons/map-green.svg" />
            <h5>Inspiration</h5>
          </StyledLoginSection>
        </StyledCenterSection>
        <Flex>
          <StyledLoginSection flexDirection="column">
            <StyledIcon src="/icons/mountain.svg" />
            <h5>Account</h5>
          </StyledLoginSection>
          <StyledLoginSection ml={3} flexDirection="column">
            <StyledIcon src="/icons/backpack-green.svg" />
            <h5>Cart</h5>
          </StyledLoginSection>
        </Flex>
      </StyledDesktopLoginSectionContainer>
    )
  }
}

export default DesktopLoginSection
