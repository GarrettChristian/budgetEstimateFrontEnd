import React, { Component } from 'react'
import moment from 'moment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ProjectCardComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            project: props.project
        }
    }

    render() {
                
        const date = moment(this.state.project.createdDate).format('MMM DD, YYYY');
        
        return (
            <Container className="mt-2 border-custom-card bg-light" 
            onClick={() => this.props.cardClicked(this.state.project.uniqueId)}>

                {/* Project Name and Venue */}
                <Row>
                    <Col xs={1}/>
                    <Col xs={6}>
                        <h4>{this.state.project.name}</h4>
                    </Col>
                    <Col xs={4}>
                        <h5 className="text-right">{this.state.project.venue}</h5>
                    </Col>
                    <Col xs={1}/>
                </Row>

                {/* Type and Created Date */}
                <Row>
                    <Col xs={1}/>
                    <Col xs={6}>
                        <p>{this.state.project.estimateType} Estimate</p>
                    </Col>
                    <Col xs={4}>
                        <p className="text-right">Created: {date}</p>
                    </Col>
                    <Col xs={1}/>
                </Row>
            </Container>
        )
    }
}

export default ProjectCardComponent