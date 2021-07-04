import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './navHeaderBar.css'

const NavHeaderBar = () => {
    return (
        <Navbar className="fixed-top border-bottom" bg="light" expand="lg">
            <div className="nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="items" id="basic-navbar-nav">
                    <Nav className="mr-auto items">
                        <Link to="/">
                           {/*  <Nav.Link className="item-home items"> */}Início{/* </Nav.Link> */}
                        </Link>
                        <NavDropdown title="Personagens" id="basic-nav-dropdown">
                            <Link to="/favoritesListPage">
                                {/* <NavDropdown.Item className="items"> */}Meus Favoritos{/* </NavDropdown.Item> */}
                            </Link>
                            <NavDropdown.Divider />
                            <Link to="/charactersListPage">
                                {/* <NavDropdown.Item className="items"> */}Lista de Personagens{/* </NavDropdown.Item> */}
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavHeaderBar