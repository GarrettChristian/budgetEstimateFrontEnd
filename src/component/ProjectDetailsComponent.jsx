import React, { Component } from 'react'
import ProjectService from '../service/ProjectService';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import SummaryComponent from './SummaryComponent';
import UnitsComponent from './UnitsComponent';

class ProjectDetailsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    render() {
        return (
            <Container className="mt-3">
                <h2>{this.props.match.params.id}</h2>

                <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example">
                    <Tab eventKey="summary" title="Summary">
                        <SummaryComponent showId={this.props.match.params.id}/>
                    </Tab>
                    <Tab eventKey="units" title="Units">
                        <UnitsComponent showId={this.props.match.params.id}/>
                    </Tab>
                    {/* <Tab eventKey="contact" title="Contact" disabled>
                        <SummaryComponent />
                    </Tab> */}
                </Tabs>

                {/* </Row> */}
            </Container>
        )
    }
}

export default ProjectDetailsComponent