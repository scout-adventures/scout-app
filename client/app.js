import React from 'react'

import ConnectedNavBar from './containers/layout/ConnectedNavBar'
import Footer from './components/layout/Footer'
import Routes from './routes'
import {GlobalStyle} from './styles'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ConnectedNavBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
