import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class NewUserComponent extends Component {

constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            passwordConfirm: '',
            showErrorMessage: false,
            errorMessage: 'Error Creating Your Account'
        }

        this.handleChange = this.handleChange.bind(this)
        this.createClicked = this.createClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    createClicked() {

        var account = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        AuthenticationService
            .creatAccount(account)
            .then((response) => {
                if (response.data.success) {
                    this.setState({ showErrorMessage: false })
                    this.login()
                } else {
                    this.setState({ showErrorMessage: true })
                    this.setState({errorMessage: "Account creation failed"})
                }
                
            }).catch(() => {
                this.setState({ showErrorMessage: true })
                this.setState({errorMessage: "Account creation failed"})
            })
    }

    login() {
        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
            this.props.history.push(`/shows`)
        }).catch(() => {
            this.setState({ showErrorMessage: true })
            this.setState({errorMessage: "Account creation failed to login"})
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>

                    <div className="mx-auto col mt-5 border-custom">
                        <h2>Create Account</h2>
                        
                        {/* Name First and Last */}
                        <div className="row">
                            <div className="col-md">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" id="firstname"
                                    name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" id="lastName"
                                    name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="username"
                            name="username" value={this.state.username} onChange={this.handleChange} />
                        </div>

                        {/* Password  */}
                        <div className="row">
                            <div className="col-md">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" id="password"
                                    name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>
                            </div>
                            
                            <div className="col-md"> 
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm Password" id="passwordConfirm" 
                                    name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </small>

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.createClicked}>Submit</button>

                        { this.state.showErrorMessage && // Account creation error
                        <div class="alert alert-warning" role="alert">{this.state.errorMessage}</div>
                        }

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}

export default NewUserComponent