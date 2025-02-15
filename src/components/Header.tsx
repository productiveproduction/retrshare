import React from 'react'
import { Header as StyledHeader, AsciiArt, BlinkingCursor } from '../styles/StyledComponents'

const RETRO_ASCII = `   _____      _           _____ _                    
  |  __ \\    | |         / ____| |                   
  | |__) |___| |_ _ __  | (___ | |__   __ _ _ __ ___ 
  |  _  // _ \\ __| '__|  \\___ \\| '_ \\ / _\` | '__/ _ \\
  | | \\ \\  __/ |_| |     ____) | | | | (_| | | |  __/
  |_|  \\_\\___|\\__|_|    |_____/|_| |_|\\__,_|_|  \\___|`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <AsciiArt>{RETRO_ASCII}</AsciiArt>
      <h1>RetroShare<BlinkingCursor>_</BlinkingCursor></h1>
      <p>Community Compute Sharing Platform</p>
    </StyledHeader>
  )
}

export default Header
