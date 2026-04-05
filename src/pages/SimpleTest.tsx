import React from 'react'
import { client } from '../services/appwrite'

export default function SimpleTest() {
  const [status, setStatus] = React.useState('Testing...')

  React.useEffect(() => {
    // Test that Appwrite client works
    try {
      setStatus('🔄 Testing Appwrite connection...')
      
      // Call ping to test connection
      client.ping().then(
        (response) => {
          setStatus('✅ CONNECTION SUCCESSFUL! Response: ' + JSON.stringify(response))
        },
        (error: Error) => {
          setStatus('❌ CONNECTION FAILED: ' + error.message)
        }
      )
    } catch (error) {
      setStatus('❌ Error: ' + (error as Error).message)
    }
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Appwrite Connection Test</h2>
      <div style={{ 
        padding: '10px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '4px',
        marginTop: '10px'
      }}>
        {status}
      </div>
    </div>
  )
}
