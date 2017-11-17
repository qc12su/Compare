import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import Auth from '../../authenticator';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            isAuthenticated: Auth.isAuthenticated
        }
    }

    login = () => {
        Auth.authenticate(() => {
            this.setState({ isAuthenticated: true })
        })
    }

    render() {
        const { isAuthenticated } = this.state;

        if (isAuthenticated) {
            return <Redirect to={{
                pathname: '/compare'}}/>
        }

        return (
            <div>
                <TextField
                    hintText="Username"
                    floatingLabelText="Username"
                    onChange = {(event,newValue) => this.setState({username:newValue})}
                /><br/>

                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                /><br/>

                <div>
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;