import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ProjectService from '../service/ProjectService.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SummaryComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            project: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    componentDidMount() {
        this.refreshProjects();
    }

    refreshProjects() {
        ProjectService.retrieveProject(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ project: response.data })
                }
            )
    }

    render() {
        return (
            <Container className="mt-3">

                
                <h2>{this.state.project.name}</h2>

                <Row className="mt-2 border-bottom-custom">
                    <Col>
                        <h3>{this.state.project.estimateType} Estimate</h3>
                    </Col>
                    <Col>
                        <h3 className="text-right">{this.state.project.venue}</h3>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs={3}>
                        <h4>Written by: </h4>
                    </Col>
                    <Col>
                        <p>{this.state.project.writer}</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3}>
                        <h4>Director: </h4>
                    </Col>
                    <Col>
                        <p>{this.state.project.director}</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3}>
                        <h4>Set Designer: </h4>
                    </Col>
                    <Col>
                        <p>{this.state.project.designer}</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3}>
                        <h4>Technical Director: </h4>
                    </Col>
                    <Col>
                        <p>{this.state.project.technicalDirector}</p>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default SummaryComponent