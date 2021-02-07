import React, { Component } from 'react'
import ShowService from '../../service/ShowService.jsx';
import LaborComponent from './LaborComponent.jsx';
import OverviewComponent from './OverviewComponent.jsx';
import StaffComponent from './StaffComponent.jsx';
import UnitComponent from './UnitComponent.jsx';
// import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class ShowComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showId: this.props.location.state.showId,
            owner: false,
            viewing: '',
            renderView: '0',
            show: '',

        }
        this.handleChange = this.handleChange.bind(this)
        this.renderSwitch = this.renderSwitch.bind(this)
        this.refreshShow = this.refreshShow.bind(this)
    }

    componentDidMount() {
        this.refreshShow();
    }

    refreshShow() {
        console.log("here!") // change to get show name
        ShowService.retrieveShow(this.state.showId)
            .then(
                response => {
                    this.setState({ show: response.data })
                }
            )
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
        switch(event.target.value) {
            case '0':
                this.setState({viewing: ''});
                break;
            case '1':
                this.setState({viewing: 'Labor'});
                break;
            case '2':
                this.setState({viewing: 'Units'});
                break;
            case '3':
                this.setState({viewing: 'Staff'});
                break;
            default:
                this.setState({viewing: ''});
        }
    }

    renderSwitch(which) {
        console.log(which)
        switch(which) {
            case '0':
                return <OverviewComponent showId={this.state.showId}></OverviewComponent>;
            case '1':
                return <LaborComponent></LaborComponent>;
            case '2':
                return <UnitComponent showId={this.state.showId}></UnitComponent>;
            case '3':
                return <StaffComponent></StaffComponent>;
            default:
                return <div>defualt overview</div>;
        }
    }

    render() {
        console.log('render')
        return (
            <div className="container mt-3">

                <div className="row mt-3 border-bottom-custom">
                    <div className="col-8">
                        <h1>{this.state.show.name}</h1>
                    </div>
                    <div className="col">
                        <h2>{this.state.viewing}</h2>
                    </div>
                </div>

                {/* <div className="col-md-2">  */}
                <div className="row mt-3 pb-3 border-bottom-custom">
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block"
                        name="renderView" value={0} onClick={this.handleChange}>Overview</button>                
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block" 
                        name="renderView" value={1} onClick={this.handleChange}>Labor</button>   
                    </div>
                    {/* <div className="col">
                        <button type="submit" className="btn btn-primary btn-block" 
                        name="renderView" value={2} onClick={this.handleChange}>Summary</button>
                    </div> */}
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block" 
                        name="renderView" value={2} onClick={this.handleChange}>Units</button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block" 
                        name="renderView" value={3} onClick={this.handleChange}>Staff</button>
                    </div>
                </div>
                {/* </div> */}
            

                <div className="container row mt-3">
                    {this.renderSwitch(this.state.renderView)}
                </div>

            </div>
        )
    }
}

export default ShowComponent