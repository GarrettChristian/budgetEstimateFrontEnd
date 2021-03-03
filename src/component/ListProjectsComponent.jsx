import React, { Component } from 'react'
import ProjectService from '../service/ProjectService.jsx'
import ProjectCardComponent from './ProjectCardComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ListProjectsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // name: 'Current User',
            projects: [],
            message: null
        }
        this.refreshProjects = this.refreshProjects.bind(this)
        // this.getName = this.getName.bind(this)
        this.createProjectClicked = this.createProjectClicked.bind(this)
        this.projectClicked = this.projectClicked.bind(this)
    }

    componentDidMount() {
        this.refreshProjects();
        // this.getName();
    }

    refreshProjects() {
        ProjectService.retrieveAllProjects()
            .then(
                response => {
                    this.setState({ projects: response.data })
                }
            )
    }

    // getName() {
    //     AuthenticationService.getLoggedInUsersNameFirstLast()
    //         .then(
    //             response => {
    //                 this.setState({ name: response.data })
    //             }
    //         )
    // }

    createProjectClicked() {
        this.props.history.push(`/projects/create`)
    }

    projectClicked(projectId) {
        console.log(projectId)
        this.props.history.push({
            pathname: '/project/' + 
            projectId,
            // state: { projectId: id }
        })
    }

    render() {
        console.log('render')
        return (
            <Container className="mt-3">

                {/* Title Area */}
                <Row className="border-bottom-custom">
                    <Col xs={8}>
                        <h3>Project Budget Tracker</h3>
                    </Col> 
                </Row>

                {/* Create New Project Button */}
                <Row className="mt-3 mb-3">
                    <Col xs={3}/>
                    <Col xs={7}>
                        <button type="submit" className="btn btn-primary btn-block" 
                        onClick={this.createProjectClicked}>Create a New Project</button>
                    </Col>
                    <Col xs={3}/>
                </Row>

                <h3>Your Projects:</h3>
                <Container>
                    { this.state.projects.length === 0 ? ( //If there are no projects dont display this section
                        <div>
                        <p>No Projects Currrently...</p>
                        <p>Create a New Project to Start Budgeting!</p>
                        </div>
                    ) : (
                        this.state.projects.map(
                            project =>
                                <ProjectCardComponent cardClicked={this.projectClicked} project={project}>
                                </ProjectCardComponent>
                        )
                    )}  
                </Container>
            </Container>
        )
    }
}

export default ListProjectsComponent