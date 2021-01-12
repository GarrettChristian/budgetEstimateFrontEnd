import React, { Component } from 'react'
import ShowService from '../service/ShowService.jsx';

class ListShowsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Diffie-Hellman',
            shows: [],
            message: null
        }
        this.refreshShows = this.refreshShows.bind(this)
    }

    componentDidMount() {
        this.refreshShows();
    }

    refreshShows() {
        ShowService.retrieveAllShows()
            .then(
                response => {
                    this.setState({ shows: response.data })
                }
            )
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
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.loginClicked}>Create a New Show</button>
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.shows.map(
                                    show =>
                                        <tr key={show.id}>
                                            <td>{show.id}</td>
                                            <td>{show.name}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    )}  
                </div>
            </div>
        )
    }
}

export default ListShowsComponent