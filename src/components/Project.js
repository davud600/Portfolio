import { motion } from "framer-motion"
import { useSearchParams } from "react-router-dom"
import { useWindowDimensions } from "../hooks/WindowDimensions"
import { useProjects } from "../hooks/Projects"

import projectImage1 from "../images/project0/crud_phone1.png"
import projectImage2 from "../images/project0/curd_phone2.png"
import projectImage3 from "../images/project0/crud_phone1.png"

const BACKGROUND_COLOR = "#f5f5f7"

let isPhone = false
let titleFontSize, bigFontSize, contentWidth

export default function Project() {
  const [ searchParams ] = useSearchParams()
  const { width, height } = useWindowDimensions()
  const projects = useProjects()

  isPhone = height / width >= 16 / 16
  titleFontSize = isPhone ? "1.25rem":"1.4rem"
  bigFontSize = isPhone ? "1.75rem":"3rem"
  contentWidth = isPhone ? "75%":"60%"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
      exit={{ opacity: 0 }}

      className="d-flex justify-content-center"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div style= {{ width: contentWidth }}>
        <div className="w-100 pt-5 d-flex justify-content-center mt-5">
          <div className="w-100 d-flex justify-content-center flex-column" style={{
            width: contentWidth
          }}>
            
            {width / height >= 1.7 ?
            <div>
              <div className="d-flex flex-row text-center">
                <div className="w-50 me-3 mb-3">
                  <div style={{
                    width: '100%',
                    height: '30rem',
                    overflow: 'hidden',
                    borderRadius: "1.5rem"
                  }}>
                    <img alt="Not found" src={projectImage1} />
                  </div>
                </div>
                
                <div className="w-50 mb-3">
                  <div style={{
                    width: '100%',
                    height: '30rem',
                    overflow: 'hidden',
                    borderRadius: "1.5rem"
                  }}>
                    <img alt="Not found" src={projectImage2} />
                  </div>
                </div>
              </div>
            
              <div className="d-flex w-100">
                <div className="w-100 text-center">
                  <div style={{
                    width: '100%',
                    height: '20rem',
                    overflow: 'hidden',
                    borderRadius: "1.5rem"
                  }}>
                    <img alt="Not found" src={projectImage3} />
                  </div>
                </div>
              </div>
            </div>:
            <div>
              <div className="d-flex flex-column w-100">
                <div className="w-100 me-3 mb-3">
                  <div style={{
                    width: '100%',
                    height: '17rem',
                    overflow: 'hidden',
                    borderRadius: "1.5rem"
                  }}>
                    <img alt="Not found" src={projectImage1} />
                  </div>
                </div>
                
                <div className="w-100 mb-3">
                  <div style={{
                    width: '100%',
                    height: '17rem',
                    overflow: 'hidden',
                    borderRadius: "1.5rem"
                  }}>
                    <img alt="Not found" src={projectImage2} />
                  </div>
                </div>

                <div className="w-100 text-center">
                  <div style={{
                    width: '100%',
                    height: '17rem',
                    overflow: 'hidden',
                    borderRadius: "1.5rem"
                  }}>
                    <img alt="Not found" src={projectImage3} />
                  </div>
                </div>
              </div>
            </div>}

          </div>
        </div>


        
        <div className="d-flex justify-content-center pt-2 pb-5">
          <div className="pt-5 d-flex justify-content-center">
            <p className="pt-3 text-center display-4 fw-bold" style={{
              fontSize: bigFontSize
            }}>{projects[searchParams.get('id')].title}</p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <p className="pt-3 lead" style={{
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
    </motion.div>
  )
}
