import React from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

const Heronya = () => {
    return (
        <div>
            <div className="position-relative">
                <section className="section section-hero section-shaped">
                    <div className="shape shape-style-1 shape-default">
                    </div>
                    <Container className="shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <Row className="align-items-center justify-content-center">
                                <Col className="text-center" lg="6">
                                    <h1 className="display-3 text-white">
                                        Hi Friends, Welcome{" "}
                                        <span>MoonlightSplitter's Portfolio</span>
                                    </h1>
                                    <p className="lead text-white">
                                        Nice to meet you. How are you today? It's a great day. Hope all of you have a great day too.
                                    </p>
                                    <div className="btn-wrapper mt-5">
                                        <Row>
                                            <Col lg="6" md="6" sm="12" xs="12" className="text-end">
                                                <Button
                                                    className="btn-white btn-icon mb-3 mb-sm-0"
                                                    color="default"
                                                    href="#section_contact"
                                                    size="lg"
                                                    style={{width: "100%"}}>
                                                    <span className="btn-inner--icon mr-1">
                                                        <i className="fa fa-address-book" />
                                                    </span>
                                                    <span className="btn-inner--text">Contact Me</span>
                                                </Button>
                                            </Col>
                                            <Col lg="6" md="6" sm="12" xs="12" className="text-start">
                                                <Button
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="github"
                                                    href="https://github.com/andikaputraputu22"
                                                    size="lg"
                                                    target="_blank"
                                                    style={{width: "100%"}}>
                                                    <span className="btn-inner--icon mr-1">
                                                        <i className="fa fa-github" />
                                                    </span>
                                                    <span className="btn-inner--text">Check My Github</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default Heronya;