import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

class AboutComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log('render')
        return (
            <div className="container mt-3">

                <h1>About</h1>
                <p className="ml-3 text-wrap">Created By: Garrett Christian</p>

                <h2>Why</h2>
                <div className="ml-3 col text-wrap">
                    <div className="row">
                        <p>
                            Created for my James Madison University theater independent study course with Professor Smallwood. 
                            The course's goal was to explore how the 
                            software engineering development cycle can be applied to a 
                            theater problem. Specifically to create an application for tracking worker hours on theatrical projects.
                        </p>
                    </div>
                </div>

                <h2>Where to find the code</h2>
                <div className="ml-3 col text-wrap">
                    <div className="row">
                        <div className="col-md-2">
                            <p>Front End:</p>
                        </div>
                        <div className="col-md-10">
                            <a className="text-wrap" href="https://github.com/GarrettChristian/budget_estimate_front_end">
                            https://github.com/GarrettChristian/budget_estimate_front_end</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <p>Back End:</p>
                        </div>
                        <div className="col-md-10">
                            <a href="https://github.com/GarrettChristian/BudgetEstimate">
                            https://github.com/GarrettChristian/BudgetEstimate</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutComponent