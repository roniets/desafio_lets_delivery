import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './navHeaderBar.css';

const NavHeaderBar = () => {
    return (
        <Navbar className="fixed-top border-bottom" bg="light" expand="lg">
            <div className="nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="items" id="basic-navbar-nav">
                    <Nav className="mr-auto items">
                        <Link className="item-home items" to="/">
                           Início
                        </Link>
                        <NavDropdown className="content-dropdown"title="Personagens" id="basic-nav-dropdown">
                            <Link className="items items-link" to="/favoritesListPage">
                                Meus Favoritos
                            </Link>
                            <NavDropdown.Divider />
                            <Link className="items items-link" to="/charactersListPage">
                                Lista de Personagens
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavHeaderBar