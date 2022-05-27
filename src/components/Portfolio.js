import { motion } from "framer-motion"
import { useWindowDimensions } from "../hooks/WindowDimensions"
import ProjectCard from "./ProjectCard"

const BACKGROUND_COLOR = "#f5f5f7"

let isPhone = false
let fontSize, bigFontSize, contentWidth

export default function Portfolio() {
  const { width, height } = useWindowDimensions()

  isPhone = height / width >= 16 / 16
  fontSize = isPhone ? "1.25rem":"2.5rem"
  bigFontSize = isPhone ? "1.75rem":"3rem"
  contentWidth = isPhone ? "75%":"60%"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
      exit={{ opacity: 0 }}

      style={{ backgroundColor: BACKGROUND_COLOR }}
    >

      <div className="d-flex justify-content-center pt-5 pb-5">
        <div className="pt-5 d-flex justify-content-center">
          <p className="pt-0 text-center display-4 fw-bold" style={{
            fontSize: bigFontSize
          }}>Portfolio</p>
        </div>
      </div>


      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex justify-content-center flex-column" style={{
          width: contentWidth
        }}>
          
          {width / height >= 1.7 ?
          <div>
            <div className="d-flex flex-row text-center">
              <div className="w-50 me-3 mb-3">
                <ProjectCard props={{
                  project: "0",
                  height: "30rem",
                  color: "white",
                  fontSize: fontSize
                }} />
              </div>
              
              <div className="w-50 mb-3">
                <ProjectCard props={{
                  project: "1",
                  height: "30rem",
                  color: "white",
                  fontSize: fontSize
                }} />
              </div>
            </div>
          
            {/* <div className="d-flex w-100">
              <div className="w-100 text-center">
                <ProjectCard props={{
                  project: "2",
                  height: "20rem",
                  color: "white",
                  fontSize: fontSize
                }} />
              </div>
            </div> */}
          </div>:
          <div>
            <div className="d-flex flex-column w-100">
              <div className="w-100 me-3 mb-3">
                <ProjectCard props={{
                  project: "0",
                  height: "17rem",
                  color: "white",
                  fontSize: fontSize
                }} />
              </div>
              
              <div className="w-100 mb-3">
                <ProjectCard props={{
                  project: "1",
                  height: "17rem",
                  color: "white",
                  fontSize: fontSize
                }} />
              </div>

              {/* <div className="w-100 text-center">
                <ProjectCard props={{
                  project: "2",
                  height: "17rem",
                  color: "white",
                  fontSize: fontSize
                }} />
              </div> */}
            </div>
          </div>}

        </div>
      </div>

      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>

    </motion.div>
  )
}
