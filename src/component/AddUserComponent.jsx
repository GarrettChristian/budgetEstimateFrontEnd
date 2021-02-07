import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

class AddUserComponent extends Component {

constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            passwordConfirm: '',
            showErrorMessage: false,
            errorMessage: 'Error Creating Your Account'
        }

        this.handleChange = this.handleChange.bind(this)
        this.createClicked = this.createClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    createClicked() {

        var account = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        AuthenticationService
            .creatAccount(account)
            .then((response) => {
                if (response.data.success) {
                    this.setState({ showErrorMessage: false })
                    this.login()
                } else {
                    this.setState({ showErrorMessage: true })
                    this.setState({errorMessage: "Account creation failed"})
                }
                
            }).catch(() => {
                this.setState({ showErrorMessage: true })
                this.setState({errorMessage: "Account creation failed"})
            })
    }

    login() {
        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
            this.props.history.push(`/shows`)
        }).catch(() => {
            this.setState({ showErrorMessage: true })
            this.setState({errorMessage: "Account creation failed to login"})
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={2}/>

                    <Col className="mt-5 border-custom">
                        <h2>Create Account</h2>
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

                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                must not contain spaces, special characters, or emoji.
                            </Form.Text>

                        </Form>

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.createClicked}>Submit</button>

                        { this.state.showErrorMessage && // Account creation error
                        <div class="alert alert-warning" role="alert">{this.state.errorMessage}</div>
                        }

                    </Col>

                    <Col sm={2}/>
                </Row>
            </Container>
        )
    }
}

export default AddUserComponent