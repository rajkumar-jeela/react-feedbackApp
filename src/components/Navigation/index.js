import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const Navigation = () => (
  <>
    <Navbar
      collapseOnSelect
      expand="lg"
      onClick
      bg="purple heart"
      variant="dark"
      fixed="top"
      className="main-menu menu_fixed animated"
    >
      <Container className="text-center">
        <Navbar.Brand href="#home">
          <img
            src="https://preview.colorlib.com/theme/ecobit/img/xfooter_logo.png.pagespeed.ic.mkL2FQ1jFw.webp"
            alt="logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="navbar-collapse main-menu-item"
        >
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link navbar-brand">
              HOME
            </Nav.Link>
            <Nav.Link href="/features" className="nav-link">
              Features
            </Nav.Link>

            <Nav.Link href="/pricing" className="nav-link">
              Pricing
            </Nav.Link>
            <NavDropdown title="BLOG" id="#blog-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="nav-link">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Single Blog
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="PAGES"
              className="nav-link"
              id="pages-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Elements</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className="nav-link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div>
        <button type="button" className="button">
          SIGN UP
        </button>
      </div>
    </Navbar>
    <div className="home-container">
      <img
        src="https://preview.colorlib.com/theme/ecobit/img/xbanner_img.png.pagespeed.ic.l_vDkQACuU.webp"
        alt="Network"
        className="image"
      />
      <div className="text-container">
        <h1 className="heading">Building Networks For People</h1>
        <p className="description">
          Lorem ipsum dolor sit omet, consectetur odipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore mmongo aliquo. Ut enimad
          minim veniam.
        </p>
        <button type="button" className="try-btn">
          TRY FOR FREE
        </button>
      </div>
    </div>
  </>
)

export default Navigation
