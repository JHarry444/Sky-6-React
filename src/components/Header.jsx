import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Navbar expand="lg" variant='dark' bg="dark">
                <Container>
                    <Navbar.Collapse>
                        <Nav>
                            <Link className="navbar-brand" to='/'>My React App</Link>
                            <Link className="nav-link" to="/counter">Counter</Link>
                            <Link className="nav-link" to="/converter">Converter</Link>
                            <Link className="nav-link" to="/products">Products</Link>
                            <Link className="nav-link" to="/trainers">Trainer</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
// makes the component available to other files
export default Header;