import React from 'react'
import { Footer as StyledFooter } from '../styles/StyledComponents'
import { useStore } from '../store/useStore'

const Footer: React.FC = () => {
  const { systemStatus } = useStore()

  return (
    <StyledFooter>
      RetroShare v1.0.2 (build 2025-02-10) | Connected Peers: {systemStatus.activePeers} | Network Uptime: 95.7% | Current User: CURRENT_USER
    </StyledFooter>
  )
}

export default Footer
