import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import AuthenticationService from '../service/AuthenticationService'

class NavigationBar extends Component{
    constructor(props) {
        super(props)
        this.state = {}
        this.getName = this.getName.bind(this)
    }

    getName() {
        AuthenticationService.getLoggedInUsersNameFirstLast()
            .then(
                response => {
                    this.setState({ name: response.data })
                }
            )
    }

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return(
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Budget Tracker</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Productions</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                
                
                    {!isUserLoggedIn && // not logged in 
                        <Navbar.Collapse className="justify-content-end">
                        <Row>
                            <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/new/user">Create Account</Nav.Link>
                            </Nav>
                        </Row>
                        </Navbar.Collapse>}
                    {isUserLoggedIn && // logged in
                        <Navbar.Collapse className="justify-content-end">
                        <Row>
                            <Nav className="mr-auto">
                            <Navbar.Text>
                            Signed in as: <a href="/login">{AuthenticationService.getLoggedInUserName}</a>
                            </Navbar.Text>
                        
                            <Nav.Link href="/logout" onClick={AuthenticationService.logout}>
                                Logout</Nav.Link>
                            </Nav>
                        </Row>
                        </Navbar.Collapse>
                    }
                
            </Navbar>
            </>
        )
    }
}

export default NavigationBar