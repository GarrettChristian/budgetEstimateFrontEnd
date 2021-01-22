import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService.jsx';
import ShowService from '../service/ShowService.jsx';
// import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon'
// import Sidebar from 'react-bootstrap-sidebar';

class ShowComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.location.state.showId,
            owner: false,
            isVisible: false
        }
    }

    updateModal(isVisible) {
        this.state.isVisible = isVisible;
        this.forceUpdate();
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

    render() {
        console.log('render')
        return (
            <div>
                {/* <div>
                    <Button bsStyle="primary" onClick={ () => this.updateModal(true) }><Glyphicon glyph="menu-hamburger"/></Button>
                    <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                        <Nav>
                        <NavItem href="#">Link 1</NavItem>
                        <NavItem href="#">Link 2</NavItem>
                        <NavItem href="#">Link 3</NavItem>
                        <NavItem href="#">Link 4</NavItem>
                        </Nav>
                    </Sidebar>
                </div> */}
                <div className="mt-3">
                    <div></div>


                    Show! {this.state.title}



                </div>
            </div>
        )
    }
}

export default ShowComponent