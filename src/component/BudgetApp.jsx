import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"
import AuthenticationService from '../service/AuthenticationService'
import NavigationBar from "./NavigationBar"
import LoginComponent from './LoginComponent'
import AboutComponent from './AboutComponent'
import AddUserComponent from './AddUserComponent'
import LogoutComponent from './LogoutComponent'
import ListProjectsComponent from "./ListProjectsComponent"
import AuthenticatedRoute from "./AuthenticatedRoute"
import AddProjectComponent from "./AddProjectComponent"

class BudgetApp extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isLoggedIn : AuthenticationService.isUserLoggedIn()
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }

  // handleChange(event) {
  //       this.setState(
  //           {
  //               [event.target.name]
  //                   : event.target.value
  //           }
  //       )
  //   }

  //   componentDidUpdate(prevProps) {
  //       console.log("did update")
  //       if (this.props.location.pathname !== prevProps.location.pathname) {
  //           console.log("update!", this.state.loggedIn)
  //           var event
  //           event.target.name = this.state.loggedIn;
  //           event.target.value = AuthenticationService.isUserLoggedIn();
  //           this.handleChange(event)
  //           // var loggedInUser = AuthenticationService.isUserLoggedIn()
  //           // this.setState({loggedIn, isUserLoggedIn})
  //           // this.setState(this.state.loggedInUserName, loggedInUser)
  //       }
  //   }

  render() {
    // var loggedIn = AuthenticationService.isUserLoggedIn()
    // var loggedInUserName = AuthenticationService.getLoggedInUserName()

      return (
          <>
          <Router>
              {/* <NavigationBar isLoggedIn={this.state.loggedIn}/> */}
              <NavigationBar/>
            <div>
      
              <Switch>
                  <Route path="/" exact component={LoginComponent} />
                  <Route path="/login" exact component={LoginComponent} />
                  <Route path="/logout" exact component={LogoutComponent} />
                  <Route path="/about" exact component={AboutComponent} />
                  <Route path="/new/user" exact component={AddUserComponent} />
                  <AuthenticatedRoute path="/projects" exact component={ListProjectsComponent} />
                  <AuthenticatedRoute path="/projects/create" exact component={AddProjectComponent} />
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