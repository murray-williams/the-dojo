import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

export default function Sidebar() {
  const { user } = useAuthContext()

  console.log(user)
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {user && (
            <>
              <img src={user.photoURL} alt={user.displayName} />
              <p>Hey {user.displayName}</p>
            </>
          )}
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard Icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="create Icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
