import * as _ from 'lodash'
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'

//
// --- Styled Components ---
const StyledSubCategoryContainer = styled(Flex)`
  width: 50%;
  border-right: 1px solid ${props => props.theme.colors.lightGray};
  padding: ${props => props.theme.space[3]}px;
`

const StyledSubCategoryTextContainer = styled(Flex)`
  width: 50%;
`

//
// --- Sub Category Component ---
class SubCategory extends React.Component {
  render() {
    const {isDisplayed, subCategories} = this.props

    if (!subCategories || !subCategories.length || !isDisplayed) {
      return null
    }

    return (
      <StyledSubCategoryContainer flexWrap="wrap">
        {_.sortBy(subCategories, 'id').map(category => (
          <StyledSubCategoryTextContainer key={`sub-category-${category.text}`}>
            <h4>{category.text}</h4>
          </StyledSubCategoryTextContainer>
        ))}
      </StyledSubCategoryContainer>
    )
  }
}

export default SubCategory
