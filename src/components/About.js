import { motion } from 'framer-motion'
import { useWindowDimensions } from '../hooks/WindowDimensions'

const BACKGROUND_COLOR = '#f5f5f7'
const INDICATOR_TEXT_COLOR = '#7d7d7d'
const PRIMARY_TEXT_COLOR = '#4a4a4a'

let isPhone = false
let titleFontSize, fontSize, bigFontSize, contentWidth

export default function About() {
  const { width, height } = useWindowDimensions()

  isPhone = height / width >= 16 / 16
  titleFontSize = isPhone ? '1.25rem' : '1.4rem'
  fontSize = isPhone ? '1rem' : '1.3rem'
  bigFontSize = isPhone ? '1.75rem' : '3rem'
  contentWidth = isPhone ? '75%' : '60%'

  const LINE_STYLE = {
    width: contentWidth,
    border: '.5px solid black',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
      exit={{ opacity: 0 }}
      className="pt-5 flex-column d-flex"
      style={{ backgroundColor: BACKGROUND_COLOR }}>
      <div className="pt-3 d-flex justify-content-center">
        <p
          className="lead"
          style={{
            fontSize: titleFontSize,
          }}>
          About
        </p>
      </div>

      <div
        className="pt-5 pt-0 flex-row d-flex align-self-center"
        style={{
          width: contentWidth,
        }}>
        <p
          className="w-50 fw-bold text-start"
          style={{
            fontSize: fontSize,
            color: INDICATOR_TEXT_COLOR,
          }}>
          Skills:&nbsp;
        </p>
        <p
          className="w-100 text-end"
          style={{
            fontSize: fontSize,
            color: PRIMARY_TEXT_COLOR,
          }}>
          MERN Stack
        </p>
      </div>
      <hr className="pb-0 mb-4 mt-2 align-self-center" style={LINE_STYLE} />

      <div
        className="pt-0 flex-row d-flex align-self-center"
        style={{
          width: contentWidth,
        }}>
        <p
          className="w-50 fw-bold text-start"
          style={{
            fontSize: fontSize,
            color: INDICATOR_TEXT_COLOR,
          }}>
          Frontend:&nbsp;
        </p>
        <p
          className="w-100 text-end"
          style={{
            fontSize: fontSize,
            color: PRIMARY_TEXT_COLOR,
          }}>
          React js, bootstrap
        </p>
      </div>
      <hr className="pb-0 mb-4 mt-2 align-self-center" style={LINE_STYLE} />

      <div
        className="pt-0 flex-row d-flex align-self-center"
        style={{
          width: contentWidth,
        }}>
        <p
          className="w-50 fw-bold text-start"
          style={{
            fontSize: fontSize,
            color: INDICATOR_TEXT_COLOR,
          }}>
          Backend:&nbsp;
        </p>
        <p
          className="w-100 text-end"
          style={{
            fontSize: fontSize,
            color: PRIMARY_TEXT_COLOR,
          }}>
          Node js, express
        </p>
      </div>
      <hr className="pb-0 mb-4 mt-2 align-self-center" style={LINE_STYLE} />
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>

      <div
        className="d-flex flex-column w-100"
        style={{ backgroundColor: 'white' }}>
        <div
          className="align-self-center pt-5 d-flex justify-content-center"
          style={{
            width: contentWidth,
          }}>
          <p
            className="pt-0 text-center display-4 fw-bold"
            style={{
              fontSize: bigFontSize,
            }}>
            More than 3 years of experience in html, css and javascript. Self
            taught passionate fullstack web developer, with years of experience
            in various modern technologies gathered from online courses,
            practice projects and all the way to building real world projects in
            freelancing. I am able to deliver modern responsive web applications
            of high quality. My main skills in web development are: React js
            (including libraries like redux, bootstrap and even sass), CSS and
            HTML, Node js and express, mongodb and mongoose, firebase, etc…
          </p>
        </div>
      </div>
    </motion.div>
  )
}
