import React from 'react'
import { Panel, Table, FormGroup, Button } from '../styles/StyledComponents'
import { useStore } from '../store/useStore'

const availableResources = [
  {
    user: 'PIXELDUST',
    cpu: '4 cores',
    memory: '8 GB',
    storage: '500 GB',
    bandwidth: '100 Mbps',
    reliability: '98.7%'
  },
  {
    user: 'RETROHAX0R',
    cpu: '2 cores',
    memory: '4 GB',
    storage: '250 GB',
    bandwidth: '50 Mbps',
    reliability: '95.2%'
  },
  {
    user: 'GLITCHMASTER',
    cpu: '8 cores',
    memory: '16 GB',
    storage: '1 TB',
    bandwidth: '200 Mbps',
    reliability: '99.1%'
  },
  {
    user: 'CYBERWIZARD',
    cpu: '6 cores',
    memory: '12 GB',
    storage: '750 GB',
    bandwidth: '150 Mbps',
    reliability: '97.5%'
  }
]

const runningApplications = [
  {
    id: 'web-1',
    name: 'Web Server',
    host: 'PIXELDUST',
    resources: '1 core, 2 GB RAM, 20 GB storage',
    uptime: '3d 7h 22m',
    status: 'Running'
  },
  {
    id: 'db-1',
    name: 'Database',
    host: 'GLITCHMASTER',
    resources: '2 cores, 4 GB RAM, 50 GB storage',
    uptime: '1d 4h 10m',
    status: 'Running'
  },
  {
    id: 'ai-1',
    name: 'AI Training',
    host: 'CYBERWIZARD',
    resources: '4 cores, 8 GB RAM, 100 GB storage',
    uptime: '0d 5h 45m',
    status: 'Running'
  }
]

const UseResources: React.FC = () => {
  const { activePanel } = useStore()

  const handleConnect = (user: string) => {
    alert(`Connecting to ${user}'s resources...`)
  }

  const handleLaunch = () => {
    alert('Application launched successfully!')
  }

  const handleStop = (appId: string) => {
    alert(`Application ${appId} stopped successfully!`)
  }

  return (
    <Panel visible={activePanel === 'use'}>
      <h2>Use Community Resources</h2>

      <div>
        <h3>Available Community Resources</h3>
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>Storage</th>
              <th>Bandwidth</th>
              <th>Reliability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {availableResources.map(resource => (
              <tr key={resource.user}>
                <td>{resource.user}</td>
                <td>{resource.cpu}</td>
                <td>{resource.memory}</td>
                <td>{resource.storage}</td>
                <td>{resource.bandwidth}</td>
                <td>{resource.reliability}</td>
                <td>
                  <Button onClick={() => handleConnect(resource.user)}>
                    CONNECT
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div>
        <h3>Launch Application</h3>
        <form>
          <FormGroup>
            <label htmlFor="app-type">Application Type:</label>
            <select id="app-type">
              <option value="web">Web Server</option>
              <option value="database">Database</option>
              <option value="compute">Compute Task</option>
              <option value="rendering">3D Rendering</option>
              <option value="ai">AI Training</option>
              <option value="custom">Custom Application</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="resource-requirements">Resource Requirements:</label>
            <select id="resource-requirements">
              <option value="minimal">Minimal (1 core, 1 GB RAM, 10 GB storage)</option>
              <option value="moderate">Moderate (2 cores, 4 GB RAM, 50 GB storage)</option>
              <option value="high">High (4 cores, 8 GB RAM, 100 GB storage)</option>
              <option value="extreme">Extreme (8 cores, 16 GB RAM, 500 GB storage)</option>
              <option value="custom">Custom Configuration</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="duration">Expected Duration:</label>
            <select id="duration">
              <option value="short">Short ({'<'} 1 hour)</option>
              <option value="medium">Medium (1-12 hours)</option>
              <option value="long">Long (12-48 hours)</option>
              <option value="extended">Extended ({'>'} 48 hours)</option>
              <option value="indefinite">Indefinite (until manually stopped)</option>
            </select>
          </FormGroup>

          <Button type="button" onClick={handleLaunch}>
            LAUNCH APPLICATION
          </Button>
        </form>
      </div>

      <div>
        <h3>Your Running Applications</h3>
        <Table>
          <thead>
            <tr>
              <th>Application</th>
              <th>Host</th>
              <th>Resources</th>
              <th>Uptime</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {runningApplications.map(app => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.host}</td>
                <td>{app.resources}</td>
                <td>{app.uptime}</td>
                <td>{app.status}</td>
                <td>
                  <Button onClick={() => handleStop(app.id)}>STOP</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Panel>
  )
}

export default UseResources
