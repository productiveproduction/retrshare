import React, { useState } from 'react'
import { Panel, FormGroup, StatusBox, Button } from '../styles/StyledComponents'
import { useStore } from '../store/useStore'

const ShareResources: React.FC = () => {
  const { activePanel } = useStore()
  const [isSharing, setIsSharing] = useState(true)
  const [cpuValue, setCpuValue] = useState(50)

  const handleUpdateSharing = () => {
    alert('Sharing configuration updated successfully!')
  }

  const toggleSharing = () => {
    setIsSharing(!isSharing)
  }

  return (
    <Panel visible={activePanel === 'share'}>
      <h2>Share Your Computing Resources</h2>
      <form>
        <FormGroup>
          <label htmlFor="cpu-percent">CPU Share Percentage:</label>
          <input
            type="range"
            id="cpu-percent"
            min="0"
            max="100"
            value={cpuValue}
            onChange={(e) => setCpuValue(Number(e.target.value))}
          />
          <span>{cpuValue}%</span>
        </FormGroup>

        <FormGroup>
          <label htmlFor="memory-amount">Memory to Share (MB):</label>
          <input
            type="number"
            id="memory-amount"
            min="256"
            max="32768"
            defaultValue="1024"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="storage-amount">Storage to Share (GB):</label>
          <input
            type="number"
            id="storage-amount"
            min="1"
            max="1000"
            defaultValue="50"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="bandwidth-limit">Bandwidth Limit (Mbps):</label>
          <input
            type="number"
            id="bandwidth-limit"
            min="1"
            max="1000"
            defaultValue="10"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="availability">Availability Schedule:</label>
          <select id="availability" defaultValue="always">
            <option value="always">Always Available</option>
            <option value="business">Business Hours (9AM-5PM)</option>
            <option value="night">Night Only (10PM-6AM)</option>
            <option value="weekend">Weekends Only</option>
            <option value="custom">Custom Schedule</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="trusted-users">Trusted Users Only:</label>
          <input type="checkbox" id="trusted-users" />
        </FormGroup>

        <Button type="button" onClick={handleUpdateSharing}>
          UPDATE SHARING CONFIGURATION
        </Button>
      </form>

      <StatusBox>
        <h3>Current Shared Resource Status</h3>
        <p>
          Status:{' '}
          <span style={{ color: '#FFFF00' }}>
            {isSharing ? 'ACTIVE' : 'PAUSED'}
          </span>
        </p>
        <p>Uptime: 3 days, 7 hours, 22 minutes</p>
        <p>Resources currently used by: PIXELDUST, RETROHAX0R</p>
        <p>Contribution Points Earned: 1,275</p>
        <Button type="button" onClick={toggleSharing}>
          {isSharing ? 'PAUSE SHARING' : 'RESUME SHARING'}
        </Button>
      </StatusBox>
    </Panel>
  )
}

export default ShareResources
