import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ProjectService from '../service/ProjectService.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class UnitComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            unit: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    // componentDidMount() {
    //     this.refreshProjects();
    // }

    // refreshUnit() {
    //     ProjectService.retrieveProject(this.props.match.params.id)
    //         .then(
    //             response => {
    //                 this.setState({ project: response.data })
    //             }
    //         )
    // }

    render() {
        return (
            <Container className="mt-3">

                
                <h2>Unit Page</h2>

            </Container>
        )
    }
}

export default UnitComponent