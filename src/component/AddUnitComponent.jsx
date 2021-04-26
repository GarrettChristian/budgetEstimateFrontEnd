import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ProjectService from '../service/ProjectService.jsx'

class AddUnitComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            unitName: '',
            unitDescription: '',
            buildItems: [],
            loadInItems: [],
            materials: [],
            errorMessage: 'Error Adding the Unit',
            showErrorMessage: false,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    cancelClicked() {
        this.props.history.goBack()
    }

    addClicked() {
        console.log("adding new unit from add unit compoenent ")

        var unitSubcomponents = this.state.buildItems
        unitSubcomponents = unitSubcomponents.concat(this.state.loadInItems)

        var rank = 0
        unitSubcomponents.forEach(function(subcomponent) {
            subcomponent.rank = rank;
            rank++
        });

        var materialsList = this.state.materials
        materialsList.forEach(function(subcomponent) {
            subcomponent.rank = rank;
            rank++
        });

        console.log(unitSubcomponents)

        var unit = {
            name: this.state.unitName,
            description: this.state.unitDescription,
            subcomponents: unitSubcomponents,
            materials: materialsList,
            projectId: this.props.match.params.id
        }

        console.log(unit)
        console.log(JSON.stringify(unit));
        console.log(this.props.match.params.id)

        ProjectService
            .createNewUnit(unit)
            .then((response) => {
                if (response.data.success) {
                    console.log("unit creation success")
                    this.setState({ showErrorMessage: false })
                    this.props.history.goBack()
                } else {
                    console.log("unit creation failed")
                    this.setState({ showErrorMessage: true })
                    this.setState({errorMessage: "Error Adding Unit Please Review"})
                }
                
            }).catch(() => {
                console.log("unit creation error")
                this.setState({ showErrorMessage: true })
                this.setState({errorMessage: "Failed to Add Unit Please Review"})
            })
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    // BUILD ITEMS 

    addBuildItemClicked() {
        console.log("Adding Build item")

        this.setState(state => {

            var newSubItem = {
                name: "",
                description: "",
                workHours: "",
                numberOfCrew: "",
                type: "BUILD"
            }

            const buildItems = [...state.buildItems, newSubItem]
       
            return {
                buildItems
            };
        });

    }

    handleBuildNameChange(index, item, event) {

        const buildItems = [...this.state.buildItems];

        item.name = event.target.value 
        buildItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            buildItems
        });
    };

    handleBuildDescriptionChange(index, item, event) {

        const buildItems = [...this.state.buildItems];

        item.description = event.target.value 
        buildItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            buildItems
        });
    };

    handleBuildWorkHoursChange(index, item, event) {

        const buildItems = [...this.state.buildItems];

        item.workHours = event.target.value 
        buildItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            buildItems
        });
    };

    handleBuildNumberofCrewChange(index, item, event) {

        const buildItems = [...this.state.buildItems];

        item.numberOfCrew = event.target.value 
        buildItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            buildItems
        });
    };

    removeBuildItemClicked = (index) => {
        
        const buildItems = [...this.state.buildItems];
        buildItems.splice(index, 1); // replaces 1 element at specificed index
        
        this.setState({
            buildItems
        });
    };

    // LOAD IN ITEMS 

    addLoadInItemClicked() {
        console.log("Adding Load In item")

        this.setState(state => {

            var newSubItem = {
                name: "",
                description: "",
                workHours: "",
                numberOfCrew: "",
                type: "LOAD_IN"
            }

            const loadInItems = [...state.loadInItems, newSubItem]
       
            return {
                loadInItems
            };
        });
    }
        
    handleLoadInNameChange(index, item, event) {

        const loadInItems = [...this.state.loadInItems];

        item.name = event.target.value 
        loadInItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            loadInItems
        });
    };

    handleLoadInDescriptionChange(index, item, event) {

        const loadInItems = [...this.state.loadInItems];

        item.description = event.target.value 
        loadInItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            loadInItems
        });
    };

    handleLoadInWorkHoursChange(index, item, event) {

        const loadInItems = [...this.state.loadInItems];

        item.workHours = event.target.value 
        loadInItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            loadInItems
        });
    };

    handleLoadInNumberofCrewChange(index, item, event) {

        const loadInItems = [...this.state.loadInItems];

        item.numberOfCrew = event.target.value 
        loadInItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            loadInItems
        });
    };

    removeLoadInItemClicked = (index) => {
        
        const loadInItems = [...this.state.loadInItems];
        loadInItems.splice(index, 1); // replaces 1 element at specificed index

        this.setState({
            loadInItems
        });
    };

    // MATERIALS

    addMaterialClicked() {

        this.setState(state => {

            var newSubItem = {
                name: "",
                description: "",
                vendor: "",
                cost: "",
                amountRequired: ""
            }

            const materials = [...state.materials, newSubItem]
       
            return {
                materials
            };
        });
    }
        
    handleMaterialNameChange(index, item, event) {

        const materials = [...this.state.materials];

        item.name = event.target.value 
        materials.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            materials
        });
    };

    handleMaterialVendorChange(index, item, event) {

        const materials = [...this.state.materials];

        item.vendor = event.target.value 
        materials.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            materials
        });
    };

    handleMaterialCostChange(index, item, event) {

        const materials = [...this.state.materials];

        item.cost = event.target.value 
        materials.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            materials
        });
    };

    handleMaterialAmountChange(index, item, event) {

        const materials = [...this.state.materials];

        item.amountRequired = event.target.value 
        materials.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            materials
        });
    };

    removeMaterialClicked = (index) => {
        
        const materials = [...this.state.materials];
        
        materials.splice(index, 1); // replaces 1 element at specificed index
        this.setState({
            materials
        });
    };


    render() {
        return (
            <Container className="mt-3">

                <h2 className="border-bottom-custom">Add Unit</h2>

                <Form className="border-bottom-custom">
                            
                    {/* Name First and Last */}
                    <Form.Group controlId="Unit Name">
                        <Form.Label>Unit Name</Form.Label>
                        <Form.Control type="text" placeholder="Unit Name" 
                        name="unitName" value={this.state.unitName} onChange={this.handleChange}/>
                    </Form.Group>

        
                    <Form.Group controlId="Unit Description">
                        <Form.Label>Unit Description</Form.Label>
                        <Form.Control type="text" placeholder="Description for this unit" 
                        name="unitDescription" value={this.state.unitDescription} onChange={this.handleChange}/>
                    </Form.Group>
                   
                    <h4 className="border-bottom-custom">Build</h4>

                    <div>
                       {this.state.buildItems.map(
                           (item, index) => 
                            <div className="border-bottom-custom">
                            <Row className="mt-2">
                                <Col xs={5}>
                                <Form.Group controlId="buildItemName">
                                    <Form.Control type="text" placeholder="Name" 
                                    name="name" value={item.name} size="sm"
                                    onChange={this.handleBuildNameChange.bind(this, index, item)}/>
                                </Form.Group>          
                                </Col>
                                <Col xs={3}>
                                    <Form.Group controlId="buildWorkHours">
                                        <Form.Control type="text" placeholder="Work Hours" 
                                        name="workHours" value={item.workHours} size="sm"
                                        onChange={this.handleBuildWorkHoursChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={3}>
                                    <Form.Group controlId="buildNumberOfCrew">
                                        <Form.Control type="text" placeholder="# of Crew" 
                                        name="numberOfCrew" value={item.numberOfCrew} size="sm"
                                        onChange={this.handleBuildNumberofCrewChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={1}>
                                    <Button variant="danger" onClick={this.removeBuildItemClicked.bind(this, index)}>x</Button>
                                </Col>
                            </Row>
                            <Form.Group controlId="buildDescription">
                                <Form.Control type="text" placeholder="Description" 
                                name="description" value={item.description} size="sm"
                                onChange={this.handleBuildDescriptionChange.bind(this, index, item)}/>
                            </Form.Group>
                            </div>
                            )}
                    </div>

                    <Row className="mt-2 mb-2">
                        <Col xs={2}/>
                        <Col>
                            <Button block onClick={this.addBuildItemClicked.bind(this)}>Add Build Subcomponent</Button>
                        </Col>
                        <Col xs={2}/>
                    </Row>

                    <h4 className="border-bottom-custom">Load in</h4>

                    <div>
                       {this.state.loadInItems.map(
                           (item, index) => 
                            <>
                            <div className="border-bottom-custom">
                            <Row className="mt-2">
                                <Col xs={5}>
                                <Form.Group controlId="loadInItemName">
                                    <Form.Control type="text" placeholder="Name" 
                                    name="name" value={item.name} size="sm"
                                    onChange={this.handleLoadInNameChange.bind(this, index, item)}/>
                                </Form.Group>          
                                </Col>
                                <Col xs={3}>
                                    <Form.Group controlId="loadInWorkHours">
                                        <Form.Control type="text" placeholder="Work Hours" 
                                        name="workHours" value={item.workHours} size="sm"
                                        onChange={this.handleLoadInWorkHoursChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={3}>
                                    <Form.Group controlId="loadInNumberOfCrew">
                                        <Form.Control type="text" placeholder="# of Crew" 
                                        name="numberOfCrew" value={item.numberOfCrew} size="sm"
                                        onChange={this.handleLoadInNumberofCrewChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={1}>
                                    <Button variant="danger" onClick={this.removeLoadInItemClicked.bind(this, index)}>x</Button>
                                </Col>
                            </Row>
                            <Form.Group controlId="loadInDescription">
                                <Form.Control type="text" placeholder="Description" 
                                name="description" value={item.description} size="sm"
                                onChange={this.handleLoadInDescriptionChange.bind(this, index, item)}/>
                            </Form.Group>
                            </div>
                            </>
                            )}
                    </div>

                    <Row className=" mt-2 mb-2">
                        <Col xs={2}/>
                        <Col>
                            <Button block onClick={this.addLoadInItemClicked.bind(this)}>Add Load in Subcomponent</Button>
                        </Col>
                        <Col xs={2}/>
                    </Row>

                    <h4 className="border-bottom-custom">Materials</h4>

                    <div>
                       {this.state.materials.map(
                           (item, index) => 
                            <>
                            <div className="border-bottom-custom">
                            <Row className="mt-2">
                                <Col xs={4}>
                                <Form.Group controlId="materialName">
                                    <Form.Control type="text" placeholder="Name" 
                                    name="name" value={item.name} size="sm"
                                    onChange={this.handleMaterialNameChange.bind(this, index, item)}/>
                                </Form.Group>          
                                </Col>
                                <Col xs={3}>
                                    <Form.Group controlId="buildNumberOfCrew">
                                        <Form.Control type="text" placeholder="Vendor" 
                                        name="numberOfCrew" value={item.numberOfCrew} size="sm"
                                        onChange={this.handleMaterialVendorChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={2}>
                                    <Form.Group controlId="materialCost">
                                        <Form.Control type="text" placeholder="Cost" 
                                        name="cost" value={item.cost} size="sm"
                                        onChange={this.handleMaterialCostChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={2}>
                                    <Form.Group controlId="materialAmountRequired">
                                        <Form.Control type="text" placeholder="Amount" 
                                        name="amountRequired" value={item.numberOfCrew} size="sm"
                                        onChange={this.handleMaterialAmountChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={1}>
                                    <Button variant="danger" onClick={this.removeMaterialClicked.bind(this, index)}>x</Button>
                                </Col>
                            </Row>
                            </div>
                            </>
                            )}
                    </div>

                    <Row className="mt-2 mb-2">
                        <Col xs={2}/>
                        <Col>
                            <Button block onClick={this.addMaterialClicked.bind(this)}>Add Material</Button>
                        </Col>
                        <Col xs={2}/>
                    </Row>
                    


                </Form>
                
                

                <Row className="mt-3">
                    <Col>
                        <Button variant="secondary" block onClick={this.cancelClicked.bind(this)}>Cancel</Button>
                    </Col>
                    <Col xs={4}/>
                    <Col>
                        <Button block onClick={this.addClicked.bind(this)}>Add Unit</Button>
                    </Col>
                </Row>
                { this.state.showErrorMessage && // show creation error
                    <div className="alert alert-warning" role="alert">{this.state.errorMessage}</div>
                }
                <br></br>

            </Container>
        )
    }
}

export default AddUnitComponent