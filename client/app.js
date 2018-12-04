import React from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Routes from './routes'
import {GlobalStyle} from './styles'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
