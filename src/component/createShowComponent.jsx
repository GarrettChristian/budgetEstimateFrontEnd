import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import ShowService from '../service/ShowService';

class CreateShowComponent extends Component {

constructor(props) {
        super(props)

        this.state = {
            showName: '',
            venue: '',
            writer: '',
            director: '',
            designer: '',
            technicalDirector: '',
            estimateType: 'Scenic',
            passwordConfirm: '',
            showErrorMessage: false,
            errorMessage: 'Error Creating the Show'
        }

        this.handleChange = this.handleChange.bind(this)
        this.createClicked = this.createClicked.bind(this)
        this.cancelClicked = this.cancelClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    createClicked() {

        var show = {
            name: this.state.showName,
            venue: this.state.venue,
            writer: this.state.writer,
            director: this.state.director,
            designer: this.designer,
            technicalDirector: this.state.technicalDirector,
            estimateType: this.state.estimateType
        }

        ShowService
            .createNewShow(show)
            .then((response) => {
                if (response.data.success) {
                    this.setState({ showErrorMessage: false })
                    this.props.history.push('/shows')
                } else {
                    this.setState({ showErrorMessage: true })
                    this.setState({errorMessage: "Show creation failed"})
                }
                
            }).catch(() => {
                this.setState({ showErrorMessage: true })
                this.setState({errorMessage: "Show creation failed"})
            })
    }

    cancelClicked() {
        this.props.history.push('/shows')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>

                    <div className="mx-auto col mt-5">
                        <h2>Create New Show</h2>
                        
                        {/* Show Name */}
                        <div class="form-group row">
                            <label for="showName" class="col-sm-2 col-form-label">Show Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="showName" name="showName" placeholder="Show Name" 
                                value={this.state.showName} onChange={this.handleChange} />
                            </div>
                        </div>                        

                        <div className="row">
                            <div className="col-md">
                                <div className="form-group">
                                    <label>Estimate Type</label>
                                    <input type="text" readonly class="form-control-plaintext" id="estimateType" name="estimateType"
                                    value={this.state.estimateType}/>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="form-group">
                                    <label>Venue</label>
                                    <input type="text" className="form-control" placeholder="Venue" id="venue"
                                    name="venue" value={this.state.venue} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md">
                                <div className="form-group">
                                    <label>Director</label>
                                    <input type="text" className="form-control" placeholder="Director" id="director"
                                    name="director" value={this.state.director} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="form-group">
                                    <label>Writer</label>
                                    <input type="text" className="form-control" placeholder="Writer" id="writer"
                                    name="writer" value={this.state.writer} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md">
                                <div className="form-group">
                                    <label>Designer</label>
                                    <input type="text" className="form-control" placeholder="Designer" id="designer"
                                    name="designer" value={this.state.designer} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="form-group">
                                    <label>Technical Director</label>
                                    <input type="text" className="form-control" placeholder="Technical Director" id="technicalDirector"
                                    name="technicalDirector" value={this.state.technicalDirector} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md">
                                <button type="submit" className="btn btn-secondary btn-block" onClick={this.cancelClicked}>Cancel</button>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md">
                                <button type="submit" className="btn btn-primary btn-block" onClick={this.createClicked}>Create</button>
                            </div>
                        
                        </div>

                        

                        { this.state.showErrorMessage && // show creation error
                        <div class="alert alert-warning" role="alert">{this.state.errorMessage}</div>
                        }

                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default CreateShowComponent