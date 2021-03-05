import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ProjectService from '../service/ProjectService.jsx'

class SummaryComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            project: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    componentDidMount() {
        this.refreshProjects();
    }

    refreshProjects() {
        ProjectService.retrieveProject(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ project: response.data })
                }
            )
    }

    render() {
        return (
            <Container className="mt-3">
                <h2>Project {this.state.project.name}</h2>
            </Container>
        )
    }
}

export default SummaryComponent