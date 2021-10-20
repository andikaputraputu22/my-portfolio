import axios from "axios";
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Input,
    Button,
    Alert,
    Spinner
} from 'reactstrap';
import Footernya from "./Footernya";

const Contactnya = () => {
    const [message, setMessage] = useState({name: "",
                                            email: "",
                                            message: ""})

    const onChangeValue = (e) => {
        setMessage({...message, [e.target.name] : e.target.value})
    }

    const sendMessage = (e) => {
        e.preventDefault()
        
        const alert = document.querySelector('#my-alert')
        const spinner = document.querySelector('#my-spinner')
        const sendBtn = document.querySelector('#my-button')
        const url = 'https://script.google.com/macros/s/AKfycbwZWj2zG3ohXepVPKAFC8srlS9PGkpgHghIbbZi1wgtix0W3KCxCvyuWD7fnF6WiifDQA/exec'
        const form = document.forms['form-contact']
        
        var dataForm = new FormData()
        for (var key in message) {
            dataForm.append(key, message[key])
        }
        
        sendBtn.classList.toggle('d-none')
        spinner.classList.toggle('d-none')
        alert.classList.add('d-none')

        // //Using fetch
        // fetch(url, { method: 'POST', body: dataForm})
        //   .then(response => console.log('Success!', response))
        //   .catch(error => console.error('Error!', error.message))

        //Using axios
        axios.post(url, dataForm).then((response) => {
            sendBtn.classList.toggle('d-none')
            spinner.classList.toggle('d-none')
            alert.classList.toggle('d-none')
            form.reset()
        })
    }

    return (
        <section id="section_contact" className="section section-lg bg-gradient-default custom-contact">
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
                                        <form className="mt-5" name="form-contact" onSubmit={sendMessage}>
                                            <Alert id="my-alert" className="d-none" color="success">Your message was sent successfully.</Alert>
                                            <FormGroup>
                                                <Input
                                                    name="name"
                                                    className="form-control-alternative"
                                                    placeholder="Your name"
                                                    type="text"
                                                    required
                                                    onChange={onChangeValue}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    name="email"
                                                    className="form-control-alternative"
                                                    placeholder="Your email"
                                                    type="email"
                                                    required
                                                    onChange={onChangeValue}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    name="message"
                                                    className="form-control-alternative"
                                                    placeholder="Type a message"
                                                    type="textarea"
                                                    rows="4"
                                                    required
                                                    onChange={onChangeValue}
                                                />
                                            </FormGroup>
                                            <div className="justify-content-center text-center">
                                                <Button
                                                    id="my-button"
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="submit"
                                                    >Send Message
                                                </Button>
                                                <Spinner id="my-spinner" color="primary" className="d-none" />
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