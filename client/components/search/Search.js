import React from 'react'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'

//
// --- Styled Components ---
const StyledSearchContainer = styled(Flex)``

const StyledSearchInput = styled.input`
  height: 1rem;
  margin: auto;
  margin-left: 1rem;
  width: 350px;
  border: 0.5px solid #edefed;
  border-right: none;
  border-radius: 4px 0 0 4px;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.whiteGray};

  :focus {
    outline: none;
  }
`

const StyledSearchButton = styled.a`
  height: 1rem;
  margin: auto;
  text-align: center;
  border: 0.5px solid transparent;
  border-radius: 0 4px 4px 0;

  :hover {
    cursor: pointer;
  }
`

//
// --- Search Component ---
const Search = () => {
  return (
    <StyledSearchContainer>
      <StyledSearchInput placeholder="Search for gear or stores." />
      <StyledSearchButton
        className="primary sm-text"
        style={{padding: '0.5rem'}}
      >
        Search
      </StyledSearchButton>
    </StyledSearchContainer>
  )
}

export default Search
