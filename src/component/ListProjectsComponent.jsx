import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService.jsx'
import ProjectService from '../service/ProjectService.jsx'
import ProjectCardComponent from './ProjectCardComponent'

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

    projectClicked(id) {
        console.log(id)
        this.props.history.push({
            pathname: '/project',
            state: { projectId: id }
        })
    }

    render() {
        console.log('render')
        return (
            <div className="container mt-3">

                {/* Title Area */}
                <div className="row border-bottom-custom">
                    <div className="col-md-8">
                        <h3>Project Budget Tracker</h3>
                    </div>
                    {/* <div className="col-md-4">
                        <p>Signed in as: {this.state.name}</p>
                    </div> */}
                </div>

                {/* Create New Project Button */}
                <div className="row mt-3 mb-3">
                    <div className="col-md-3"></div>
                    <div className="col align-self-center">
                        <button type="submit" className="btn btn-primary btn-block" 
                        onClick={this.createProjectClicked}>Create a New Project</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <h3>Your Projects {AuthenticationService.getLoggedInUserName()} {AuthenticationService.ge}</h3>
                <div className="container">
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
                </div>
            </div>
        )
    }
}

export default ListProjectsComponent