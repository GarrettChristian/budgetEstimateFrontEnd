import React, { Component } from 'react';
import ListShowsComponent from './ListShowsComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import MenuComponent from './MenuComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import NewUserComponent from './NewUserComponent';

class BudgetApp extends Component {

    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/new/user" exact component={NewUserComponent} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                            <AuthenticatedRoute path="/shows" exact component={ListShowsComponent} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default BudgetApp