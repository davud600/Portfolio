import {motion} from 'framer-motion'
import {useSearchParams} from 'react-router-dom'
import {useWindowDimensions} from '../hooks/WindowDimensions'
import {useProjects} from '../hooks/Projects'

import project0Image0 from '../images/project0/1.jpg'
import project0Image1 from '../images/project0/2.jpg'
import project1Image0 from '../images/project1/0.png'
import project1Image1 from '../images/project1/1.png'
import project1Image2 from '../images/project1/3.png'
import project2Image0 from '../images/project2/7.png'
import project2Image1 from '../images/project2/6.png'
import project2Image2 from '../images/project2/0.png'
import project2Image3 from '../images/project2/4.png'
import project2Image4 from '../images/project2/2.png'

const BACKGROUND_COLOR = '#f5f5f7'

let isPhone = false
let titleFontSize, bigFontSize, contentWidth
let projectImage, projectImage2, projectImage3, projectImage4, projectImage5

export default function Project() {
  const [searchParams] = useSearchParams()
  const {width, height} = useWindowDimensions()
  const projects = useProjects()

  isPhone = height / width >= 16 / 16
  titleFontSize = isPhone ? '1.25rem' : '1.4rem'
  bigFontSize = isPhone ? '1.75rem' : '3rem'
  contentWidth = isPhone ? '75%' : '60%'

  if (searchParams.get('id') === '0') {
    projectImage = project0Image0
    projectImage2 = project0Image1
    projectImage3 = project0Image1
    projectImage4 = project0Image1
    projectImage5 = project0Image1
  } else if (searchParams.get('id') === '1') {
    projectImage = project1Image0
    projectImage2 = project1Image1
    projectImage3 = project1Image2
    projectImage4 = project1Image2
    projectImage5 = project1Image2
  } else if (searchParams.get('id') === '2') {
    projectImage = project2Image0
    projectImage2 = project2Image1
    projectImage3 = project2Image2
    projectImage4 = project2Image3
    projectImage5 = project2Image4
  }

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.25}}}
      exit={{opacity: 0}}
      className="d-flex justify-content-center"
      style={{backgroundColor: BACKGROUND_COLOR}}>
      <div style={{width: contentWidth}}>
        <div className="w-100 pt-5 d-flex justify-content-center mt-5">
          <div
            className="w-100 d-flex justify-content-center flex-column"
            style={{
              width: contentWidth,
            }}>
            {width / height >= 1.7 ? (
              <div>
                <div className="d-flex flex-row text-center">
                  <div className="w-50 me-3 mb-3">
                    <div
                      style={{
                        width: '100%',
                        height: '30rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage}
                      />
                    </div>
                  </div>

                  <div className="w-50 mb-3">
                    <div
                      style={{
                        width: '100%',
                        height: '30rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage2}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100">
                  <div className="w-100 text-center">
                    <div
                      style={{
                        width: '100%',
                        height: '20rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage3}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row text-center mt-3">
                  <div className="w-50 me-3 mb-3">
                    <div
                      style={{
                        width: '100%',
                        height: '30rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage4}
                      />
                    </div>
                  </div>

                  <div className="w-50 mb-3">
                    <div
                      style={{
                        width: '100%',
                        height: '30rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="d-flex flex-column w-100">
                  <div className="w-100 me-3 mb-3">
                    <div
                      style={{
                        width: '100%',
                        height: '17rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage}
                      />
                    </div>
                  </div>

                  <div className="w-100 mb-3">
                    <div
                      style={{
                        width: '100%',
                        height: '17rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage2}
                      />
                    </div>
                  </div>

                  <div className="w-100 text-center">
                    <div
                      style={{
                        width: '100%',
                        height: '17rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage3}
                      />
                    </div>
                  </div>

                  <div className="w-100 text-center mt-3">
                    <div
                      style={{
                        width: '100%',
                        height: '17rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage4}
                      />
                    </div>
                  </div>

                  <div className="w-100 text-center mt-3">
                    <div
                      style={{
                        width: '100%',
                        height: '17rem',
                        overflow: 'hidden',
                        borderRadius: '1.5rem',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}>
                      <img
                        className="project-image"
                        alt="Not found"
                        src={projectImage4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-center pt-2 pb-5">
          <div className="pt-5 d-flex justify-content-center">
            <p
              className="pt-3 text-center display-4 fw-bold"
              style={{
                fontSize: bigFontSize,
              }}>
              {projects[searchParams.get('id')].title}
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <p
            className="pt-3 lead"
            style={{
              fontSize: titleFontSize,
            }}>
            {projects[searchParams.get('id')].description}
          </p>
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
