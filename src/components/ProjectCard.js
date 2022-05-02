import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useProjects } from "../hooks/Projects"

export default function ProjectCard({ props }) {
  const navigate = useNavigate()
  const projects = useProjects()

  const {
    project = 0,
    textColor = "black",
    height = "30rem",
    fontSize = "2.5rem",
  } = props

  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
    
      className={`project-card project-card-${project} w-100 d-flex justify-content-center`}
      onClick={() => navigate(`/project?id=${project}`)}
      style={{
        cursor: "pointer",
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
    </motion.div>
  )
}
