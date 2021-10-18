import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import Footernya from "./Footernya";

const Contactnya = () => {
    return (
        <section className="section section-lg bg-gradient-default custom-contact">
            <Container>
                <Row className="justify-content-center text-center mb-md">
                    <Col lg="8">
                        <h2 className="display-3 text-white">Contact Me</h2>
                        <p className="lead text-white">
                            Of course, we can work together.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center row-grid align-items-center">
                    <Col lg="10">
                        <Row className="justify-content-center">
                            <Col lg="6" md="6">
                                <h4 className="text-white">Contact Info</h4>
                                <div className="mt-5">
                                    <h6 className="text-white"><b>Email Address</b></h6>
                                    <p className="text-white">andikaputraputu22@gmail.com</p>
                                </div>
                                <div className="mt-4">
                                    <h6 className="text-white"><b>Phone Number</b></h6>
                                    <p className="text-white">(+62) 81339891936</p>
                                </div>
                                <div className="mt-4">
                                    <h6 className="text-white"><b>Location</b></h6>
                                    <p className="text-white">Denpasar, Bali - Indonesia</p>
                                </div>
                            </Col>
                            <Col lg="6" md="6" className="form-wrapper">
                                <Card className="bg-gradient-secondary shadow">
                                    <CardBody className="p-lg-5">
                                        <h4 className="mb-1">Want to work with me?</h4>
                                        <p className="mt-0">
                                            Please feel free to contact me.
                                        </p>
                                        <form className="mt-5">
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    placeholder="Your name"
                                                    type="text"
                                                    required
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    placeholder="Your email"
                                                    type="email"
                                                    required
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    placeholder="Type a message"
                                                    type="textarea"
                                                    rows="4"
                                                    required
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="submit"
                                                    >Send Message
                                                </Button>
                                            </div>
                                        </form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footernya />
        </section>
    )
}

export default Contactnya;