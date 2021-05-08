import React, {Component} from 'react';
import {
    Navbar,
    Container,
    NavbarBrand
} from 'reactstrap';

class Navbarnya extends Component {
    render() {
        return (
            <div>
                <header className="header-global">
                    <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
                        <Container>
                            <NavbarBrand>
                                <span>Andika.</span>
                            </NavbarBrand>
                        </Container>
                    </Navbar>
                </header>
            </div>
        )
    }
}

export default Navbarnya;