import React from 'react'
import {Flex, Box} from '@rebass/grid'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import ClickOutside from 'react-click-outside'

import AccountOverview from './AccountOverview'
import Tooltip from '../tooltip/Tooltip'

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
  position: relative;
  cursor: pointer;
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
  state = {
    activeTooltip: undefined
  }

  handleTooltipChange = activeTooltipString => {
    this.setState({activeTooltip: activeTooltipString})
  }

  render() {
    const {currentUser, isUserLoggedIn, onLogOut} = this.props
    const {activeTooltip} = this.state
    console.log(currentUser)
    return (
      <StyledDesktopLoginSectionContainer alignItems="center">
        <Flex>
          <Link className="secondary sm-text" to="/sell">
            Sell on Scout
          </Link>
          {!isUserLoggedIn && (
            <Flex>
              <Box ml={3}>
                <Link className="secondary sm-text" to="/login">
                  Log In
                </Link>
              </Box>
              <Box ml={3}>
                <Link className="secondary sm-text" to="/signup">
                  Sign Up
                </Link>
              </Box>
            </Flex>
          )}
        </Flex>
        <StyledCenterSection ml={4} mr={4}>
          <Link to="/discover">
            <StyledLoginSection ml={4} flexDirection="column">
              <StyledIcon src="/icons/compass-green.svg" />
              <h5>Discover</h5>
            </StyledLoginSection>
          </Link>
          <Link to="/inspiration">
            <StyledLoginSection ml={3} mr={4} flexDirection="column">
              <StyledIcon src="/icons/map-green.svg" />
              <h5>Inspiration</h5>
            </StyledLoginSection>
          </Link>
        </StyledCenterSection>
        <Flex>
          {isUserLoggedIn && (
            <span style={{position: 'relative'}}>
              <ClickOutside
                onClickOutside={() => this.handleTooltipChange(undefined)}
              >
                <StyledLoginSection
                  flexDirection="column"
                  onClick={() =>
                    this.handleTooltipChange(
                      activeTooltip === 'account' ? undefined : 'account'
                    )
                  }
                >
                  <StyledIcon src="/icons/user.svg" />
                  <h5>Account</h5>
                </StyledLoginSection>
                {activeTooltip === 'account' && (
                  <Tooltip>
                    <AccountOverview
                      currentUser={currentUser}
                      onCloseTooltip={() => {
                        console.log('close tooltip')
                        this.handleTooltipChange(undefined)
                      }}
                      onLogOut={onLogOut}
                    />
                  </Tooltip>
                )}
              </ClickOutside>
            </span>
          )}
          <StyledLoginSection
            ml={isUserLoggedIn ? 3 : 0}
            flexDirection="column"
          >
            <StyledIcon src="/icons/backpack-green.svg" />
            <h5>Cart</h5>
          </StyledLoginSection>
        </Flex>
      </StyledDesktopLoginSectionContainer>
    )
  }
}

export default DesktopLoginSection
