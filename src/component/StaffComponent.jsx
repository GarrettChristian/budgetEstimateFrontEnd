import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

class StaffComponent extends Component {

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

                
                <h2>Staff Page</h2>

            </Container>
        )
    }
}

export default StaffComponent