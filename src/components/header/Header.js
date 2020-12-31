import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import {IoIosMenu} from 'react-icons/io';
import MobileMenu from "./elements/MobileMenu";

import img from '../../assets/images/header.jpg'

const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (

        <Fragment>
            <header>
                <div
                    className="uh-slider"
                >
                    <Container className="full">
                        <div
                            className="uh-slider__wrapper"
                            style={{
                                backgroundColor: "black"
                            }}
                        >
                            <div
                                className="uh-slider__slide bg-img"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <Container className="h-100">

                                </Container>
                            </div>

                            <Container className="full">
                                <div className="d-flex align-items-center">
                                    <Col lg={2}>
                                        <div className="text-center">
                                            <Link to="/">
                                                logo
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={10}>

                                        <div
                                            className="uh-nav d-none d-lg-block"
                                            style={{
                                                textAlign:"center"
                                            }}>
                                            <ul
                                                style={{
                                                    display: "inline-block",
                                                    width: "100%"
                                                }}
                                            >
                                                <li style={{display: "inline-block", width: "20%"}}>
                                                    <Link to="/">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li style={{display: "inline-block", width: "20%"}}>
                                                    <Link to="/">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li style={{display: "inline-block", width: "20%"}}>
                                                    <Link to="/">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li style={{display: "inline-block", width: "20%"}}>
                                                    <Link to="/">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li style={{display: "inline-block", width: "20%"}}>
                                                    <Link to="/">
                                                        Home
                                                    </Link>
                                                </li>
                                            </ul>
                                            {/*<Row className="">*/}
                                            {/*    <Col lg={3}>*/}
                                            {/*        <Link to="/">*/}
                                            {/*            home*/}
                                            {/*        </Link>*/}

                                            {/*    </Col>*/}
                                            {/*    <Col lg={3}>*/}
                                            {/*        <Link to="/">*/}
                                            {/*            cat1*/}
                                            {/*        </Link>*/}

                                            {/*    </Col>*/}
                                            {/*    <Col lg={3}>*/}
                                            {/*        <Link to="/">*/}
                                            {/*            cat2*/}
                                            {/*        </Link>*/}

                                            {/*    </Col>*/}
                                            {/*    <Col lg={3}>*/}
                                            {/*        <Link to="/">*/}
                                            {/*            cat3*/}
                                            {/*        </Link>*/}

                                            {/*    </Col>*/}
                                            {/*</Row>*/}
                                        </div>
                                        <div className="d-block d-lg-none">
                                            <ul>
                                                <li style={{textAlign: "right"}}>
                                                    <button
                                                        onClick={() => setIsOpenMenu(true)}
                                                        className="uh-button"
                                                        style={{fontSize: "60px"}}
                                                    >
                                                        <IoIosMenu/>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                    </Col>
                                </div>
                            </Container>
                        </div>
                    </Container>
                </div>
            </header>

            <MobileMenu
                activeStatus={isOpenMenu}
                getActiveStatus={setIsOpenMenu}
            />
        </Fragment>


    );
};

export default Header;
