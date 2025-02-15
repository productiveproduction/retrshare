import React, { useState } from 'react'
import { Panel, Table, ScrollableContainer } from '../styles/StyledComponents'
import { useStore } from '../store/useStore'

const onlineUsers = [
  { name: 'PIXELDUST', since: '2023', score: 9875 },
  { name: 'RETROHAX0R', since: '2024', score: 4350 },
  { name: 'GLITCHMASTER', since: '2023', score: 12680 },
  { name: 'CYBERWIZARD', since: '2024', score: 8760 },
  { name: 'DATABENDER', since: '2023', score: 7890 },
  { name: 'SYNTHMIND', since: '2024', score: 3560 },
  { name: 'PIXELSURFER', since: '2025', score: 1200 },
  { name: 'NEONBYTE', since: '2023', score: 11340 },
  { name: 'VOXELDRIFT', since: '2024', score: 5670 },
  { name: 'CHIPMONK', since: '2025', score: 980 },
  { name: 'QUBITHACK', since: '2023', score: 10450 },
  { name: 'BINARYSAGE', since: '2024', score: 6740 }
]

const bulletinPosts = [
  { user: 'PIXELDUST', date: '2025-02-16', content: 'Looking for someone with GPU resources for a 3D rendering project. Can offer 2000 contribution points.' },
  { user: 'SYSTEM', date: '2025-02-15', content: 'Network upgrade scheduled for 2025-02-20. Expect 2 hours of downtime.' },
  { user: 'GLITCHMASTER', date: '2025-02-15', content: 'Created a new distributed file storage solution. Check it out at node://glitch.master/dfs' },
  { user: 'RETROHAX0R', date: '2025-02-14', content: 'Anyone interested in joining a distributed computing project for climate modeling? Message me!' },
  { user: 'CYBERWIZARD', date: '2025-02-13', content: 'Offering security audit services for your distributed apps. Payment in contribution points or crypto.' },
  { user: 'SYSTEM', date: '2025-02-12', content: 'Congratulations to NEONBYTE for reaching 10,000 contribution points!' },
  { user: 'DATABENDER', date: '2025-02-11', content: 'Looking for beta testers for a new peer-to-peer database system.' },
  { user: 'SYNTHMIND', date: '2025-02-10', content: 'Hosting a webinar on secure resource sharing next week. Sign up at node://synth.mind/webinar' }
]

const leaderboardUsers = [
  { rank: 1, name: 'GLITCHMASTER', points: 12680, resources: '8 cores, 16 GB, 1 TB', uptime: '97.8%' },
  { rank: 2, name: 'NEONBYTE', points: 11340, resources: '6 cores, 12 GB, 750 GB', uptime: '99.1%' },
  { rank: 3, name: 'QUBITHACK', points: 10450, resources: '4 cores, 8 GB, 500 GB', uptime: '98.5%' },
  { rank: 4, name: 'PIXELDUST', points: 9875, resources: '4 cores, 8 GB, 500 GB', uptime: '96.7%' },
  { rank: 5, name: 'CYBERWIZARD', points: 8760, resources: '6 cores, 12 GB, 750 GB', uptime: '95.2%' }
]

const Community: React.FC = () => {
  const { activePanel } = useStore()
  const [newMessage, setNewMessage] = useState('')

  const handlePostMessage = () => {
    if (newMessage.trim()) {
      alert('Message posted to the community board!')
      setNewMessage('')
    }
  }

  return (
    <Panel visible={activePanel === 'community'}>
      <h2>Community Hub</h2>

      <ScrollableContainer>
        <h3>Online Users (12/25)</h3>
        {onlineUsers.map(user => (
          <p key={user.name}>
            <span style={{ color: 'yellow' }}>●</span> {user.name} - Sharing since {user.since} - Contribution Score: {user.score}
          </p>
        ))}
      </ScrollableContainer>

      <div style={{ marginTop: '20px' }}>
        <h3>Community Bulletin Board</h3>
        <ScrollableContainer>
          {bulletinPosts.map((post, index) => (
            <p key={index}>
              <strong>{post.user} [{post.date}]:</strong> {post.content}
            </p>
          ))}
        </ScrollableContainer>

        <div style={{ marginTop: '10px' }}>
          <textarea
            style={{
              width: '100%',
              height: '60px',
              backgroundColor: '#000040',
              color: '#00FF00',
              border: '1px solid #00FF00'
            }}
            placeholder="Post a new message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="button" style={{ marginTop: '5px' }} onClick={handlePostMessage}>
            POST MESSAGE
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Contribution Leaderboard</h3>
        <Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Points</th>
              <th>Resources Shared</th>
              <th>Uptime</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardUsers.map(user => (
              <tr key={user.rank}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.points.toLocaleString()}</td>
                <td>{user.resources}</td>
                <td>{user.uptime}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Panel>
  )
}

export default Community
