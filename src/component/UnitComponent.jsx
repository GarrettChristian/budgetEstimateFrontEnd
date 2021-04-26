import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ProjectService from '../service/ProjectService.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'

class UnitComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            unit: '',
            overview: '',
            loadInList: [],
            buildList: [],
            materials: [],
            owner: this.props.location.state.owner,
            projectId: this.props.match.params.id,
            showModal: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.toggle = this.toggle.bind(this);
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
        ProjectService.retrieveUnit(this.props.location.state.unitId, this.state.projectId)
            .then(
                response => {
                    this.setState({ unit: response.data })
                    this.setState({ loadInList:  response.data.subcomponents.filter(subcom => subcom.type === "LOAD_IN")})
                    this.setState({ buildList:  response.data.subcomponents.filter(subcom => subcom.type === "BUILD")})
                    this.setState({ materials: response.data.materials })
                    this.setState({ overview: response.data.unitOverview })
                }
            )
        console.log(this.state.buildList)
    }

    deleteUnitClicked() {
        ProjectService
        .deleteUnit(this.state.unit.id, this.state.projectId)
        .then((response) => {
            if (response.data.success) {
                console.log("unit was deleted successfully")
                this.props.history.goBack()
            } else {
                console.log("unit was not deleted succuessfully")
            }
            
        }).catch(() => {
            console.log("unit delete failed")
        }) 
    }

    markAllFinishedClicked() {
        console.log("mark all complete clicked")
        ProjectService
        .markAllSubcomponentsComplete(true, this.state.unit.id)
        .then((response) => {
            if (response.data.success) {
                console.log("Marked all subcomponents complete")
                this.refreshUnit()
            } else {
                console.log("Marking all subcomponents complete was not successful")
            }
            
        }).catch(() => {
            console.log("Mark all complete failed")
        }) 
    }

    markFinishedClicked(complete, subcomponentId) {
        console.log("mark complete clicked")
        console.log(complete)
        console.log(subcomponentId)
        ProjectService
        .markSubcomponentComplete(complete, subcomponentId)
        .then((response) => {
            if (response.data.success) {
                console.log("Marked subcomponent complete")
                this.refreshUnit()
            } else {
                console.log("Marking subcomponent complete was not successful")
            }
            
        }).catch(() => {
            console.log("Mark complete failed")
        }) 
    }

    toggle() {
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        
        return (
            <Container className="mt-3">

                <h2 className="border-bottom-custom">{this.state.unit.name}</h2>

                <Row className="mt-3">
                    <Col xs={6}/>
                    {this.state.owner ? (
                    <>
                    <Col xs={3}>
                        <Button block variant="danger" onClick={this.toggle}>Delete Unit</Button>
                    </Col> 
                                        
                    <Modal show={this.state.showModal}>
                        <ModalHeader closeButton onClick={this.toggle}>
                        <ModalTitle>Delete Unit</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete {this.state.unit.name}?
                        </ModalBody>
                        <ModalFooter>
                        <Button variant="secondary" onClick={this.toggle}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={this.deleteUnitClicked.bind(this)}>
                            Delete Unit
                        </Button>
                        </ModalFooter>
                    </Modal>
                    </>
                    
                    ) : (
                    <Col xs={3}/>
                    )}
                    <Col xs={3}>
                        <Button block variant="success" onClick={this.markAllFinishedClicked.bind(this)}>Mark All Finished</Button>
                    </Col>
                </Row>

                <h3 className="border-bottom-custom">Description</h3>
                <p>{this.state.unit.description}</p>
                <Col>
                    <h5 style={{marginTop: "10px"}}>Progress</h5>
                    <ProgressBar striped now={this.state.overview.completion} label={`${this.state.overview.completion}%`} />
                    <h5 style={{marginTop: "10px"}}>Build Totals</h5>
                    <Row>
                        <Col className="border-box" style={{borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px"}}>Total Build Hours: {this.state.overview.buildSubtotal}</Col>
                        <Col className="border-box">15% Contingency: {Number((this.state.overview.build - this.state.overview.buildSubtotal).toFixed(2))}</Col>
                        <Col className="border-box" style={{borderTopRightRadius: "5px", borderBottomRightRadius: "5px"}}>Build Total: {this.state.overview.build}</Col>
                    </Row>
                    <h5 style={{marginTop: "10px"}}>Load In Totals</h5>
                    <Row>
                        <Col className="border-box" style={{borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px"}}>Total Load In Hours: {this.state.overview.loadInSubtotal}</Col>
                        <Col className="border-box">15% Contingency: {Number((this.state.overview.loadIn - this.state.overview.loadInSubtotal).toFixed(2))}</Col>
                        <Col className="border-box" style={{borderTopRightRadius: "5px", borderBottomRightRadius: "5px"}}>Build Total: {this.state.overview.loadIn}</Col>
                    </Row>
                    <h5 style={{marginTop: "10px"}}>Materials Totals</h5>
                    <Row>
                        <Col className="border-box" style={{borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px"}}>Total Load In Cost: ${this.state.overview.materialsSubtotal}</Col>
                        <Col className="border-box">10% Contingency: ${Number((this.state.overview.materials - this.state.overview.materialsSubtotal).toFixed(2))}</Col>
                        <Col className="border-box" style={{borderTopRightRadius: "5px", borderBottomRightRadius: "5px"}}>Build Total: ${this.state.overview.materials}</Col>
                    </Row>
                </Col>
                <br></br>

                <h3 className="border-bottom-custom">Build</h3>
                {this.state.buildList
                        .sort((a,b) => a.rank - b.rank)
                        .map(
                        build =>
                        <Row className="border-unit">
                            <Col sm={9}>
                                <Row >
                                    <Col className="header-custom" style={{borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}>{build.name}</Col>
                                </Row>
                                <Row>
                                    <Col className="border-box" style={{textAlign: "center"}}>{build.description}</Col>
                                </Row>
                                <Row>
                                    <Col className="border-box" style={{borderBottomLeftRadius: "5px"}}>Work Hours: {build.workHours}</Col>
                                    <Col className="border-box">Crew: {build.numberOfCrew}</Col>
                                    <Col className="border-box">Total: {build.workHours * build.numberOfCrew}</Col>
                                    <Col className="border-box" sm={2} style={{borderBottomRightRadius: "5px"}}>Status: 
                                        {build.finished ? (<Badge variant="success">Done</Badge>)
                                        : (<Badge variant="warning">Todo</Badge>)}
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3} >
                                <Row style={{marginLeft: "1px"}} >
                                    {build.finished ? (
                                    <>
                                    <Button variant="outline-success" size="lg" block onClick={this.markFinishedClicked.bind(this, false, build.id)}>
                                        Mark Unfinished</Button>
                                    <p>{build.finishedByUser}</p>
                                    </>
                                    )
                                    : (<Button variant="outline-warning" size="lg" block onClick={this.markFinishedClicked.bind(this, true, build.id)}>
                                        Mark Finished</Button>)}
                                </Row>
                            </Col>
                        </Row>
                    )
                }
                <br></br>

                <h3 className="border-bottom-custom">Load in</h3>
                {this.state.loadInList
                        .sort((a,b) => a.rank - b.rank)
                        .map(
                        loadIn =>
                        <Row className="border-unit">
                            <Col sm={9}>
                                <Row className="header-custom" style={{borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}>
                                    <Col>{loadIn.name}</Col>
                                </Row>
                                <Row>
                                    <Col className="border-box" style={{textAlign: "center"}}>{loadIn.description}</Col>
                                </Row>
                                <Row>
                                    <Col className="border-box" style={{borderBottomLeftRadius: "5px"}}>Work Hours: {loadIn.workHours}</Col>
                                    <Col className="border-box">Crew: {loadIn.numberOfCrew}</Col>
                                    <Col className="border-box" >Total: {loadIn.workHours * loadIn.numberOfCrew}</Col>
                                    <Col className="border-box" sm={2} style={{borderBottomRightRadius: "5px"}}>Status: 
                                        {loadIn.finished ? (<Badge variant="success">Done</Badge>)
                                        : (<Badge variant="warning">Todo</Badge>)}
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3} >
                                <Row style={{marginLeft: "1px"}} >
                                    {loadIn.finished ? (
                                    <>
                                    <Button variant="outline-success" size="lg" block onClick={this.markFinishedClicked.bind(this, false, loadIn.id)}>
                                        Mark Unfinished</Button>
                                    <p>{loadIn.finishedByUser}</p>
                                    </>)
                                    : (<Button variant="outline-warning" size="lg" block onClick={this.markFinishedClicked.bind(this, true, loadIn.id)}>
                                        Mark Finished</Button>)}
                                </Row>
                            </Col>
                        </Row>
                    )
                }
                <br></br>

                <h3 className="border-bottom-custom">Materials</h3>
                {this.state.materials
                        .sort((a,b) => a.rank - b.rank)
                        .map(
                        material =>
                        <Row className="border-unit">
                            <Col sm={9}>
                                <Row className="header-custom" style={{borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}>
                                    <Col>{material.name}</Col>
                                </Row>
                                <Row>
                                    <Col className="border-box" style={{borderBottomLeftRadius: "5px"}}>Vendor: {material.vendor}</Col>
                                    <Col className="border-box">Cost: {material.cost}</Col>
                                    <Col className="border-box">Amount: {material.amountRequired}</Col>
                                    <Col className="border-box">Total: {material.cost * material.amountRequired}</Col>
                                    <Col className="border-box" sm={2} style={{borderBottomRightRadius: "5px"}}>Status: 
                                        {material.obtained ? (<Badge variant="success">Done</Badge>)
                                        : (<Badge variant="warning">Todo</Badge>)}
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3} >
                                <Row style={{marginLeft: "1px"}} >
                                        {material.obtained ? (
                                        <>
                                        <Button variant="outline-success" size="lg" block onClick={this.markFinishedClicked.bind(this, false, material.id)}>
                                            Mark Obtained</Button>
                                        <p>{material.obtainedByUser}</p>
                                        </>)
                                        : (<Button variant="outline-warning" size="lg" block onClick={this.markFinishedClicked.bind(this, true, material.id)}>
                                            Mark Obtained</Button>)}
                                </Row>
                            </Col>
                        </Row>
                    )
                } 
                <br></br>
                

            </Container>
        )
    }
}

export default UnitComponent