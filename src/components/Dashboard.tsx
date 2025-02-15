import React from 'react'
import { Table, Panel, ProgressBarContainer, Progress, ScrollableContainer } from '../styles/StyledComponents'
import { useStore } from '../store/useStore'

const Dashboard: React.FC = () => {
  const { activePanel, systemStatus, resourceUsage } = useStore()

  return (
    <Panel visible={activePanel === 'dashboard'}>
      <h2>System Status</h2>
      <Table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CPU Shared</td>
            <td>{systemStatus.cpuShared}%</td>
          </tr>
          <tr>
            <td>Memory Shared</td>
            <td>{systemStatus.memoryShared} GB</td>
          </tr>
          <tr>
            <td>Storage Shared</td>
            <td>{systemStatus.storageShared} GB</td>
          </tr>
          <tr>
            <td>Network Bandwidth</td>
            <td>{systemStatus.networkBandwidth} Mbps</td>
          </tr>
          <tr>
            <td>Active Peers</td>
            <td>{systemStatus.activePeers}</td>
          </tr>
          <tr>
            <td>Applications Running</td>
            <td>{systemStatus.applicationsRunning}</td>
          </tr>
        </tbody>
      </Table>

      <h3>Resource Usage</h3>
      <div>
        <p>CPU Usage: {resourceUsage.cpu}%</p>
        <ProgressBarContainer>
          <Progress width={resourceUsage.cpu}>{resourceUsage.cpu}%</Progress>
        </ProgressBarContainer>
      </div>
      <div>
        <p>Memory Usage: {resourceUsage.memory.used} GB / {resourceUsage.memory.total} GB</p>
        <ProgressBarContainer>
          <Progress width={(resourceUsage.memory.used / resourceUsage.memory.total) * 100}>
            {Math.round((resourceUsage.memory.used / resourceUsage.memory.total) * 100)}%
          </Progress>
        </ProgressBarContainer>
      </div>
      <div>
        <p>Storage Usage: {resourceUsage.storage.used} GB / {resourceUsage.storage.total} GB</p>
        <ProgressBarContainer>
          <Progress width={(resourceUsage.storage.used / resourceUsage.storage.total) * 100}>
            {Math.round((resourceUsage.storage.used / resourceUsage.storage.total) * 100)}%
          </Progress>
        </ProgressBarContainer>
      </div>

      <h3>Recent Activity</h3>
      <ScrollableContainer>
        <p>[2025-02-16 14:23:12] User CYBERWIZARD started application: Web Server</p>
        <p>[2025-02-16 14:10:45] User RETROHAX0R connected from 192.168.1.56</p>
        <p>[2025-02-16 13:55:30] System automatically allocated 500MB more RAM to Database</p>
        <p>[2025-02-16 13:42:18] User PIXELDUST shared 50GB additional storage</p>
        <p>[2025-02-16 13:35:02] Application "Distributed Rendering" completed task</p>
        <p>[2025-02-16 13:22:47] New user GLITCHMASTER joined the network</p>
        <p>[2025-02-16 13:15:30] System backup completed successfully</p>
        <p>[2025-02-16 13:02:11] Network bandwidth throttled to 25Mbps due to high usage</p>
      </ScrollableContainer>
    </Panel>
  )
}

export default Dashboard
