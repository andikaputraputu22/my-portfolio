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
    
    let projectList = []
    let dataProject = [
        {
            photo: "info_vaksinasi.PNG",
            title: "Info Vaksinasi",
            description: "A simple website, that shows information about vaccination in Indonesia.",
            link: "https://info-vaksinasi-indonesia.vercel.app/",
            tag: ["React", "Web"],
            type: 0
        },
        {
            photo: "personal_website.PNG",
            title: "Personal Website",
            description: "My personal website. An easiest way to introduce myself to you and the world.",
            link: "https://andika-portfolio.vercel.app/",
            tag: ["React", "Web"],
            type: 0
        },
        {
            photo: "rsbedinfo_banner.jpg",
            title: "Hospital Information App",
            description: "A mobile application that help you to find out hospital information in Indonesia.",
            link: "https://drive.google.com/file/d/1_VSZdE82O7dXQU9SY8gLt_uqRxJ6F2-Y/view?usp=sharing",
            tag: ["Android", "Kotlin", "Mobile"],
            type: -1
        },
        {
            photo: "aguadigi_banner.jpg",
            title: "Water Usage Monitoring App",
            description: "A mobile application that can help you to monitor water usage and water bills.",
            link: "#",
            tag: ["Android", "Kotlin", "Mobile"],
            type: 1
        },
        {
            photo: "eticket_banner.jpg",
            title: "Ticketing App",
            description: "A mobile application that can help you to order tickets for the tourism object.",
            link: "#",
            tag: ["Android", "Java", "Mobile"],
            type: 1
        },
        {
            photo: "spkt_banner.jpg",
            title: "Online Permission App",
            description: "A mobile application that can help you to request a document according to your needs.",
            link: "#",
            tag: ["Android", "Java", "Mobile"],
            type: 1
        },
        {
            photo: "tbm_banner.jpg",
            title: "Tour App",
            description: "A mobile application that can help you to create your tour plan in Bali easily.",
            link: "#",
            tag: ["IOS", "Swift", "Mobile"],
            type: 1
        }
    ]

    dataProject.forEach((item, index) => {
        projectList.push(
            <Col lg="4">
                <Card className="card-lift--hover border-0 portfolio-card card-bottom-spacing">
                    <CardBody className="py-5">
                        <img
                            className="img-fluid rounded portfolio-img mb-4"
                            src={`/images/${item.photo}`}
                            alt={item.title}
                        />
                        <h6 className="text-uppercase portfolio-title">{item.title}</h6>
                        <p className="description mt-3">{item.description}</p>
                        <div>
                            {item.tag.map((item, index) => {
                                return <Badge color="primary" pill className="mr-1">{item}</Badge>
                            })}
                        </div>
                        <Button disabled={item.type === 1 ? true : false} className="mt-4" color="primary" href={item.link} target="_blank">
                            {item.type === 0 ? "Show Demo" : item.type === -1 ? "Try Demo" : "Owned by Client"}
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        )
    })

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
                            {projectList}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projectnya;