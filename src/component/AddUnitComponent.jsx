import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

class AddUnitComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            unitName: '',
            unitDescription: '',
            buildItems: [],
            loadInItems: [],
            materials: [],
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

    // BUILD ITEMS 

    addBuildItemClicked() {
        console.log("Adding Build item")

        this.setState(state => {

            var newSubItem = {
                name: "",
                description: "",
                workHours: 0,
                numberOfCrew: 0
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

        item.numberofCrew = event.target.value 
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
                workHours: 0,
                numberOfCrew: 0
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

        item.numberofCrew = event.target.value 
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
                cost: 0,
                amountRequired: 0
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

    handleMaterialDescriptionChange(index, item, event) {

        const materials = [...this.state.materials];

        item.description = event.target.value 
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
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" 
                                    name="name" value={item.name} size="sm"
                                    onChange={this.handleBuildNameChange.bind(this, index, item)}/>
                                </Form.Group>          
                                </Col>
                                <Col xs={3}>
                                    <Form.Group controlId="buildWorkHours">
                                        <Form.Label>Work Hours</Form.Label>
                                        <Form.Control type="text" placeholder="0" 
                                        name="workHours" value={item.workHours} size="sm"
                                        onChange={this.handleBuildWorkHoursChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={3}>
                                    <Form.Group controlId="buildNumberOfCrew">
                                        <Form.Label>Number of Crew</Form.Label>
                                        <Form.Control type="text" placeholder="0" 
                                        name="numberOfCrew" value={item.description} size="sm"
                                        onChange={this.handleBuildNumberofCrewChange.bind(this, index, item)}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={1}>
                                    <Button variant="danger" onClick={this.removeBuildItemClicked.bind(this, index)}>x</Button>
                                </Col>
                            </Row>
                            <Form.Group controlId="buildDescription">
                                <Form.Label>Description</Form.Label>
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
                            {/* <Row>
                                {console.log("in render item ", item)}
                                {console.log("in render index ", index)}
                                <Col xs={11}>
                                <Form.Group controlId="subComponentName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" 
                                    name="this.state.subComponentItems" value={item.name}
                                    onChange={this.handleSubNameChange.bind(this, index, item)}/>
                                </Form.Group>                
                                </Col>
                                <Col xs={1}>
                                    <Button onClick={this.removeSubComponentClicked.bind(this, index)}>X</Button>
                                </Col>
                            </Row> */}
                            </>
                            )}
                    </div>

                    <Row className="mb-2">
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
                            {/* <Row>
                                {console.log("in render item ", item)}
                                {console.log("in render index ", index)}
                                <Col xs={11}>
                                <Form.Group controlId="subComponentName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" 
                                    name="this.state.subComponentItems" value={item.name}
                                    onChange={this.handleSubNameChange.bind(this, index, item)}/>
                                </Form.Group>                
                                </Col>
                                <Col xs={1}>
                                    <Button onClick={this.removeSubComponentClicked.bind(this, index)}>X</Button>
                                </Col>
                            </Row> */}
                            </>
                            )}
                    </div>

                    <Row className="mb-2">
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

            </Container>
        )
    }
}

export default AddUnitComponent