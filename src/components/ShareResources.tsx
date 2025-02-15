import React, { useState } from 'react'
import { Panel, Table } from '../styles/StyledComponents'
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
        <div>
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
        </div>

        <div>
          <label htmlFor="memory-amount">Memory to Share (MB):</label>
          <input
            type="number"
            id="memory-amount"
            min="256"
            max="32768"
            defaultValue="1024"
          />
        </div>

        <div>
          <label htmlFor="storage-amount">Storage to Share (GB):</label>
          <input
            type="number"
            id="storage-amount"
            min="1"
            max="1000"
            defaultValue="50"
          />
        </div>

        <div>
          <label htmlFor="bandwidth-limit">Bandwidth Limit (Mbps):</label>
          <input
            type="number"
            id="bandwidth-limit"
            min="1"
            max="1000"
            defaultValue="10"
          />
        </div>

        <div>
          <label htmlFor="availability">Availability Schedule:</label>
          <select id="availability" defaultValue="always">
            <option value="always">Always Available</option>
            <option value="business">Business Hours (9AM-5PM)</option>
            <option value="night">Night Only (10PM-6AM)</option>
            <option value="weekend">Weekends Only</option>
            <option value="custom">Custom Schedule</option>
          </select>
        </div>

        <div>
          <label htmlFor="trusted-users">Trusted Users Only:</label>
          <input type="checkbox" id="trusted-users" />
        </div>

        <div style={{ marginTop: '20px' }}>
          <button type="button" onClick={handleUpdateSharing}>
            UPDATE SHARING CONFIGURATION
          </button>
        </div>
      </form>

      <div style={{ marginTop: '30px' }}>
        <h3>Current Shared Resource Status</h3>
        <div style={{ border: '1px solid #00FF00', padding: '10px' }}>
          <p>
            Status:{' '}
            <span style={{ color: '#FFFF00' }}>
              {isSharing ? 'ACTIVE' : 'PAUSED'}
            </span>
          </p>
          <p>Uptime: 3 days, 7 hours, 22 minutes</p>
          <p>Resources currently used by: PIXELDUST, RETROHAX0R</p>
          <p>Contribution Points Earned: 1,275</p>
          <button type="button" style={{ marginTop: '10px' }} onClick={toggleSharing}>
            {isSharing ? 'PAUSE SHARING' : 'RESUME SHARING'}
          </button>
        </div>
      </div>
    </Panel>
  )
}

export default ShareResources
