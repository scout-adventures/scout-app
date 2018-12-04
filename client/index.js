import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import history from './history'
import store from './store'
import App from './app'
import theme from './styles/theme'

// establishes socket connection
import './socket'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)
