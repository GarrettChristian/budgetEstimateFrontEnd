import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class LoginComponent extends Component {

constructor(props) {
        super(props)

        this.state = {
            username: 'user',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
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
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    render() {
        return (
            <div class="container">
                <div class="row justify-content-center align-self-center">

    
                <div className="d-flex flex-column justify-content-center">
                    {/* <h1 class="text-center">Login</h1>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <p class="text-center">Email:</p>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <br></br>
                    <p class="text-center">Password:</p>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br></br>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>                */}
                          <div className="form-group">
                     <label>Email address</label>
                     <input type="email" className="form-control" placeholder="Enter email" />
                 </div>

                 <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Enter password" />
                 </div>

                 <div className="form-group">
                     <div className="custom-control custom-checkbox">
                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                     </div>
                 </div>

                 <button type="submit" className="btn btn-primary btn-block">Submit</button>
                 <p className="forgot-password text-right">
                     Forgot <a href="#">password?</a>
                 </p>
                    </div>
                </div>
            </div>

            // <form>
            //     {/* <div class="col w-25 p-3 justify-content-center"> */}
            //         {/* <h1>Login</h1>
            //         {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
            //         {this.state.showSuccessMessage && <div>Login Sucessful</div>}
            //         <p>Email:</p>
            //         <br></br> 
            //         <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            //         <br></br>
            //         Password:
            //         <br></br>
            //         <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            //         <br></br>
            //         <br></br>
            //         <button className="btn btn-success" onClick={this.loginClicked}>Login</button> */}

            //     <h3>Sign In</h3>

            //     <div className="form-group">
            //         <label>Email address</label>
            //         <input type="email" className="form-control" placeholder="Enter email" />
            //     </div>

            //     <div className="form-group">
            //         <label>Password</label>
            //         <input type="password" className="form-control" placeholder="Enter password" />
            //     </div>

            //     <div className="form-group">
            //         <div className="custom-control custom-checkbox">
            //             <input type="checkbox" className="custom-control-input" id="customCheck1" />
            //             <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            //         </div>
            //     </div>

            //     <button type="submit" className="btn btn-primary btn-block">Submit</button>
            //     <p className="forgot-password text-right">
            //         Forgot <a href="#">password?</a>
            //     </p>
            //     {/* </div> */}
            // </form>
        )
    }
}

export default LoginComponent