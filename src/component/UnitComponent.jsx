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
            unit: '',
            loadInList: [],
            buildList: [],
            materials: [],
            owner: this.props.location.state.owner
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
                    this.setState({ loadInList:  response.data.subcomponents.filter(subcom => subcom.type === "LOAD IN")})
                    this.setState({ buildList:  response.data.subcomponents.filter(subcom => subcom.type === "BUILD")})
                    this.setState({ materials: response.data.materials })
                }
            )
    }

    deleteUnitClicked() {
        console.log("delete  clicked")
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
        
        console.log(this.state.owner)
        return (
            <Container className="mt-3">

                <h2 className="border-bottom-custom">{this.state.unit.name}</h2>

                <Row className="mt-3">
                    <Col xs={6}/>
                    {this.state.owner ? (
                    <Col xs={3}>
                        <Button block variant="danger" onClick={this.deleteUnitClicked.bind(this)}>Delete Unit</Button>
                    </Col> ) : (
                    <Col xs={3}/>
                    )}
                    <Col xs={3}>
                        <Button block variant="success" onClick={this.markAllFinishedClicked.bind(this)}>Mark All Finished</Button>
                    </Col>
                </Row>

                <h4 className="border-bottom-custom">Description</h4>
                <p>{this.state.unit.description}</p>

                <h4 className="border-bottom-custom">Build</h4>
                {this.state.buildList.map(
                        build =>
                        <p>Build {build.name}</p>
                    )
                }

                <h4 className="border-bottom-custom">Load in</h4>
                {this.state.loadInList.map(
                        loadIn =>
                        <>
                        <p>Load {loadIn.name}</p>
                        <p>work hours {loadIn.workHours}</p>
                        <p>number of crew {loadIn.numberOfCrew}</p>
                        <p>Description {loadIn.description}</p>
                        <p></p>
                        </>
                    )
                }

                <h4 className="border-bottom-custom">Materials</h4>
                {this.state.materials.map(
                        material =>
                        <>
                        <p>material {material.name}</p>
                        <p>material cost {material.cost}</p>
                        <p>material amount required {material.amountRequired}</p>
                        <p>vendor {material.vendor}</p>
                        </>
                    )
                } 
                

            </Container>
        )
    }
}

export default UnitComponent