import {createGlobalStyle} from 'styled-components'
import theme from './theme'

import {
  breakpoints,
  breakpointsEnd,
  breakpointMappings,
  fontSizes,
  space,
  elementSizes
} from './sizes'

export {
  breakpoints,
  breakpointsEnd,
  breakpointMappings,
  fontSizes,
  space,
  elementSizes
}

//
// --- Global Styling ---
export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    color: ${theme.colors.fontGray};
    font-family: ${theme.fonts.body};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 500;
    letter-spacing: 0.6px;
    margin: 0;
  }
  h1.logo {
    color: ${theme.colors.primaryGreen};
    font-size: 45px;
  }
  a {
    color: ${theme.colors.fontGray};
    text-decoration: none;
  }
  a.primary {
    background-color: ${theme.colors.primaryBlue};
    color: white;
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes[3]}px;
    font-weight: 500;
    padding: ${theme.space[3]}px;
    text-transform: uppercase;
    transition: all 0.5s;

    :hover {
      background-color: ${theme.colors.secondaryBlue};
    }
  }
  a.primary-padding {
    padding: ${theme.space[3]}px;
  }
  a.secondary {
    color: ${theme.colors.primaryBlue};
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes[3]}px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.5s;

    :hover {
      color: ${theme.colors.secondaryBlue};
    }
  }
  .full-height {
    height: 100%;
  }
  .full-width {
    width: 100%;
  }
  .ml-three {
    margin-left: ${theme.space[3]}px;
  }
  .mb-three {
    margin-bottom: ${theme.space[3]}px;
  }
  .center-text {
    text-align: center;
  }
  .light-brown {
    color: ${theme.colors.lightBrown};
  }
`