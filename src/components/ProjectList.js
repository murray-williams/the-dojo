import { Link } from 'react-router-dom'
import Avatar from './Avatar'

// styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p> No projects yet!</p>}
      {projects.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <h4>{project.name}</h4>
          <p className="due-date">
            Due by {project.dueDate.toDate().toDateString()}
          </p>
          <p className="details">
            {project.details.length > 105
              ? `${project.details.substring(0, 135)}...`
              : project.details}
          </p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  )
}
