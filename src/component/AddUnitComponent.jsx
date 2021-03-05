import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

class AddUnitComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

        this.handleChange = this.handleChange.bind(this)
    }

    cancelClicked() {
        this.props.history.goBack()
    }

    addClicked() {
        console.log("adding new unit from add unit compoenent ")
        this.props.history.goBack()
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    render() {
        return (
            <Container className="mt-3">

                <h2 className="border-bottom-custom">Add Unit</h2>

                <Form>
                            
                    {/* Name First and Last */}
                    <Row>
                        <Col>
                        <Form.Group controlId="formGroupFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" 
                            name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                        </Form.Group>
                        </Col>

                        <Col>
                        <Form.Group controlId="formGroupLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" 
                            name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        </Form.Group>
                        </Col>
                    </Row>

                    {/* Email */}
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" 
                        name="username" value={this.state.username} onChange={this.handleChange}/>
                    </Form.Group>

                    {/* Password  */}
                    <Row>
                        <Col>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                            name="password" value={this.state.password} onChange={this.handleChange}/>
                        </Form.Group>
                        </Col>

                        <Col>
                        <Form.Group controlId="formGroupPasswordConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" 
                            name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange}/>
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="secondary" block onClick={this.cancelClicked.bind(this)}>Cancel</Button>
                        </Col>
                        <Col xs={4}/>
                        <Col>
                            <Button block onClick={this.addClicked.bind(this)}>Add Unit</Button>
                        </Col>
                    </Row>

                </Form>

            </Container>
        )
    }
}

export default AddUnitComponent