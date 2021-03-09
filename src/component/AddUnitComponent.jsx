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
            UnitSubcomponents: [],
            subComponentForms: [],
            subComponentItems: [],
            totalAdded: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    removeSubComClicked(itemIdentifier) {
        console.log("removing ", itemIdentifier)
    }

    addSubComClicked() {
        console.log("CLICKED???")

        this.setState(state => {
            var index = state.subComponentForms.length

            const totalAdded = state.totalAdded + 1

            var newSubItem = {
                name: "sub name",
                description: "Flat 1",
                workHours: 0,
                numberOfCrew: 0,
                item: totalAdded
            }

            const subComponentItems = [...state.subComponentItems, newSubItem]

            const subComponentForms = [...state.subComponentForms, 
                <Row>
                <Col xs={11}>
                <Form.Group controlId="formGroupFirstName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" 
                    name="name" value={subComponentItems[index].name} 
                    onChange={this.handleChangeSubCom.bind(this, index)}/>
                </Form.Group>                
                </Col>
                <Col xs={1}>
                    <Button onClick={this.removeSubComClicked.bind(this, totalAdded)}>X</Button>
                </Col>
                </Row>
            
            ];
       
            return {
                subComponentForms,
                subComponentItems,
                totalAdded
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

    handleChangeSubCom(event, index) {
        console.log("event occuring ", event.target)
        this.setState(state => {
            
            const subComponentItems = state.subComponentItems

            subComponentItems[index].name = event.target.value
        
            return {
                subComponentItems
            };
        });
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

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
                       {this.state.subComponentForms.map(
                           input => 
                           <>{input}</>)}
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