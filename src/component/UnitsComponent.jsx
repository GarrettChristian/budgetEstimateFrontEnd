import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {withRouter} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'

class UnitsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            units: [],
            totals: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.refreshUnits = this.refreshUnits.bind(this)
    }

    componentDidMount() {
        this.refreshUnits();
    }

    refreshUnits() {
        console.log("units refreshing!")

        var arry = []

        var unit1 = {
            name: "Flat 1",
            description: "fake desciription flat1",
            build: 2,
            loadIn: 2,
            materials: 7,
            completion: 45
        }
        var unit2 = {
            name: "Flat 2",
            description: "fake desciription flat2",
            build: 22,
            loadIn: 22,
            materials: 72,
            completion: 70
        }

        arry.push(unit1)
        arry.push(unit2)

        this.setState({ units: arry })

        var total = {
            build: 24.1,
            loadIn: 24.1,
            materials: 79.1
        }

        this.setState({ totals: total })
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

    render() {
        return (
            <Container className="mt-3">
                {/* <h2>{this.props.match.params.id}</h2>
                <h2>UNITS</h2>
                <Button onClick={this.addUnitClicked.bind(this)}>add new unit??</Button> */}
                {/* <ProgressBar className="mt-2" striped now={45} label={`${45}%`} /> */}
                
                <h2>Project Name's Unit's</h2>

                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                        <th>Element</th>
                        <th>Build</th>
                        <th>Load In</th>
                        <th>Materials</th>
                        <th>Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.units.map(
                            unit =>
                            <tr>
                            <th>{unit.name}</th>
                            <td>{unit.build}</td>
                            <td>{unit.loadIn}</td>
                            <td>{unit.materials}</td>
                            <td><ProgressBar striped now={unit.completion} label={`${unit.completion}%`} /></td>
                            </tr>
                        )
                    } 
                    </tbody>
                </Table>

                <h2>alt look</h2>
                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                        <th>Element</th>
                        <th>Build</th>
                        <th>Load In</th>
                        <th>Materials</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.units.map(
                            unit =>
                            <>
                            <tr>
                            <th>{unit.name}</th>
                            <td>{unit.build}</td>
                            <td>{unit.loadIn}</td>
                            <td>{unit.materials}</td>
                            </tr>
                            <tr>
                            <th colSpan="4"><ProgressBar striped now={unit.completion} label={`${unit.completion}% complete`} /></th>
                            </tr>
                            </>
                        )
                    } 
                    </tbody>
                </Table>

                

                <div className="row mt-3">
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Element</th>
                    <th scope="col">Build</th>
                    <th scope="col">Load In</th>
                    <th scope="col">Materials</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.units.map(
                            unit =>
                                <tr>
                                <th scope="row">{unit.name}</th>
                                <td>{unit.build}</td>
                                <td>{unit.loadIn}</td>
                                <td>{unit.materials}</td>
                                </tr>
                        )
                    } 

                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <th scope="row">Totals</th>
                    <td>{this.state.totals.build}</td>
                    <td>{this.state.totals.loadIn}</td>
                    <td>{this.state.totals.materials}</td>
                    </tr>
                </tbody>
                </table>
                </div>

                <h2 className="border-bottom-custom mt-2">Units</h2>
                {/* Create New Unit Button */}
                <div className="row mt-3 mb-3">
                    <div className="col-md-3"></div>
                    <div className="col align-self-center">
                        <button type="submit" className="btn btn-primary btn-block" 
                        onClick={this.createShowClicked}>Add a New Unit</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="container">
                    { this.state.units.length === 0 ? ( //If there are no units dont display this section
                        <div>
                        <p>No Units Currrently...</p>
                        <p>Add a unit!</p>
                        </div>
                    ) : (
                        this.state.units.map(
                            unit =>
                                <div className="container row mt-2 border-custom-card bg-light" >
                                {/* onClick={() => this.props.cardClicked(this.state.show.uniqueId)}> */}
                    
                                    {/* Type and Created Date */}
                                    <div className="col">
                                        <h4>{unit.name}</h4>
                                    </div>

                                    {/* <div className="col-md-2">
                                        <button type="submit" className="btn btn-primary btn-block" >Duplicate</button>
                                    </div> */}

                                    <div className="col-md-2 mt-1 mb-1">
                                        <button type="submit" className="btn btn-primary btn-block" data-toggle="modal" data-target="#confirmFinished">
                                        Mark Finished</button>
                                    </div>
                                    
                                    {/* Confirm mark complete Modal */}
                                    <div class="modal fade" id="confirmFinished" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-md-2 mt-1 mb-1">
                                        {/* <button type="submit" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModalCenter">
                                        Delete</button> */}


                                        {/* Confirm delete Modal */}

                                        {/* <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div> */}
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                        Launch demo modal
                                        </button>

                                        <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>

                                    </div>
                                </div>
                        )
                    )}  
                </div>
            </Container>
        )
    }
}

export default withRouter(UnitsComponent)