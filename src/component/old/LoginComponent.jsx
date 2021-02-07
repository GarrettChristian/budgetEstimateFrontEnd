import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class LoginComponent extends Component {

constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            showErrorMessage: false,
            errorMessage: 'Login Error'
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        // if(this.state.username==='user' && this.state.password==='password'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.setState({showSuccessMessage:true})
        //     this.setState({hasLoginFailed:false})
        // }
        // else {
        //      this.setState({showSuccessMessage:false})
        //      this.setState({hasLoginFailed:true})
        // }
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/shows`)
            }).catch(() => {
                this.setState({ showErrorMessage: true })
                this.setState({ errorMessage: 'Login Error' })
            })
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-3"></div>

                    <div className="mx-auto col mt-5 border-custom">
                        <h2>Login</h2>

                        {/* Email */}
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="username"
                            name="username" value={this.state.username} onChange={this.handleChange} />
                        </div>

                        {/* Password */}
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="password"
                            name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.loginClicked}>Submit</button>

                        <p className="forgot-password text-right">
                            <a href="new/user/">Create Account</a>
                        </p>

                        { this.state.showErrorMessage && // login error message
                        <div className="alert alert-warning" role="alert">{this.state.errorMessage}</div>
                        }

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

        )
    }
}

export default LoginComponent