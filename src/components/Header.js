import { useLocation } from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

const NAVBAR_COLOR = "#5c5c5d"
const NAVBAR_TEXT_COLOR1 = "#f2f2f2"
const NAVBAR_TEXT_COLOR2 = "#d6d6d6"
const NAVBAR_TEXT_ACTIVE = "white"

export default function Header() {
  const location = useLocation()

  return (
    <div className="d-flex justify-content-center" style={{ backgroundColor:NAVBAR_COLOR }}>
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


      {/* <nav className="navbar navbar-expand-sm navbar-light">
        <div className="me-5">
          <a className="navbar-brand" href="/">
            <i style={{ color:NAVBAR_TEXT_COLOR1 }} className="bi bi-house"></i>
          </a>
          <button style={{ color:NAVBAR_TEXT_COLOR1 }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a style={{ color: location.pathname === '/' ? NAVBAR_TEXT_ACTIVE:NAVBAR_TEXT_COLOR2 }} className="px-3 nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a style={{ color: location.pathname === '/portfolio' ? NAVBAR_TEXT_ACTIVE:NAVBAR_TEXT_COLOR2 }} className="px-3 nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a style={{ color: location.pathname === '/about' ? NAVBAR_TEXT_ACTIVE:NAVBAR_TEXT_COLOR2 }} className="px-3 nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a style={{ color: location.pathname === '/contact' ? NAVBAR_TEXT_ACTIVE:NAVBAR_TEXT_COLOR2 }} className="px-3 nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  )
}
