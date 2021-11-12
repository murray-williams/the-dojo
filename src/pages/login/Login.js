import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

// styles
import './Login.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, isPending, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()

    login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button disabled className="btn">
          Logging in...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
