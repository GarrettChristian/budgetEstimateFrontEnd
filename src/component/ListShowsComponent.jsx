import React, { Component } from 'react'
import ShowService from '../service/ShowService.jsx';

const USER = 'user'

class ListShowsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            message: null
        }
        this.refreshShows = this.refreshShows.bind(this)
    }

    componentDidMount() {
        this.refreshShows();
    }

    refreshShows() {
        ShowService.retrieveAllShows(USER) //HARDCODED
            .then(
                response => {
                    this.setState({ shows: response.data })
                }
            )
    }


    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
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
                </div>
            </div>
        )
    }
}

export default ListShowsComponent