import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import {
    Switch,
    withRouter
  } from "react-router-dom"
import SummaryComponent from './SummaryComponent';
import UnitsComponent from './UnitsComponent';
import AddUnitComponent from "./AddUnitComponent";
import UnitComponent from "./UnitComponent";
import StaffComponent from "./StaffComponent";
import AuthenticatedRoute from './AuthenticatedRoute';
import Nav from 'react-bootstrap/Nav'
import ProjectService from '../service/ProjectService.jsx'

class ProjectDetailsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            key: this.props.key,
            owner: false
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelectSummary = this.handleSelectSummary.bind(this);
        this.refreshOwner = this.refreshOwner.bind(this);
    }

    componentDidMount() {
        this.refreshOwner();
    }

    refreshOwner() {
        ProjectService.isOwner(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ owner: response.data })
                }
            )
    }

    handleSelect(selctedKey) {
        var url = this.props.match.url
        this.props.history.push({
            pathname: url + '/' + selctedKey,
            state: { key: selctedKey,
                url: url,
                owner: this.state.owner },
        })
    }

    handleSelectSummary(selctedKey) {
        this.props.history.push({
            pathname: this.props.match.url,
            state: { key: selctedKey,
                owner: this.state.owner }
        })
    }

    render() {
        let path = this.props.match.path

        return (
            <Container className="mt-3">

                {/* Navigation tabs */}
                <Nav justify variant="tabs" defaultActiveKey="summary" activeKey={this.state.key}>
                <Nav.Item>
                    <Nav.Link eventKey="summary" onSelect={this.handleSelectSummary}>Summary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="staff" onSelect={this.handleSelect}>Staff</Nav.Link>
                </Nav.Item>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="units" onSelect={this.handleSelect}>Units</Nav.Link>
                </Nav.Item>
                </Nav>

                <Switch>
                    <AuthenticatedRoute exact path={path} component={SummaryComponent}/>
                    {/* <AuthenticatedRoute exact path={path} render={(props) => (<SummaryComponent {...props} owner={this.state.owner} />)}/> */}
                    <AuthenticatedRoute exact path={`${path}/staff`} component={StaffComponent} />
                    <AuthenticatedRoute exact path={`${path}/units`} component={UnitsComponent} />
                    <AuthenticatedRoute exact path={`${path}/unit`} component={UnitComponent} />
                    <AuthenticatedRoute exact path={`${path}/units/new`} component={AddUnitComponent} />
                </Switch>
                
                {/* <Route path="/admin/groups" component={AdminGroups} /> */}

                {/* </Row> */}
            </Container>
        )
    }
}

export default withRouter(ProjectDetailsComponent)
