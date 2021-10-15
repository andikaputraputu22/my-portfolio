import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    Button
} from 'reactstrap';

const Projectnya = () => {
    return (
        <section id="section_project" className="section section-lg">
            <Container>
                <Row className="justify-content-center text-center mb-md">
                    <Col lg="8">
                        <h2 className="display-3">Portfolio</h2>
                        <p className="lead text-muted">
                            My personal project, made with love.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <Row className="row-grid">
                            <Col lg="4">
                                <Card className="card-lift--hover border-0 portfolio-card">
                                    <CardBody className="py-5">
                                        <img
                                            className="img-fluid rounded portfolio-img mb-4"
                                            src="/images/info_vaksinasi.png"
                                            alt="Info Vaksinasi Indonesia"
                                        />
                                        <h6 className="text-uppercase portfolio-title">Info Vaksinasi</h6>
                                        <p className="description mt-3">
                                            A simple website, that shows information about vaccination in Indonesia.
                                        </p>
                                        <div>
                                            <Badge color="primary" pill className="mr-1">
                                                React
                                            </Badge>
                                        </div>
                                        <Button className="mt-4" color="primary" href="https://info-vaksinasi-indonesia.vercel.app/" target="_blank">
                                            Show Demo
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover border-0 portfolio-card">
                                    <CardBody className="py-5">
                                        <img
                                            className="img-fluid rounded portfolio-img mb-4"
                                            src="/images/personal_website.png"
                                            alt="Info Vaksinasi Indonesia"
                                        />
                                        <h6 className="text-uppercase portfolio-title">Personal Website</h6>
                                        <p className="description mt-3">
                                            My personal website. An easiest way to introduce myself to you and the world.
                                        </p>
                                        <div>
                                            <Badge color="primary" pill className="mr-1">
                                                React
                                            </Badge>
                                        </div>
                                        <Button className="mt-4" color="primary" href="https://andika-portfolio.vercel.app/" target="_blank">
                                            Show Demo
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projectnya;