import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class LogoutComponent extends Component {
    render() {
        return (
            <Container className="mt-3">
                <Row>
                    <h1>You are logged out</h1>
                </Row>
                    
                <Row>
                    <p>Thank You for Using The Budget Tracker.</p>
                </Row>
            </Container>
        )
    }
}

export default LogoutComponent