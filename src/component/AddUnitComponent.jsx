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
            name: '',
            description: '',
            subComponentItems: [],
        }

        this.handleChange = this.handleChange.bind(this)
    }

    removeSubComClicked(itemIdentifier) {
        console.log("removing ", itemIdentifier)
    }

    addSubComClicked() {
        console.log("CLICKED???")

        this.setState(state => {

            var newSubItem = {
                name: "sub name",
                description: "Flat 1",
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
        // console.log("handle input change event ", event)
        console.log("handle input change target name ", event.target.name)
        // console.log("handle input change item ", item)
        // console.log("handle input change index ", index)

        const subComponentItems = [...this.state.subComponentItems];

        // console.log("handle input change pre ", subComponentItems)

        item.name = event.target.value 
        subComponentItems.splice(index, 1, item); // replaces 1 element at specificed index

        // console.log("handle input change post ", subComponentItems)
        this.setState({
            subComponentItems
        });
    };

    handleSubDescriptionChange(index, item, event) {
        console.log("handle input change event ", event)
        console.log("handle input change item ", item)
        console.log("handle input change index ", index)

        const subComponentItems = [...this.state.subComponentItems];

        console.log("handle input change pre ", subComponentItems)

        // item.name = event.target.value
        event.target.name = event.target.value
        subComponentItems.splice(index, 1, item); // replaces 1 element at specificed index

        console.log("handle input change post ", subComponentItems)
        this.setState({
            subComponentItems
        });
    };

    // handleInputChange = (event) => {
    //     console.log("handle input change event ", event)
    //     console.log("handle input change item ", event.item)
    //     console.log("handle input change item target ", event.target.item)
    //     console.log("handle input change index ", event.index)
    //     const subComponentItems = [...this.state.subComponentItems];
    //     console.log("handle input change pre ", subComponentItems)
    //     subComponentItems.splice(event.index, 1, event.item); // replaces 1 element at specificed index
    //     console.log("handle input change post ", subComponentItems)
    //     this.setState({
    //         subComponentItems
    //     });
    // };

    removeSubComponent = (event) => {
        // console.log("remove event ", event)
        // console.log("remove index ", event.target.index)
        // const subComponentItems = [...this.state.subComponentItems];
        // console.log("handle input change pre ", subComponentItems)
        // subComponentItems.splice(event.target.index, 1); // replaces 1 element at specificed index
        // console.log("handle input change post ", subComponentItems)
        // this.setState({
        //     subComponentItems
        // });
    };

    render() {
        return (
            <Container className="mt-3">

                <h2 className="border-bottom-custom">Add Unit</h2>

                <Form className="border-bottom-custom">
                            
                    {/* Name First and Last */}
                    <Row>
                        <Col>
                        <Form.Group controlId="formGroupFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" 
                            name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                        </Form.Group>
                        </Col>

                        <Col>
                        <Form.Group controlId="formGroupLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" 
                            name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        </Form.Group>
                        </Col>
                    </Row>
                    
                    {/* <div id="dynamicInput">
                       {this.state.inputs.map(input => <Form.Group key={input} />)}
                   </div> */}

                    <h4 className="border-bottom-custom">Load in</h4>

                    <div>
                       {this.state.subComponentItems.map(
                           (item, index) => 
                            <>
                            <Row>
                                {console.log("in render item ", item)}
                                {console.log("in render index ", index)}
                                <Col xs={11}>
                                <Form.Group controlId="subComponentName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" 
                                    name="item.name" value={item.name}
                                    onChange={this.handleSubNameChange.bind(this, index, item)}/>
                                </Form.Group>                
                                </Col>
                                <Col xs={1}>
                                    <Button onClick={this.removeSubComClicked.bind(this, index)}>X</Button>
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

                    <Row className="mb-2">
                        <Col xs={2}/>
                        <Col>
                            <Button block onClick={this.addSubComClicked.bind(this)}>Add Subcomponent</Button>
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