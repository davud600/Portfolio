import { useLocation } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'

const NAVBAR_COLOR = "rgba(92, 92, 93, 0.95)"
const NAVBAR_TEXT_COLOR1 = "#f2f2f2"
const NAVBAR_TEXT_COLOR2 = "#d6d6d6"
const NAVBAR_TEXT_ACTIVE = "white"

export default function Header() {
  const location = useLocation()

  return (
    <div className="d-flex justify-content-center blur-background" style={{
      backgroundColor:NAVBAR_COLOR,
      position: "sticky",
      top: "0"
    }}>
      <Navbar expand="sm">
        <Container>
          <Navbar.Brand href="/">
            <i style={{ color:NAVBAR_TEXT_COLOR1 }} className="bi bi-house p-4"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <p className="px-2 m-0" style={{ color: location.pathname === '/' ? NAVBAR_TEXT_ACTIVE:NAVBAR_TEXT_COLOR2 }}>Home</p>
              </Nav.Link>
              <Nav.Link href="/portfolio">
                <p className="px-2 m-0" style={{ color: location.pathname === '/portfolio' ? NAVBAR_TEXT_ACTIVE:NAVBAR_TEXT_COLOR2 }}>Portfolio</p>
              </Nav.Link>
              <Nav.Link href="/about">
                <p className="px-2 m-0" style={{ color: location.pathname === '/about' ? NAVBAR_TEXT_ACTIVE:NAVBAR_TEXT_COLOR2 }}>About</p>
              </Nav.Link>
              <Nav.Link href="/contact">
                <p className="px-2 m-0" style={{ color: location.pathname === '/contact' ? NAVBAR_TEXT_ACTIVE:NAVBAR_TEXT_COLOR2 }}>Contact</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
