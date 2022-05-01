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
    <div className="d-flex justify-content-center" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <div style= {{ width: contentWidth }}>
        <div className="pt-3 d-flex justify-content-center">
          <p className="pt-5 lead" style={{
            fontSize: titleFontSize
          }}>Hi, I'm e-el gatoo.</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="pt-5 text-center display-4 fw-bold" style={{
            fontSize: bigFontSize
          }}>I enjoy designing tech websites and digital products.</p>
        </div>

        <div className="d-flex justify-content-center mt-5">
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
