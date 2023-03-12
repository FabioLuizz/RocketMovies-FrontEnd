import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './Hooks/Auth'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/styles'
import theme from './styles/theme'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
