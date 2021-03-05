import React, { Component } from 'react'
import ProjectService from '../service/ProjectService';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddProjectComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            projectName: '',
            venue: '',
            writer: '',
            director: '',
            designer: '',
            technicalDirector: '',
            estimateType: '',
            passwordConfirm: '',
            showErrorMessage: false,
            errorMessage: 'Error Creating the Project'
        }

        this.handleChange = this.handleChange.bind(this)
        this.createClicked = this.createClicked.bind(this)
        this.cancelClicked = this.cancelClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    createClicked() {
        console.log("creating?")

        var project = {
            name: this.state.projectName,
            venue: this.state.venue,
            writer: this.state.writer,
            director: this.state.director,
            designer: this.state.designer,
            technicalDirector: this.state.technicalDirector,
            estimateType: this.state.estimateType
        }

        console.log(project)

        ProjectService
            .createNewProject(project)
            .then((response) => {
                if (response.data.success) {
                    console.log("project success")
                    this.setState({ showErrorMessage: false })
                    this.props.history.push('/projects')
                } else {
                    console.log("project failed :(")
                    this.setState({ showErrorMessage: true })
                    this.setState({errorMessage: "Project creation failed"})
                }
                
            }).catch(() => {
                this.setState({ showErrorMessage: true })
                this.setState({errorMessage: "Project creation failed"})
            })
    }

    cancelClicked() {
        this.props.history.push('/projects')
    }

    render() {
        return (
            <Container className="mt-3">

                <Row>
                    <Col xs={1}/>

                    <Col md={10}>
                        <h2>Create New Project</h2>

                        {/* Project Name */}
                        <Form>
                            <Form.Group as={Row} controlId="projectName">
                                <Form.Label column sm={2}>Project Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Project Name"
                                    name="projectName" value={this.state.projectName} onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group controlId="estimateType">
                                        <Form.Label>Estimate Type</Form.Label>
                                        <Form.Control type="text" placeholder="Scenic" 
                                        name="estimateType" value={this.state.estimateType} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId="venue">
                                        <Form.Label>Venue</Form.Label>
                                        <Form.Control type="text" placeholder="Venue" 
                                        name="venue" value={this.state.venue} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                    
                            <Row>
                                <Col>
                                    <Form.Group controlId="director">
                                        <Form.Label>Director</Form.Label>
                                        <Form.Control type="text" placeholder="Director" 
                                        name="director" value={this.state.director} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId="writer">
                                        <Form.Label>Writer</Form.Label>
                                        <Form.Control type="text" placeholder="Writer" 
                                        name="writer" value={this.state.writer} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                    
                            <Row>
                                <Col>
                                    <Form.Group controlId="designer">
                                        <Form.Label>Designer</Form.Label>
                                        <Form.Control type="text" placeholder="Designer" 
                                        name="designer" value={this.state.designer} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId="technicalDirector">
                                        <Form.Label>Technical Director</Form.Label>
                                        <Form.Control type="text" placeholder="Technical Director" 
                                        name="technicalDirector" value={this.state.technicalDirector} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        
                            <Row>
                                <Col>
                                    <Button type="cancel" variant="secondary" block onClick={this.cancelClicked}>Cancel</Button>
                                </Col>
                                <Col xs={4}/>
                                <Col>
                                    <Button type="submit" block onClick={this.createClicked}>Create</Button>
                                </Col>
                            </Row>

                        </Form>

                        { this.state.showErrorMessage && // show creation error
                        <div className="alert alert-warning" role="alert">{this.state.errorMessage}</div>
                        }

                    </Col>
                    <Col xs={1}/>
                </Row>
            </Container>
        )
    }
}

export default AddProjectComponent