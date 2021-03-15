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
            stuff: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.refreshUnits = this.refreshUnits.bind(this)
    }

    componentDidMount() {
        this.refreshUnits();
    }


    refreshUnits() {

        console.log("here??? " + this.props.match.params.id)

        ProjectService.retrieveUnitOverview(this.props.match.params.id)
        .then(
            response => {
                console.log(response)
                console.log(response.data)
                this.setState({totals: response.data})
                this.setState({units: response.data.units})
            }
        )

        // console.log("unit refreshing!")
        // console.log(unitOverview)
        // console.log(this.state.staff)

        // this.setState({units : unitOverview.units})
        // this.setState({totals : unitOverview})

        // var arry = []

        // var unit1 = {
        //     id: 1,
        //     name: "Flat 1",
        //     description: "fake desciription flat1",
        //     build: 2,
        //     buildComplete: 2,
        //     loadIn: 2,
        //     loadInComplete: 1,
        //     materials: 7,
        //     completion: Math.floor((2 + 1) / (2 + 2) * 100)
        // }
        // var unit2 = {
        //     id: 2,
        //     name: "Flat 2",
        //     description: "fake desciription flat2",
        //     build: 22,
        //     buildComplete: 12,
        //     loadIn: 22,
        //     loadInComplete: 0,
        //     materials: 72,
        //     completion: Math.floor((12 + 0) / (22 + 22) * 100)
        // }

        // arry.push(unit1)
        // arry.push(unit2)

        // this.setState({ units: arry })

        // var total = {
        //     build: 24.1,
        //     loadIn: 24.1,
        //     materials: 79.1
        // }

        // this.setState({ totals: total })
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    addUnitClicked() {
        // this.props.history.push(`/projects`)
        this.props.history.push({
            pathname: 'units/new',
            state: { unitId: 1},
        })
    }

    unitClicked(unit) {
        this.props.history.push({
            pathname: 'unit',
            state: { unitId: unit.id},
        })
    }

    render() {
        return (
            <Container className="mt-3">
                {/* <h2>{this.props.match.params.id}</h2>
                <h2>UNITS</h2>
                <Button onClick={this.addUnitClicked.bind(this)}>add new unit??</Button> */}
                {/* <ProgressBar className="mt-2" striped now={45} label={`${45}%`} /> */}
                
                <h2 className="border-bottom-custom">Project Units</h2>

                {/* Create New Unit Button */}
                <Row className="mt-3">
                    <Col xs={2}/>
                    <Col>
                        <Button block onClick={this.addUnitClicked.bind(this)}>Add a New Unit</Button>
                    </Col>
                    <Col xs={2}/>
                </Row>

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