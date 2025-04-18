import React from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

const Aboutnya = () => {

    let data_about = "Android Developer with 6+ years of experience in designing, developing, and optimizing high-performance mobile applications. Proficient in Jetpack Compose, Kotlin, and modern Android development. Passionate about feature implementation, bug fixing, performance optimization, and ensuring seamless user experiences through efficient coding practices."

    return (
        <section id="section_about" className="section section-lg">
            <Container>
                <Row className="justify-content-center text-center mb-md">
                    <Col lg="8">
                        <h2 className="display-3">About Me</h2>
                        <p className="lead text-muted">
                            {data_about}
                        </p>
                    </Col>
                </Row>
                <Row className="row-grid align-items-center">
                    <Col lg="12" md="12" sm="12" xs="12">
                        <div className="px-4">
                            <img
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src="/images/photo_profile.jpg"
                                alt="Andika Putra"
                                style={{width: "200px"}}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">I Putu Andika Putra, S.Kom., BIT</span>
                                    <small className="h6 text-muted">Android Developer</small>
                                    <div className="h6 text-muted mt-1">Jakarta - Indonesia</div>
                                </h5>
                                <div className="mt-3">
                                    <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/andikaputraputu/" target="_blank">
                                        <i className="fa fa-linkedin" />
                                    </Button>
                                    <Button className="btn-icon-only rounded-circle ml-1" color="primary" href="https://www.facebook.com/profile.php?id=100032534376429" target="_blank">
                                        <i className="fa fa-facebook" />
                                    </Button>
                                    <Button className="btn-icon-only rounded-circle ml-1" color="primary" href="https://www.instagram.com/andikaputraputu/" target="_blank">
                                        <i className="fa fa-instagram" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Aboutnya;