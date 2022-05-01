import { Form, Button } from "react-bootstrap"
import { useWindowDimensions } from "../hooks/WindowDimensions"

const BACKGROUND_COLOR = "#f5f5f7"
const INDICATOR_TEXT_COLOR = "#7d7d7d"
const PRIMARY_TEXT_COLOR = "#4a4a4a"

let isPhone = false
let titleFontSize, fontSize, bigFontSize, contentWidth

export default function Contact() {
  const { width, height } = useWindowDimensions()
  
  isPhone = height / width >= 16 / 16
  titleFontSize = isPhone ? "1.25rem":"1.4rem"
  fontSize = isPhone ? "1rem":"1.3rem"
  bigFontSize = isPhone ? "1.75rem":"3rem"
  contentWidth = isPhone ? "75%":"60%"

  const LINE_STYLE = {
    width: contentWidth,
    border: ".5px solid black"
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Send email

  }

  return (
    <div className="pt-5 flex-column d-flex" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <div className="pt-3 d-flex justify-content-center">
        <p className="lead" style={{
          fontSize: titleFontSize
        }}>Contact</p>
      </div>
      
      <div className="pt-5 flex-row d-flex align-self-center" style={{
        width: contentWidth
      }}>
        <p className="w-50 fw-bold text-start" style={{
          fontSize: fontSize,
          color: INDICATOR_TEXT_COLOR
        }}>E-mail:&nbsp;</p>
        <p className="w-75 text-end" style={{
          fontSize: fontSize,
          color: PRIMARY_TEXT_COLOR,
          wordWrap: "break-word"
        }}>davudgorqi@gmail.com</p>
      </div>
      <hr className="pb-0 mb-4 mt-2 align-self-center" style={LINE_STYLE} /> 

      <div className="pt-0 flex-row d-flex align-self-center" style={{
        width: contentWidth
      }} >
        <p className="w-50 fw-bold text-start" style={{
          fontSize: fontSize,
          color: INDICATOR_TEXT_COLOR
        }}>Github:&nbsp;</p>
        <a className="w-100 text-end"  href="https://github.com/davud600" style={{
          height: "100%",
          fontSize: fontSize,
          color: PRIMARY_TEXT_COLOR
        }}>el-gato</a>
      </div>
      <hr className="pb-0 mb-0 mt-2 align-self-center" style={LINE_STYLE} />
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-4"></div>

      <div className="d-flex flex-column w-100" style={{ backgroundColor: "white" }}>
        <Form className="pt-5 align-self-center text-center" style={{
          width: contentWidth
        }} >
          <Form.Group>
            <Form.Label className="display-4 fw-bold pb-5" style={{
              fontSize: bigFontSize
            }}>Send a Message</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold" style={{
              fontSize: fontSize,
              color: INDICATOR_TEXT_COLOR
            }}>Sender's E-mail</Form.Label>
            <Form.Control required type="username" placeholder="E-mail" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold" style={{
              fontSize: fontSize,
              color: INDICATOR_TEXT_COLOR
            }}>Subject</Form.Label>
            <Form.Control required type="username" placeholder="Subject" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold" style={{
              fontSize: fontSize,
              color: INDICATOR_TEXT_COLOR
            }}>Message</Form.Label>
            <Form.Control as="textarea" className="pb-5" required placeholder="" />
          </Form.Group>
          
          <Button onClick={handleSubmit} className="mt-3 pb-3 mb-5" type="button" style={{
            color: "white",
            backgroundColor: "#4e6a96",
            width: isPhone ? "100%":"25%"
          }}>
            <p className="p-0 mb-0 mt-2">SEND</p>
          </Button>
        </Form>
      </div>

    </div>
  )
}
