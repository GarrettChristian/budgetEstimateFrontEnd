import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {withRouter} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectService from '../service/ProjectService.jsx'

class UnitsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            units: [],
            totals: '',
            stuff: '',
            owner: this.props.location.state.owner,
            projectId: this.props.match.params.id
        }

        this.handleChange = this.handleChange.bind(this)
        this.refreshUnits = this.refreshUnits.bind(this)
    }

    componentDidMount() {
        this.refreshUnits();
    }


    refreshUnits() {
        console.log("Refershing this shows units " + this.state.projectId)

        ProjectService.retrieveUnitOverview(this.state.projectId)
        .then(
            response => {
                console.log(response)
                console.log(response.data)
                this.setState({totals: response.data})
                this.setState({units: response.data.units})
            }
        )
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    addUnitClicked() {
        this.props.history.push({
            pathname: 'units/new', 
            state: { unitId: 1},
        })
    }

    unitClicked(unit) {
        this.props.history.push({
            pathname: 'unit',
            state: { unitId: unit.id,
                owner: this.state.owner},
        })
    }

    render() {
        
        return (
            <Container className="mt-3">
                
                <h2 className="border-bottom-custom">Project Units</h2>

                {/* Create New Unit Button */}
                {this.state.owner && 
                <Row className="mt-3">
                    <Col xs={2}/>
                    <Col>
                        <Button block onClick={this.addUnitClicked.bind(this)}>Add a New Unit</Button>
                    </Col>
                    <Col xs={2}/>
                </Row>
                }

                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                        <th>Element</th>
                        <th>Build (Hours)</th>
                        <th>Load In (Hours)</th>
                        <th>Materials</th>
                        <th>Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.units.map(
                            unit =>
                            <tr onClick={this.unitClicked.bind(this, unit)}>
                            <th>{unit.name}</th>
                            <td>{unit.build}</td>
                            <td>{unit.loadIn}</td>
                            <td>${unit.materials}</td>
                            <td><ProgressBar striped now={unit.completion} label={`${unit.completion}%`} /></td>
                            </tr>
                        )
                    } 

                    <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <th>Totals</th>
                    <td>{this.state.totals.buildTotal}</td>
                    <td>{this.state.totals.loadInTotal}</td>
                    <td>${this.state.totals.materialsTotal}</td>
                    <td><ProgressBar striped now={this.state.totals.completion} label={`${this.state.totals.completion}%`} /></td>
                    </tr>
                    </tbody>
                </Table>

            </Container>
        )
    }
}

export default withRouter(UnitsComponent)