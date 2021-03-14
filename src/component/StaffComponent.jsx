import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

class StaffComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            staff: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.refreshStaff = this.refreshStaff.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    componentDidMount() {
        this.refreshStaff();
    }

    refreshStaff() {
        // ProjectService.retrieveProject(this.props.match.params.id)
        //     .then(
        //         response => {
        //             this.setState({ project: response.data })
        //         }
        //     )

        var arry = []

        var user1 = {
            firstName: "Garrett",
            lastName: "Christian",
            owner: "Owner",
            username: "GarrettChristian2@gmail.com"
        }

        var user2 = {
            firstName: "Brian",
            lastName: "Smallwood",
            owner: "Not Owner",
            username: "brian@gmail.com"
        }

        arry.push(user1)
        arry.push(user2)

        this.setState({ staff: arry })
    }

    addStaffClicked() {
        console.log("add staff")
        this.refreshStaff();
    }

    render() {
        return (
            <Container className="mt-3">
                
                <h2 className="border-bottom-custom">Staff</h2>

                {/* Create New Unit Button */}
                <Row className="mt-3">
                    <Col xs={2}/>
                    <Col>
                        <Button block onClick={this.addStaffClicked.bind(this)}>Add User to Show</Button>
                    </Col>
                    <Col xs={2}/>
                </Row>

                <Table className="mt-3" striped bordered hover>
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.staff.map(
                            staff =>
                            <tr>
                            <td>{staff.username}</td>
                            <td>{staff.firstName}</td>
                            <td>{staff.lastName}</td>
                            <td>{staff.owner}</td>                       
                            </tr>
                        )
                    } 
                </tbody>
                </Table>

            </Container>
        )
    }
}

export default StaffComponent