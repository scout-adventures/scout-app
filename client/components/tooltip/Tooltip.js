import React from 'react'
import styled from 'styled-components'
import {Flex} from '@rebass/grid'

//
// --- Styled Components ---
const StyledTooltip = styled(Flex)`
  background-color: white;
  border: 1px solid ${props => props.theme.colors.lightGray};
  box-shadow: ${props => props.theme.shadows.elevationShadow};
  padding: ${props => props.theme.space[3]}px;
  position: absolute;
  z-index: 5000;
  min-width: 200px;
  width: max-content;
  right: 0;
  top: 110%;
`

//
// --- Tooltip ---
class Tooltip extends React.Component {
  render() {
    const {children} = this.props
    return <StyledTooltip>{children}</StyledTooltip>
  }
}

export default Tooltip
