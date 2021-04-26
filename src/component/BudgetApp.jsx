import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import NavigationBar from "./NavigationBar"
import LoginComponent from './LoginComponent'
import AboutComponent from './AboutComponent'
import AddUserComponent from './AddUserComponent'
import LogoutComponent from './LogoutComponent'
import ListProjectsComponent from "./ListProjectsComponent"
import AuthenticatedRoute from "./AuthenticatedRoute"
import AddProjectComponent from "./AddProjectComponent"
import ProjectDetailsComponent from "./ProjectDetailsComponent"

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
                  <AuthenticatedRoute path="/projects" exact component={ListProjectsComponent} />
                  <AuthenticatedRoute path="/projects/create" exact component={AddProjectComponent} />
                  <AuthenticatedRoute path="/project/:id" component={ProjectDetailsComponent}/>
              </Switch>
            </div>
          </Router>
          </>
        );
  }
}

export default BudgetApp
