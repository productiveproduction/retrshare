import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { Container } from './styles/StyledComponents'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import ShareResources from './components/ShareResources'
import UseResources from './components/UseResources'
import Community from './components/Community'
import Settings from './components/Settings'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Navigation />
        <Dashboard />
        <ShareResources />
        <UseResources />
        <Community />
        <Settings />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
