import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles & images
import './Navbar.css'
import Template from '../assets/temple.svg'

export default function Navbar() {
  const { logout, isPending } = useLogout()

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <Link to="/">
            <img src={Template} alt="Dojo Logo" />
            <span>The Dojo</span>
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          {!isPending && (
            <button onClick={logout} className="btn">
              Logout
            </button>
          )}
          {isPending && (
            <button disabled className="btn">
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  )
}
