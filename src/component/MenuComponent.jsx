import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-light bg-dark" >
                    <div className="d-flex flex-nowrap">
                        <div>
                            <a className="navbar-brand" style={{color: "white"}}>Budget Tracker</a>
                        </div>
                        <ul className="navbar-nav">
                            <li><Link className="nav-link" to="/shows" style={{color: "white"}}>shows</Link></li>
                        </ul>
                        
                    </div>
                    <ul className="navbar-nav justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login" style={{color: "white"}}>Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout} style={{color: "white"}}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(MenuComponent)