import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const Header = () => {
    return (
        <Fragment>
            <Navbar
                className="uh-navigation"
                expand="lg"
            >
                <NavbarBrand
                    className="uh-navBrand"
                    href="/"
                >
                    <h1>brand</h1>
                    <span>Design</span>
                </NavbarBrand>
                <Nav className="uh-nav">
                    <NavItem>
                        <NavLink>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            2
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            3
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </Fragment>
    );
};

export default Header;
