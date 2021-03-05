import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import {
    Switch,
    withRouter
  } from "react-router-dom"
import SummaryComponent from './SummaryComponent';
import UnitsComponent from './UnitsComponent';
import AddUnitComponent from "./AddUnitComponent";
import AuthenticatedRoute from './AuthenticatedRoute';
import Nav from 'react-bootstrap/Nav'

class ProjectDetailsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            key: this.props.key
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelectSummary = this.handleSelectSummary.bind(this);
    }

    handleSelect(selctedKey) {
        var url = this.props.match.url
        this.props.history.push({
            pathname: url + '/' + selctedKey,
            state: { key: selctedKey,
            url: url },
        })
    }

    handleSelectSummary(selctedKey) {
        this.props.history.push({
            pathname: this.props.match.url,
            state: { key: selctedKey }
        })
    }


    render() {
        let path = this.props.match.path

        return (
            <Container className="mt-3">

                {/* Navigation tabs */}
                <Nav justify variant="tabs" defaultActiveKey="summary" activeKey={this.state.key}>
                {/* // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                // onSelect={this.handleSelect}>  */}
                <Nav.Item>
                    {/* <Nav.Link eventKey="summary" href={url}>
                        Summary
                    </Nav.Link> */}
                    <Nav.Link eventKey="summary" onSelect={this.handleSelectSummary}>Summary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Staff
                    </Nav.Link>
                </Nav.Item>
                </Nav.Item>
                <Nav.Item >
                    {/* <Nav.Link eventKey="units" href={`${url}/units`}>Units</Nav.Link> */}
                    <Nav.Link eventKey="units" onSelect={this.handleSelect}>Units</Nav.Link>
                </Nav.Item>
                </Nav>

                <Switch>
                    <AuthenticatedRoute exact path={path} component={SummaryComponent}/>
                    {/* <h3>Please select a topic.</h3>
                    </Route> */}
                    {/* <AuthenticatedRoute path={`${path}/summary`}  /> */}
                    <AuthenticatedRoute exact path={`${path}/units`} component={UnitsComponent} />
                    <AuthenticatedRoute exact path={`${path}/units/new`} component={AddUnitComponent} />
                </Switch>

                
                {/* <Route path="/admin/groups" component={AdminGroups} /> */}

                {/* </Row> */}
            </Container>
        )
    }
}

export default withRouter(ProjectDetailsComponent)
