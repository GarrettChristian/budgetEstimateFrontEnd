import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ProjectService from '../service/ProjectService.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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

    componentDidMount() {
        this.refreshUnit();
    }

    refreshUnit() {
        ProjectService.retrieveUnit(this.props.location.state.unitId, this.props.match.params.id)
            .then(
                response => {
                    this.setState({ unit: response.data })
                }
            )
    }

    deleteUnitClicked() {
        console.log("delete clicked")
        this.props.history.goBack()
    }

    markAllFinishedClicked() {
        console.log("edit clicked")
        // this.props.history.push(`/projects`)
        // this.props.history.push({
        //     pathname: 'units/new',
        //     state: { unitId: 1},
        // })
    }

    render() {
        return (
            <Container className="mt-3">

                
                <h2 className="border-bottom-custom">Unit Page</h2>

                <Row className="mt-3">
                    <Col xs={8}/>
                    <Col xs={2}>
                        <Button block variant="success" onClick={this.markAllFinishedClicked.bind(this)}>Mark All Finished</Button>
                    </Col>
                    <Col xs={2}>
                        <Button block variant="danger" onClick={this.deleteUnitClicked.bind(this)}>Delete Unit</Button>
                    </Col>
                </Row>

                

            </Container>
        )
    }
}

export default UnitComponent