import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

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
                <h2>{this.props.match.params.id}</h2>
                <h2>Add New UNIT</h2>
                <Button onClick={this.cancelClicked.bind(this)}>Cancel</Button>
                <Button onClick={this.addClicked.bind(this)}>Create it</Button>
            </Container>
        )
    }
}

export default AddUnitComponent