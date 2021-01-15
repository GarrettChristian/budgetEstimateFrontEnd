import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService.jsx';
import ShowService from '../service/ShowService.jsx';
import ShowCardComponent from './ShowCardComponent'

class ListShowsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Current User',
            shows: [],
            message: null
        }
        this.refreshShows = this.refreshShows.bind(this)
        this.getName = this.getName.bind(this)
        this.createShowClicked = this.createShowClicked.bind(this)
        this.showClicked = this.showClicked.bind(this)
    }

    componentDidMount() {
        this.refreshShows();
        this.getName();
    }

    refreshShows() {
        ShowService.retrieveAllShows()
            .then(
                response => {
                    this.setState({ shows: response.data })
                }
            )
    }

    getName() {
        AuthenticationService.getLoggedInUsersNameFirstLast()
            .then(
                response => {
                    this.setState({ name: response.data })
                }
            )
    }

    createShowClicked() {
        this.props.history.push(`/shows/create`)
    }

    showClicked(id) {
        console.log(id)
        this.props.history.push(`/show`)
    }

    render() {
        console.log('render')
        return (
            <div className="container mt-3">

                {/* Title Area */}
                <div className="row border-bottom-custom">
                    <div className="col-md-8">
                        <h3>Show Budget Tracker</h3>
                    </div>
                    <div className="col-md-4">
                        <p>Signed in as: {this.state.name}</p>
                    </div>
                </div>

                {/* Create New Show Button */}
                <div className="row mt-3 mb-3">
                    <div className="col-md-3"></div>
                    <div className="col align-self-center">
                        <button type="submit" className="btn btn-primary btn-block" 
                        onClick={this.createShowClicked}>Create a New Show</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <h3>Your Shows</h3>
                <div className="container">
                    { this.state.shows.length === 0 ? ( //If there are no shows dont display this section
                        <div>
                        <p>No Shows Currrently...</p>
                        <p>Create a Show to Start Budgeting!</p>
                        </div>
                    ) : (
                        this.state.shows.map(
                            show =>
                                <ShowCardComponent cardClicked={this.showClicked} show={show}>
                                </ShowCardComponent>
                        )
                    )}  
                </div>
            </div>
        )
    }
}

export default ListShowsComponent