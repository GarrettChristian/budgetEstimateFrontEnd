import React, { Component } from 'react'
import ProjectService from '../service/ProjectService';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SummaryComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    render() {
        return (
            <Container className="mt-3">
                <h2>{this.props.showId}</h2>
                <h2>SUMMARY</h2>
            </Container>
        )
    }
}

export default SummaryComponent