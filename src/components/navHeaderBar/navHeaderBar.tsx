import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navHeaderBar.css'

const NavHeaderBar = () => {
    return (
        <Navbar className="fixed-top border-bottom" bg="light" expand="lg">
            <div className="nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="items" id="basic-navbar-nav">
                    <Nav className="mr-auto items">
                        <Nav.Link className="item-home items" href="/">Início</Nav.Link>
                        <NavDropdown title="Personagens" id="basic-nav-dropdown">
                            <NavDropdown.Item className="items" href="#action/3.1">Meus Favoritos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="items" href="/charactersListPage">Lista de Personagens</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavHeaderBar