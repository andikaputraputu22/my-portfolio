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
                                <Card className="card-lift--hover border-0 portfolio-card card-bottom-spacing">
                                    <CardBody className="py-5">
                                        <img
                                            className="img-fluid rounded portfolio-img mb-4"
                                            src="/images/info_vaksinasi.PNG"
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
                                            <Badge color="primary" pill className="mr-1">
                                                Web
                                            </Badge>
                                        </div>
                                        <Button className="mt-4" color="primary" href="https://info-vaksinasi-indonesia.vercel.app/" target="_blank">
                                            Show Demo
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover border-0 portfolio-card card-bottom-spacing">
                                    <CardBody className="py-5">
                                        <img
                                            className="img-fluid rounded portfolio-img mb-4"
                                            src="/images/personal_website.PNG"
                                            alt="My Personal Website"
                                        />
                                        <h6 className="text-uppercase portfolio-title">Personal Website</h6>
                                        <p className="description mt-3">
                                            My personal website. An easiest way to introduce myself to you and the world.
                                        </p>
                                        <div>
                                            <Badge color="primary" pill className="mr-1">
                                                React
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Web
                                            </Badge>
                                        </div>
                                        <Button className="mt-4" color="primary" href="https://andika-portfolio.vercel.app/" target="_blank">
                                            Show Demo
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover border-0 portfolio-card card-bottom-spacing">
                                    <CardBody className="py-5">
                                        <img
                                            className="img-fluid rounded portfolio-img mb-4"
                                            src="/images/rsbedinfo_banner.jpg"
                                            alt="Hospital Information App"
                                        />
                                        <h6 className="text-uppercase portfolio-title">Hospital Information App</h6>
                                        <p className="description mt-3">
                                            A mobile application that help you to find out hospital information in Indonesia.
                                        </p>
                                        <div>
                                            <Badge color="primary" pill className="mr-1">
                                                Android
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Kotlin
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Mobile
                                            </Badge>
                                        </div>
                                        <Button className="mt-4" color="primary" href="https://drive.google.com/file/d/1_VSZdE82O7dXQU9SY8gLt_uqRxJ6F2-Y/view?usp=sharing" target="_blank">
                                            Try Demo
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover border-0 portfolio-card card-bottom-spacing">
                                    <CardBody className="py-5">
                                        <img
                                            className="img-fluid rounded portfolio-img mb-4"
                                            src="/images/aguadigi_banner.jpg"
                                            alt="Water Usage Monitoring App"
                                        />
                                        <h6 className="text-uppercase portfolio-title">Water Usage Monitoring App</h6>
                                        <p className="description mt-3">
                                            A mobile application that can help you to monitor water usage and water bills.
                                        </p>
                                        <div>
                                            <Badge color="primary" pill className="mr-1">
                                                Android
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Kotlin
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Mobile
                                            </Badge>
                                        </div>
                                        <Button disabled className="mt-4" color="primary" href="#">
                                            Owned by Client
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover border-0 portfolio-card card-bottom-spacing">
                                    <CardBody className="py-5">
                                        <img
                                            className="img-fluid rounded portfolio-img mb-4"
                                            src="/images/eticket_banner.jpg"
                                            alt="Ticketing App"
                                        />
                                        <h6 className="text-uppercase portfolio-title">Ticketing App</h6>
                                        <p className="description mt-3">
                                            A mobile application that can help you to order tickets for the tourism object.
                                        </p>
                                        <div>
                                            <Badge color="primary" pill className="mr-1">
                                                Android
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Java
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Mobile
                                            </Badge>
                                        </div>
                                        <Button disabled className="mt-4" color="primary" href="#">
                                            Owned by Client
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover border-0 portfolio-card card-bottom-spacing">
                                    <CardBody className="py-5">
                                        <img
                                            className="img-fluid rounded portfolio-img mb-4"
                                            src="/images/spkt_banner.jpg"
                                            alt="Online Permission App"
                                        />
                                        <h6 className="text-uppercase portfolio-title">Online Permission App</h6>
                                        <p className="description mt-3">
                                            A mobile application that can help you to request a document according to your needs.
                                        </p>
                                        <div>
                                            <Badge color="primary" pill className="mr-1">
                                                Android
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Java
                                            </Badge>
                                            <Badge color="primary" pill className="mr-1">
                                                Mobile
                                            </Badge>
                                        </div>
                                        <Button disabled className="mt-4" color="primary" href="#">
                                            Owned by Client
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