import * as _ from 'lodash'
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'

import SubCategory from './SubCategory'

//
// --- Styled Components ---
const StyledCategoryDropDownContainer = styled(Flex)`
  opacity: ${props => (props.display ? '1' : '0')};
  position: absolute;
  width: 95%;
  background-color: white;
  z-index: ${props => (props.display ? 1000 : -1000)};
  margin-left: 2.5%;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-top: none;
  transform: translateY(-${props => props.theme.space[2]}px);
  transition: all 0.5s;
`

const StyledLeftContainer = styled(Flex)`
  border-right: 1px solid ${props => props.theme.colors.lightGray};
`

const StyledCategoryTitleContainer = styled(Flex)`
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

const StyledCategoryTitle = styled.h4`
  font-weight: bold;
  text-transform: uppercase;
`
const StyledPageLevelCategoryContainer = styled(Flex)`
  padding: ${props => props.theme.space[2]}px;
  min-width: 275px;
  background-color: ${props =>
    props.isActive ? props.theme.colors.lightGreen : 'white'}
  :hover {
    cursor: pointer;
  }
`

const StyledPageLevelCategory = styled.h4`
  text-transform: uppercase;
`

const StyledRightChevron = styled.i`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: ${props => props.theme.space[3]}px;
`

//
// --- Category Drop Down Component ---
class CategoryDropDown extends React.Component {
  state = {
    activePageLevelCategory: 0
  }

  handleActivePageLevelCategoryChange = pageLevelCategoryIndex => {
    this.setState({activePageLevelCategory: pageLevelCategoryIndex})
  }

  render() {
    const {categoryTitle, categories, display} = this.props
    const {activePageLevelCategory} = this.state
    return (
      <span onMouseLeave={() => this.handleActivePageLevelCategoryChange(0)}>
        <StyledCategoryDropDownContainer display={display}>
          <StyledLeftContainer flexDirection="column">
            <StyledCategoryTitleContainer>
              <StyledCategoryTitle
              >{`All ${categoryTitle}`}</StyledCategoryTitle>
            </StyledCategoryTitleContainer>
            {_.sortBy(categories, 'id').map((category, index) => (
              <StyledPageLevelCategoryContainer
                key={`page-level-category-${category.text}`}
                justifyContent="space-between"
                onMouseEnter={() =>
                  this.handleActivePageLevelCategoryChange(index)
                }
                isActive={index === activePageLevelCategory}
              >
                <StyledPageLevelCategory>
                  {category.text}
                </StyledPageLevelCategory>
                <StyledRightChevron className="fas fa-chevron-right" />
              </StyledPageLevelCategoryContainer>
            ))}
          </StyledLeftContainer>
          {_.sortBy(categories, 'id').map((category, index) => (
            <SubCategory
              key={`sub-category-${category.text}`}
              subCategories={category && category.SubCategories}
              isDisplayed={index === activePageLevelCategory}
            />
          ))}
        </StyledCategoryDropDownContainer>
      </span>
    )
  }
}

export default CategoryDropDown
