import { Link } from 'react-router-dom'

// styles & images
import './Navbar.css'
import Template from '../assets/temple.svg'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Template} alt="Dojo Logo" />
          <span>The Dojo</span>
        </li>

        <li>
          <Link t0="/login">Login</Link>
        </li>
        <li>
          <Link t0="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  )
}
