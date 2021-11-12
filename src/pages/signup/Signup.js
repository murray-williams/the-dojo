import { useState } from 'react'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbError, setThumbError] = useState(null)

  const handleFileChange = (e) => {
    setThumbnail(null)
    // grab 1st file in the array of files
    let selected = e.target.files[0]

    if (!selected) {
      setThumbError('Choose a thumbnail image')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbError('Selected file is not a valid image')
      return
    }
    if (selected.size > 100000) {
      setThumbError('Image file size must be less than 100kb')
      return
    }

    setThumbError(null)
    setThumbnail(selected)
    console.log('thumbnail updated')
  }

  return (
    <form className="auth-form">
      <h2>Sign up</h2>
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
      <label>
        <span>display name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input required type="file" onChange={handleFileChange} />
        {thumbError && <div className="error">{thumbError}</div>}
      </label>
      <button className="btn">Sign up</button>
      <div></div>
    </form>
  )
}
