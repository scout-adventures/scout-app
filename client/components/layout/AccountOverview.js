import React from 'react'
import {Flex, Box} from '@rebass/grid'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

//
// --- Styled Components ---
const StyledAccountOverviewContainer = styled(Flex)`
  width: 100%;
`

const StyledUserHeader = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  width: 100%;
`

const StyledAccountOverviewLink = styled(Link)`
  padding: ${props => props.theme.space[2]}px;

  :hover {
    background-color: ${props => props.theme.colors.lightGreen};
  }
`

const StyledAccountOverviewFooterLinksContainer = styled(Flex)`
  border-top: 1px solid ${props => props.theme.colors.lightGray};
`

const StyledAccountOverviewFooterLink = styled(Flex)`
  width: 50%;
  justify-content: center;
`

//
// --- Account Overview Component ---
const AccountOverview = props => {
  const {currentUser, onCloseTooltip, onLogOut} = props
  return (
    <StyledAccountOverviewContainer flexDirection="column">
      <StyledUserHeader pt={3} pb={3} pl={2} pr={2}>
        <h3>{`${currentUser.firstName || ''} ${currentUser.lastName ||
          ''}`}</h3>
      </StyledUserHeader>
      <Flex flexDirection="column" onClick={onCloseTooltip}>
        <StyledAccountOverviewLink to="/conversations">
          <h4>Conversations</h4>
        </StyledAccountOverviewLink>
        <StyledAccountOverviewLink to="/watch-list">
          <h4>Watch List</h4>
        </StyledAccountOverviewLink>
        <StyledAccountOverviewLink to="/purchases">
          <h4>Purchases & Reviews</h4>
        </StyledAccountOverviewLink>
      </Flex>
      <StyledAccountOverviewFooterLinksContainer
        justifyContent="space-between"
        pt={3}
      >
        <StyledAccountOverviewFooterLink>
          <Link
            className="secondary sm-text"
            to="/account"
            onClick={onCloseTooltip}
          >
            My Account
          </Link>
        </StyledAccountOverviewFooterLink>
        <StyledAccountOverviewFooterLink>
          <a
            className="secondary sm-text"
            onClick={() => {
              onCloseTooltip()
              onLogOut()
            }}
          >
            Sign Out
          </a>
        </StyledAccountOverviewFooterLink>
      </StyledAccountOverviewFooterLinksContainer>
    </StyledAccountOverviewContainer>
  )
}

export default AccountOverview
