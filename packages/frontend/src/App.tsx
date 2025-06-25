import { useState, useEffect } from 'react'
import { User, ApiResponse, validateEmail, APP_NAME } from '@project-tool/shared'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [newUser, setNewUser] = useState({ name: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users')
      const data: ApiResponse<User[]> = await response.json()
      
      if (data.success && data.data) {
        setUsers(data.data)
      } else {
        setError(data.error || 'Failed to fetch users')
      }
    } catch (err) {
      setError('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(newUser.email)) {
      setError('Please enter a valid email address')
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })

      const data: ApiResponse<User> = await response.json()
      
      if (data.success && data.data) {
        setUsers([...users, data.data])
        setNewUser({ name: '', email: '' })
        setError('')
      } else {
        setError(data.error || 'Failed to create user')
      }
    } catch (err) {
      setError('Failed to create user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>{APP_NAME}</h1>
        <p>A modern monorepo with shared packages</p>
      </header>

      <main className="app-main">
        <section className="user-form">
          <h2>Add New User</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add User'}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </section>

        <section className="user-list">
          <h2>Users ({users.length})</h2>
          {loading ? (
            <p>Loading users...</p>
          ) : users.length === 0 ? (
            <p>No users found. Add one above!</p>
          ) : (
            <div className="users-grid">
              {users.map((user) => (
                <div key={user.id} className="user-card">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <small>Created: {new Date(user.createdAt).toLocaleDateString()}</small>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App 