import { useSearchParams } from "react-router-dom"
import { useWindowDimensions } from "../hooks/WindowDimensions"
import { useProjects } from "../hooks/Projects"

const BACKGROUND_COLOR = "#f5f5f7"
const INDICATOR_TEXT_COLOR = "#7d7d7d"
const PRIMARY_TEXT_COLOR = "#4a4a4a"

let isPhone = false
let titleFontSize, fontSize, bigFontSize, contentWidth

export default function Project() {
  const [ searchParams ] = useSearchParams()
  const { width, height } = useWindowDimensions()
  const projects = useProjects()

  isPhone = height / width >= 16 / 16
  titleFontSize = isPhone ? "1.25rem":"1.4rem"
  fontSize = isPhone ? "1rem":"1.3rem"
  bigFontSize = isPhone ? "1.75rem":"3rem"
  contentWidth = isPhone ? "75%":"60%"

  return (
    <div className="d-flex justify-content-center" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <div style= {{ width: contentWidth }}>
        <div className="d-flex justify-content-center pt-5 pb-5">
          <div className="pt-5 d-flex justify-content-center">
            <p className="pt-0 text-center display-4 fw-bold" style={{
              fontSize: bigFontSize
            }}>{projects[searchParams.get('id')].title}</p>
          </div>
        </div>

        <div className="pt-3 d-flex justify-content-center">
          <p className="pt-5 lead" style={{
            fontSize: titleFontSize
          }}>{projects[searchParams.get('id')].description}</p>
        </div>

        <div className="pb-5"></div>
        <div className="pb-5"></div>
        <div className="pb-5"></div>
        <div className="pb-5"></div>
        <div className="pb-5"></div>
        <div className="pb-5"></div>
      </div>
    </div>
  )
}
