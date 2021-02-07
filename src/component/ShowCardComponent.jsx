import React, { Component } from 'react'
import moment from 'moment'

class ShowCardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: props.show
        }
    }

    render() {
                
        const date = moment(this.state.show.createdDate).format('MMM DD, YYYY');
        
        return (
            <div className="container mt-2 border-custom-card bg-light" 
            onClick={() => this.props.cardClicked(this.state.show.uniqueId)}>

                {/* Show Name and Venue */}
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <h4>{this.state.show.name}</h4>
                    </div>
                    <div className="col-md-3 text-right">
                        <h5>{this.state.show.venue}</h5>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                {/* Type and Created Date */}
                <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <p>{this.state.show.estimateType} Estimate</p>
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

export default ShowCardComponent