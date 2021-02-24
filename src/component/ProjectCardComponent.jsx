import React, { Component } from 'react'
import moment from 'moment'

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
            <div className="container mt-2 border-custom-card bg-light" 
            onClick={() => this.props.cardClicked(this.state.project.uniqueId)}>

                {/* Project Name and Venue */}
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <h4>{this.state.project.name}</h4>
                    </div>
                    <div className="col-md-3 text-right">
                        <h5>{this.state.project.venue}</h5>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                {/* Type and Created Date */}
                <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <p>{this.state.project.estimateType} Estimate</p>
                    </div>
                    <div className="col-md-3 text-right">
                        <p>Created: {date}</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default ProjectCardComponent