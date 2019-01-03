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
    letter-spacing: 0.05px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 500;
    margin: 0;
  }
  h1.logo {
    color: ${theme.colors.primaryGreen};
    font-size: 30px;
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
    transition: all 0.5s;

    :hover {
      color: ${theme.colors.secondaryBlue};
    }
  }
  a.outline {
    background-color: white;
    color: #4c8aa0;
    font-family: PT Sans,sans-serif;
    font-size: 18px;
    font-weight: 500;
    padding: 12px;
    transition: all 0.5s;
    border: 1.25px solid #4c8aa0;

    :hover {
      background-color: ${theme.colors.secondaryBlue};
      border-color: ${theme.colors.secondaryBlue};
      color: white;
    }
  }
  a.fit-content {
    width: fit-content;
  }
  a.sm-text {
    font-size: 1rem;
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
  .mt-three {
    margin-top: ${theme.space[3]}px;
  }
  .center-text {
    text-align: center;
  }
  .light-brown {
    color: ${theme.colors.lightBrown};
  }
`
