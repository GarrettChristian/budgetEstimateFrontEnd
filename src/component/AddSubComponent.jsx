import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

class AddSubComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

    }

    addSubComClicked() {
        console.log("CLICKED???")

        this.setState(state => {

            var newSubItem = {
                name: "",
                description: "",
                workHours: 0,
                numberOfCrew: 0
            }

            const subComponentItems = [...state.subComponentItems, newSubItem]
       
            return {
                subComponentItems
            };
        });
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

    handleSubNameChange(index, item, event) {

        const subComponentItems = [...this.state.subComponentItems];

        item.name = event.target.value 
        subComponentItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            subComponentItems
        });
    };

    handleSubDescriptionChange(index, item, event) {

        const subComponentItems = [...this.state.subComponentItems];

        item.description = event.target.value 
        subComponentItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            subComponentItems
        });
    };

    handleSubWorkHoursChange(index, item, event) {

        const subComponentItems = [...this.state.subComponentItems];

        item.workHours = event.target.value 
        subComponentItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            subComponentItems
        });
    };

    handleSubNumberofCrewChange(index, item, event) {

        const subComponentItems = [...this.state.subComponentItems];

        item.numberofCrew = event.target.value 
        subComponentItems.splice(index, 1, item); // replaces 1 element at specificed index

        this.setState({
            subComponentItems
        });
    };

    removeSubComponentClicked = (index, event) => {
        
        const subComponentItems = [...this.props.subComponentItems];
        console.log("handle input change pre ", subComponentItems)
        subComponentItems.splice(index, 1); // replaces 1 element at specificed index
        console.log("handle input change post ", subComponentItems)
        this.setState({
            subComponentItems
        });
    };

    render() {
        return (
            <Container className="mt-3">

                    <div>
                       {this.props.subComponentItems.map(
                           (item, index) => 
                            <>
                            <Row>
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
                            </Row>
                            {/* <Row>
                                <Col xs={11}>
                                <Form.Group controlId="subComponentName">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Description" 
                                    name="description" index={index} 
                                    value={item.description} 
                                    onChange={this.handleInputChange}/>
                                </Form.Group>                
                                </Col>
                            </Row> */}
                            </>
                            )}
                    </div>

            </Container>
        )
    }
}

export default AddSubComponent