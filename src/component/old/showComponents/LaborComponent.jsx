import React, { Component } from 'react'

class LaborComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: props.show
        }
    }

    render() {
        
        return (
            <div className="container ">
                <div className="row">LaborComponent</div>
            </div>
        )
    }
}

export default LaborComponent