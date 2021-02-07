import React, { Component } from 'react'

class StaffComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: props.show
        }
    }

    render() {
        
        return (
            <div className="container ">
                <div className="row">Staff</div>
            </div>
        )
    }
}

export default StaffComponent