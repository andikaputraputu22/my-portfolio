import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const Experiencenya = () => {
    return (
        <section className="section section-lg bg-secondary">
            <Container>
                <Row className="justify-content-center text-center mb-md">
                    <Col lg="8">
                        <h2 className="display-3">My Experience</h2>
                        <p className="lead">
                            Experiences will keep you relaxed in facing all conditions.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col lg="10" className="timeline-wrapper">
                        <div className="timeline">
                            <ul>
                                <li>
                                    <div className="timeline-content">
                                        <span className="date">2018 - Present</span>
                                        <h2>Appkey Indonesia</h2>
                                        <span className="role">Frontend Developer</span>
                                        <p>With responsibility and wholeheartedly as a Frontend Developer. Especially for mobile applications.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-content">
                                        <span className="date">2017 (College Time)</span>
                                        <h2>Telkom Indonesia</h2>
                                        <span className="role">System Analyst</span>
                                        <p>Internship in one of the biggest IT companies in Indonesia. Experienced in analyzing their system as a final project.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experiencenya;