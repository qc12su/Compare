import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';
import Auth from '../../Authenticator';

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
        const loginBoxStyle = {
            textAlign: 'center',
            display: 'inline-block',
            marginTop: '150px'
        }

        const { isAuthenticated } = this.state;

        if (isAuthenticated) {
            return <Redirect to={{
                pathname: '/compare'}}/>
        }

        return (
            <div style={loginBoxStyle}>
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
                    <RaisedButton label="Login" primary={true} onClick={this.login}/>
                </div>
            </div>
        );
    }
}

export default Login;