import React from 'react'
import { Panel } from '../styles/StyledComponents'
import { useStore } from '../store/useStore'

const Settings: React.FC = () => {
  const { activePanel } = useStore()

  const handleChangePassword = () => {
    alert('Password change dialog would appear here.')
  }

  const handleSaveSettings = () => {
    alert('Settings saved successfully!')
  }

  const handleResetSettings = () => {
    alert('Settings reset to default values.')
  }

  return (
    <Panel visible={activePanel === 'settings'}>
      <h2>System Settings</h2>

      <form>
        <div>
          <h3>User Profile</h3>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value="CURRENT_USER" disabled />
          </div>

          <div>
            <label htmlFor="display-name">Display Name:</label>
            <input type="text" id="display-name" defaultValue="Current User" />
          </div>

          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" defaultValue="user@example.com" />
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>Security Settings</h3>
          <div>
            <label htmlFor="2fa">Enable Two-Factor Authentication:</label>
            <input type="checkbox" id="2fa" defaultChecked />
          </div>

          <div>
            <label htmlFor="encryption">Encryption Level:</label>
            <select id="encryption" defaultValue="high">
              <option value="standard">Standard (AES-128)</option>
              <option value="high">High (AES-256)</option>
              <option value="paranoid">Paranoid (Multi-layered Encryption)</option>
            </select>
          </div>

          <div>
            <button type="button" onClick={handleChangePassword}>
              CHANGE PASSWORD
            </button>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>Network Settings</h3>
          <div>
            <label htmlFor="port">P2P Port:</label>
            <input type="number" id="port" defaultValue="8080" />
          </div>

          <div>
            <label htmlFor="max-connections">Maximum Connections:</label>
            <input type="number" id="max-connections" defaultValue="50" />
          </div>

          <div>
            <label htmlFor="upnp">Enable UPnP:</label>
            <input type="checkbox" id="upnp" defaultChecked />
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>Theme Settings</h3>
          <div>
            <label htmlFor="theme">Select Theme:</label>
            <select id="theme" defaultValue="matrix">
              <option value="matrix">Matrix (Green/Black)</option>
              <option value="cyberpunk">Cyberpunk (Blue/Purple)</option>
              <option value="amber">Amber Terminal (Amber/Black)</option>
              <option value="greygreen">Monochrome (Grey/Green)</option>
            </select>
          </div>

          <div>
            <label htmlFor="animations">Enable Animations:</label>
            <input type="checkbox" id="animations" defaultChecked />
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <button type="button" onClick={handleSaveSettings}>
            SAVE SETTINGS
          </button>
          <button
            type="button"
            onClick={handleResetSettings}
            style={{ marginLeft: '10px' }}
          >
            RESET TO DEFAULTS
          </button>
        </div>
      </form>
    </Panel>
  )
}

export default Settings
