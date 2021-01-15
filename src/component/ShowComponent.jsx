import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService.jsx';
import ShowService from '../service/ShowService.jsx';

class ShowComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log('render')
        return (
            <div className="container mt-3">
                Show!
            </div>
        )
    }
}

export default ShowComponent