import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      text: string
      heading: string
      border: string
      secondaryBackground: string
      buttonBackground: string
    }
    fonts: {
      main: string
    }
    shadows: {
      text: string
      heading: string
    }
  }
}
