import React, { Component } from 'react'

class UnitComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showId: props.showId,
            totals: '',
            units: [],
        }
        this.refreshUnits = this.refreshUnits.bind(this)
    }

    componentDidMount() {
        this.refreshUnits();
    }

    refreshUnits() {
        console.log("here!")
        // ShowService.retrieveShow(this.state.showId)
        //     .then(
        //         response => {
        //             this.setState({ show: response.data })
        //         }
        //     )

        var arry = []

        var unit1 = {
            name: "Flat 1",
            description: "fake desciription flat1",
            build: 2,
            loadIn: 2,
            materials: 7
        }
        var unit2 = {
            name: "Flat 2",
            description: "fake desciription flat2",
            build: 22,
            loadIn: 22,
            materials: 72
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

    render() {
        
        return (
            <div className="container ">
                {/* <div className="row">{this.state.showId}</div> */}
                
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
                    {/* <tr> */}
                    {/* <th scope="row">Unit 1</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>
                    <tr>
                    <th scope="row">Unit 2</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>
                    <tr>
                    <th scope="row">Unit 3</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>
                    <tr> */}
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

            </div>
        )
    }
}

export default UnitComponent