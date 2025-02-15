import React from 'react'
import { MenuContainer, MenuItem } from '../styles/StyledComponents'
import { useStore } from '../store/useStore'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'share', label: 'Share Resources' },
  { id: 'use', label: 'Use Resources' },
  { id: 'community', label: 'Community' },
  { id: 'settings', label: 'Settings' }
]

const Navigation: React.FC = () => {
  const { activePanel, setActivePanel } = useStore()

  return (
    <MenuContainer>
      {menuItems.map(item => (
        <MenuItem 
          key={item.id}
          active={activePanel === item.id}
          onClick={() => setActivePanel(item.id)}
        >
          {item.label}
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default Navigation
