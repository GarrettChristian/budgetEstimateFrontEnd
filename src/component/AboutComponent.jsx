import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AboutComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log('render')
        return (
            <Container className="mt-3">

                <h1>About</h1>
                <p className="ml-3 text-wrap">Created By: Garrett Christian</p>

                <h2>Why</h2>
                <Col className="ml-3 text-wrap">
                    <Row>
                        <p>
                            Created for my James Madison University theater independent study course with Professor Smallwood. 
                            The course's goal was to explore how the 
                            software engineering development cycle can be applied to a 
                            theater problem. Specifically to create an application for tracking worker hours on theatrical projects.
                        </p>
                    </Row>
                </Col>

                <h2>Where to find the code</h2>
                <Col className="ml-3 text-wrap">
                    <Row>
                        <Col sm={2}>
                            <p>Front End:</p>
                        </Col>
                        <Col sm={10}>
                            <a className="text-wrap" href="https://github.com/GarrettChristian/budget_estimate_front_end">
                            https://github.com/GarrettChristian/budget_estimate_front_end</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <p>Back End:</p>
                        </Col>
                        <Col sm={10}>
                            <a href="https://github.com/GarrettChristian/BudgetEstimate">
                            https://github.com/GarrettChristian/BudgetEstimate</a>
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default AboutComponent