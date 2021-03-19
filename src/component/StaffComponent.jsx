import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import Form from 'react-bootstrap/Form'
import ProjectService from '../service/ProjectService.jsx'

class StaffComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            staff: [],
            showModal: false,
            username: '',
            owner: false,
            errorMessage: '',
            showErrorMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.refreshStaff = this.refreshStaff.bind(this)
        this.toggle = this.toggle.bind(this);
        this.addStaffClicked = this.addStaffClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
        console.log(this.state.username)
    }

    componentDidMount() {
        this.refreshStaff();
    }

    refreshStaff() {
        ProjectService.retrieveStaff(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ staff: response.data })
                }
            )
    }

    addStaffClicked() {
        console.log("add staff")
        ProjectService.addStaffToProject(this.state.username, 
            this.props.match.params.id, 
            this.state.owner)
            .then((response) => {
                if (response.data.success) {
                    this.refreshStaff();
                    this.setState({showModal: !this.state.showModal});
                    console.log("added staff successfully")
                    this.setState({ showErrorMessage: false })
                } else {
                    console.log("failed to add staff")
                    this.setState({ showErrorMessage: true })
                    this.setState({errorMessage: "Failed to Add Staff"})
                }
                
            }).catch(() => {
                console.log("error adding staff")
                this.setState({ showErrorMessage: true })
                this.setState({errorMessage: "Error Adding Staff"})
            })
    }

    toggle() {
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        return (
            <Container className="mt-3">
                
                <h2 className="border-bottom-custom">Staff</h2>

                {this.props.location.state.owner && 
                <Row className="mt-3">
                    <Col xs={2}/>
                    <Col>
                        <Button block onClick={this.toggle}>Add User to Show</Button>
                    </Col>
                    <Col xs={2}/>
                </Row>
                }

                <Modal show={this.state.showModal}>
                    <ModalHeader closeButton onClick={this.toggle}>
                    <ModalTitle>Add User</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                            name="username" value={this.state.username}
                            onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Project Owner?"
                            name="owner" value={this.state.owner}
                            onChange={this.handleChange}/>
                        </Form.Group>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                    <Button variant="secondary" onClick={this.toggle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.addStaffClicked}>
                        Add User!
                    </Button>
                    </ModalFooter>
                </Modal>

                <Table className="mt-3" striped bordered hover>
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.staff.map(
                            staff =>
                            <tr>
                            <td>{staff.username}</td>
                            <td>{(staff.owner ? 'Project Owner' : 'Staff Member')}</td>                       
                            </tr>
                        )
                    } 
                </tbody>
                </Table>

            </Container>
        )
    }
}

export default StaffComponent