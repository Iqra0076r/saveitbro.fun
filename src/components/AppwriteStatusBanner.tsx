import { useState, useEffect } from 'react'
import { client } from '../services/appwrite'

export default function AppwriteStatusBanner() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('Verifying Appwrite connection...')

  useEffect(() => {
    client.ping()
      .then(() => {
        setStatus('success')
        setMessage('✓ Appwrite backend connected successfully')
      })
      .catch((error) => {
        setStatus('error')
        setMessage('✗ Appwrite connection failed: ' + (error as Error).message)
      })
  }, [])

  const bgColor = status === 'success' ? 'bg-green-100' : status === 'error' ? 'bg-red-100' : 'bg-blue-100'
  const textColor = status === 'success' ? 'text-green-800' : status === 'error' ? 'text-red-800' : 'text-blue-800'

  return (
    <div className={`${bgColor} ${textColor} p-3 text-center text-sm font-medium`}>
      {message}
    </div>
  )
}
