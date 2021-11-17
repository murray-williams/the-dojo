// styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p> No projects yet!</p>}
      {projects.map((project) => (
        <p>{project.name}</p>
      ))}
    </div>
  )
}
