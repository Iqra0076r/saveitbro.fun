import { useState, useEffect } from 'react'
import { client } from '../services/appwrite'

export default function AppwriteDebugPage() {
  const [status, setStatus] = useState('Testing...')
  const [details, setDetails] = useState('')

  useEffect(() => {
    const testConnection = async () => {
      try {
        setStatus('🔄 Connecting to Appwrite...')
        setDetails('Endpoint: https://nyc.cloud.appwrite.io/v1\nProject: 69d10336001882f5531d')

        const response = await client.ping()
        
        setStatus('✅ SUCCESS - Appwrite is reachable!')
        setDetails(JSON.stringify(response, null, 2))
      } catch (error: any) {
        setStatus('❌ FAILED - Connection Error')
        
        const errorInfo = `
Error Type: ${error.constructor.name}
Error Message: ${error.message}
Error Code: ${error.code || 'N/A'}
HTTP Status: ${error.status || 'N/A'}
Full Error: ${JSON.stringify(error, null, 2)}
        `
        setDetails(errorInfo)

        // Log additional diagnostics
        console.error('Appwrite Connection Debug:', {
          error: error,
          endpoint: 'https://nyc.cloud.appwrite.io/v1',
          projectId: '69d10336001882f5531d',
          isCORSError: error.message?.includes('CORS'),
          isNetworkError: error.message?.includes('Network'),
        })
      }
    }

    testConnection()
  }, [])

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'monospace',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      margin: '20px'
    }}>
      <h2>🔍 Appwrite Connection Debug</h2>
      <div style={{
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        marginBottom: '10px',
        fontSize: '16px',
        fontWeight: 'bold'
      }}>
        {status}
      </div>
      <pre style={{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '4px',
        overflow: 'auto',
        fontSize: '12px',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word'
      }}>
        {details}
      </pre>
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <p>💡 Tips:</p>
        <ul>
          <li>Check F12 Console for more details</li>
          <li>Verify endpoint is correct</li>
          <li>Verify project ID is correct</li>
          <li>Check if Appwrite server is running</li>
          <li>Check CORS configuration in Appwrite</li>
        </ul>
      </div>
    </div>
  )
}
