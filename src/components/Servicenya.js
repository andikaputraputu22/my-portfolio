import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const Servicenya = () => {
    return (
        <section className="section">
            <Container>
                <Row className="justify-content-center text-center mb-md">
                    <Col lg="8">
                        <h2 className="display-3">My Skills</h2>
                        <p className="lead text-muted">
                            You can find the skills you need to build your app.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center row-grid align-items-center">
                    <Col lg="8">
                    <Row className="justify-content-center text-center">
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-kotlin-plain"></i>
                                        <h3 className="heading custom-heading">Kotlin</h3>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-swift-plain"></i>
                                        <h3 className="heading custom-heading">Swift</h3>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-java-plain"></i>
                                        <h3 className="heading custom-heading">Java</h3>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-flutter-plain"></i>
                                        <h3 className="heading custom-heading">Flutter</h3>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-html5-plain"></i>
                                        <h3 className="heading custom-heading">Html</h3>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-css3-plain"></i>
                                        <h3 className="heading custom-heading">CSS</h3>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-javascript-plain"></i>
                                        <h3 className="heading custom-heading">Javascript</h3>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-laravel-plain"></i>
                                        <h3 className="heading custom-heading">Laravel</h3>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" className="col-skill">
                                    <div className="wrapper-skill">
                                        <i class="devicon-react-original"></i>
                                        <h3 className="heading custom-heading">React</h3>
                                    </div>
                                </Col>
                            </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Servicenya;