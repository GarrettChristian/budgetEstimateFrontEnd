import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ProjectService from '../service/ProjectService.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'

class SummaryComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            project: '',
            owner: false,
            showModal: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.toggle = this.toggle.bind(this);
        this.refreshOwner = this.refreshOwner.bind(this);
    }

    componentDidMount() {
        this.refreshProjects();
        this.refreshOwner();
    }

    refreshOwner() {
        ProjectService.isOwner(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ owner: response.data })
                }
            )
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    refreshProjects() {
        ProjectService.retrieveProject(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ project: response.data })
                }
            )
    }

    deleteProjectClicked() {
        ProjectService
        .deleteProject(this.props.match.params.id)
        .then((response) => {
            if (response.data.success) {
                console.log("Project was deleted successfully")
                this.props.history.push('/projects')
                
            } else {
                console.log("Project was not deleted succuessfully")
            }
            
        }).catch(() => {
            console.log("Project delete failed")
        }) 
    }

    toggle() {
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        return (
            <Container className="mt-3">

                <Col>
                    <Row className="border-bottom-custom">
                        <Col>
                            <h2>{this.state.project.name}</h2>

                            {/* <Row className="mt-2 border-bottom-custom"> */}
                                {/* <Col> */}
                                    {/* <h3>{this.state.project.estimateType} Estimate</h3> */}
                                {/* </Col> */}
                                {/* <Col> */}
                                    {/* <h3 className="text-right">{this.state.project.venue}</h3> */}
                                {/* </Col> */}
                            {/* </Row> */}

                            <h3>{this.state.project.venue} : {this.state.project.estimateType} Estimate</h3>
                        </Col>
                        {this.state.owner ? (
                        <>
                        <Col xs={3}>
                            <Button block variant="danger" onClick={this.toggle}>Delete Project</Button>
                        </Col>
                                            
                        <Modal show={this.state.showModal}>
                            <ModalHeader closeButton onClick={this.toggle}>
                            <ModalTitle>Delete Project</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                Are you sure you want to delete {this.state.project.name}?
                            </ModalBody>
                            <ModalFooter>
                            <Button variant="secondary" onClick={this.toggle}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={this.deleteProjectClicked.bind(this)}>
                                Delete Project
                            </Button>
                            </ModalFooter>
                        </Modal>
                        </>
                        
                        ) : (
                        <Col xs={3}/>
                        )}
                    </Row>

                    <Row className="mt-2">
                        <Col xs={4}>
                            <h4>Written by: </h4>
                        </Col>
                        <Col>
                            <p>{this.state.project.writer}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <h4>Director: </h4>
                        </Col>
                        <Col>
                            <p>{this.state.project.director}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <h4>Set Designer: </h4>
                        </Col>
                        <Col>
                            <p>{this.state.project.designer}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <h4>Technical Director: </h4>
                        </Col>
                        <Col>
                            <p>{this.state.project.technicalDirector}</p>
                        </Col>
                    </Row>
                </Col>

            </Container>
        )
    }
}

export default SummaryComponent