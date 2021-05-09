import React, {Component} from 'react';
import Headroom from 'headroom.js';
import {
    Navbar,
    Container,
    NavbarBrand,
    UncontrolledCollapse,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

class Navbarnya extends Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        headroom.init();
    }

    state = {
        collapseClasses: "",
        collapseOpen: false,
        logo_title: "<MS/>"
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out"
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: ""
        });
    };
    
    render() {
        return (
            <div>
                <header className="header-global">
                    <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
                        <Container>
                            <NavbarBrand className="mr-lg-5">
                                <span className="desktop-logo">{this.state.logo_title}</span>
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <UncontrolledCollapse toggler="#navbar_global" navbar className={this.state.collapseClasses} onExiting={this.onExiting} onExited={this.onExited}>
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <span className="mobile-logo">{this.state.logo_title}</span>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <NavItem>
                                        <NavLink href="">
                                            <i className="fa fa-desktop d-lg-none mr-1" />
                                            <span className="nav-link-inner--text">Home</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                            <i className="fa fa-coffee d-lg-none mr-1" />
                                            <span className="nav-link-inner--text">About</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="">
                                            <i className="fa fa-tasks d-lg-none mr-1" />
                                            <span className="nav-link-inner--text">Projects</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink className="nav-link-icon" href="" target="_blank">
                                            <i className="fa fa-facebook-square" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Facebook
                                            </span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link-icon" href="" target="_blank">
                                            <i className="fa fa-instagram" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Instagram
                                            </span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link-icon" href="" target="_blank">
                                            <i className="fa fa-twitter-square" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Twitter
                                            </span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link-icon" href="" target="_blank">
                                            <i className="fa fa-github" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Github
                                            </span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="d-none d-lg-block ml-lg-4">
                                        <Button className="btn-neutral btn-icon" color="default" href="" target="_blank">
                                            <span className="btn-inner--icon">
                                                <i className="fa fa-address-book mr-2" />
                                            </span>
                                            <span className="nav-link-inner--text ml-1">
                                                Contact Me
                                            </span>
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </div>
        )
    }
}

export default Navbarnya;