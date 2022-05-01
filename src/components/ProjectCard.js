import { useNavigate } from "react-router-dom"
import { useProjects } from "../hooks/Projects"

export default function ProjectCard({ props }) {
  const navigate = useNavigate()
  const projects = useProjects()

  const {
    project = 0,
    color = "white",
    textColor = "black",
    height = "30rem",
    fontSize = "2.5rem",
  } = props

  return (
    <div className="w-100 d-flex justify-content-center"
      onClick={() => navigate(`/project?id=${project}`)}
      style={{
        cursor: "pointer",
        backgroundColor: color,
        color: textColor,
        height: height,
        borderRadius: "1.5rem"
      }}
    >
      <div className="w-75">
        <p className="pt-0 text-start display-4 fw-bold" style={{
          fontSize: fontSize,
          marginTop: '2.5rem'
        }}>{projects[project].title}</p>
      </div>
    </div>
  )
}
