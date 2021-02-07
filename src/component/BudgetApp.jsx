import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"
import NavigationBar from "./NavigationBar"
import LoginComponent from './LoginComponent'
import AboutComponent from './AboutComponent'
import AddUserComponent from './AddUserComponent'
import LogoutComponent from './LogoutComponent'
import ListProductionsComponent from "./ListProductionsComponent"
import AuthenticatedRoute from "./AuthenticatedRoute"

class BudgetApp extends Component {

    render() {

        return (
            <>
            <Router>
                <NavigationBar/>
              <div>
        
                <Switch>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" exact component={LoginComponent} />
                    <Route path="/logout" exact component={LogoutComponent} />
                    <Route path="/about" exact component={AboutComponent} />
                    <Route path="/new/user" exact component={AddUserComponent} />
                    <AuthenticatedRoute path="/productions" exact component={ListProductionsComponent} />
                </Switch>
              </div>
            </Router>
            </>
          );
    }
}

export default BudgetApp


{/* <Route path="/" exact component={LoginComponent} />
<Route path="/login" exact component={LoginComponent} />
<Route path="/new/user" exact component={NewUserComponent} />
<Route path="/about" exact component={AboutComponent} />
<AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
<AuthenticatedRoute path="/shows" exact component={ListShowsComponent} />
<AuthenticatedRoute path="/shows/create" exact component={CreateShowComponent} />
<AuthenticatedRoute path="/show" render={(props) => <ShowComponent {...props} />} /> */}