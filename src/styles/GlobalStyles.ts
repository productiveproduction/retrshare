import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.main};
    margin: 0;
    padding: 0;
    text-shadow: ${theme.shadows.text};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.heading};
    text-shadow: ${theme.shadows.heading};
  }

  button {
    background-color: ${theme.colors.buttonBackground};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
    padding: 5px 10px;
    font-family: ${theme.fonts.main};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.text};
      color: ${theme.colors.background};
    }
  }

  input, select {
    background-color: ${theme.colors.secondaryBackground};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
    padding: 5px;
    font-family: ${theme.fonts.main};
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
`
