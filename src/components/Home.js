import { motion } from "framer-motion"
import { useWindowDimensions } from "../hooks/WindowDimensions"

const BACKGROUND_COLOR = "#f5f5f7"

let isPhone = false
let titleFontSize, bigFontSize, contentWidth

export default function Home() {
  const { width, height } = useWindowDimensions()

  isPhone = height / width >= 16 / 16
  titleFontSize = isPhone ? "1.25rem":"1.5rem"
  bigFontSize = isPhone ? "2.5rem":"3.5rem"
  contentWidth = isPhone ? "75%":"60%"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0 }}

      className="d-flex justify-content-center"
      style={{
        backgroundColor: BACKGROUND_COLOR,
        height: "32.6rem"
      }}
    >
      <div style={{
        width: contentWidth
      }}>
        <div className="pt-3 d-flex justify-content-center">
          <p className="pt-5 lead" style={{
            fontSize: titleFontSize
          }}>Hi, I'm Davudi.</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="pt-5 text-center display-4 fw-bold" style={{
            fontSize: bigFontSize
          }}>I enjoy designing tech websites and digital products.</p>
        </div>
      </div>
    </motion.div>
  )
}
