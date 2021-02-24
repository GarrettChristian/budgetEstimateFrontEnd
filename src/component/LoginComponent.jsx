import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            showErrorMessage: false,
            errorMessage: 'Login Error'
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        // if(this.state.username==='user' && this.state.password==='password'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.setState({showSuccessMessage:true})
        //     this.setState({hasLoginFailed:false})
        // }
        // else {
        //      this.setState({showSuccessMessage:false})
        //      this.setState({hasLoginFailed:true})
        // }
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                console.log("here???")
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                console.log("here 22???")
                this.props.history.push(`/projects`)
                console.log("here 23???")
            }).catch(() => {
                this.setState({ showErrorMessage: true })
                this.setState({ errorMessage: 'Login Error' })
            })
    }

    render() {
        return (
            <Container>

                <Row>
                    <Col xs={3}/>

                    <Col className="mt-5 border-custom">
                        <h2>Login</h2>

                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                name="username" value={this.state.username} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                name="password" value={this.state.password} onChange={this.handleChange}/>
                            </Form.Group>
                        </Form>

                        <Button variant="primary" size="md" block onClick={this.loginClicked}>Submit</Button>

                        <p className="forgot-password text-right">
                            <a href="new/user/">Create Account</a>
                        </p>

                        { this.state.showErrorMessage && // login error message
                        <div className="alert alert-warning" role="alert">{this.state.errorMessage}</div>
                        }

                    </Col>

                    <Col xs={3}/>
                </Row>
                
            </Container>

        )
    }
}

export default LoginComponent