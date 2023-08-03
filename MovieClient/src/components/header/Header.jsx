import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": "gold"}}>
                <FontAwesomeIcon icon={faVideoSlash}></FontAwesomeIcon>
                Gold
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                >
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/watchList">
                        Watch List
                    </NavLink>
                </Nav>
                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info" className="me-2">Register</Button>
            </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Header