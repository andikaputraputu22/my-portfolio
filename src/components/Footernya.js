import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Footernya = () => {
    return (
        <div>
            <footer className="footer custom-footer">
                <Container>
                    <hr/>
                    <Row className="align-items-center justify-content-md-between footer-content">
                        <Col md="6">
                            &copy; {new Date().getFullYear()}{" "}
                            <span>AndikaPutra</span>
                        </Col>
                        <Col md="6">
                            <Nav className="nav-footer justify-content-end">
                                <NavItem>
                                    <NavLink href="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#section_about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#section_project">
                                        Projects
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <ScrollToTop smooth />
        </div>
    )
}

export default Footernya;