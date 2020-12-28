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

import Header from "../components/header/Header";

const Home = () => {
    return (
        <Fragment>
            <Header/>
        </Fragment>
    );
};

export default Home;
