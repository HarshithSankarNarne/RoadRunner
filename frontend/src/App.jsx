import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [backendStatus, setBackendStatus] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try to fetch from backend API
    fetch('http://localhost:3000/api/health')
      .then(res => res.json())
      .then(data => {
        setBackendStatus(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Backend not reachable:', err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div>
        <h1>🏃 RoadRunner</h1>
        <p>Full-stack application with React frontend and Express backend</p>
      </div>
      <div className="card">
        <h2>Backend Status</h2>
        {loading ? (
          <p>Checking backend connection...</p>
        ) : backendStatus ? (
          <div>
            <p style={{ color: 'green' }}>✓ Backend is running</p>
            <p>Status: {backendStatus.status}</p>
            <p>Time: {new Date(backendStatus.timestamp).toLocaleString()}</p>
          </div>
        ) : (
          <p style={{ color: 'orange' }}>⚠ Backend not reachable. Make sure to start the backend server.</p>
        )}
      </div>
      <p className="read-the-docs">
        Edit <code>src/App.jsx</code> to customize the frontend
      </p>
    </>
  )
}

export default App
