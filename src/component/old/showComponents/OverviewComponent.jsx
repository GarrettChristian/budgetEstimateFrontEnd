import React, { Component } from 'react'

class OverviewComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showId: props.showId
        }
    }

    render() {
        
        return (
            <div className="container ">
                <div className="row">overview</div>
                <div className="row">written by greg</div>
                <div className="row">directed by</div>
                <div className="row">set designer</div>
                <div className="row">td</div>
                <div className="row">Materials</div>
                <div className="row">build labor</div>
                <div className="row">load in labor</div>
            </div>
        )
    }
}

export default OverviewComponent