import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Auth from '../../authenticator';

class Compare extends Component {
    constructor(props){
        super(props);
        this.state={
            isAuthenticated: Auth.isAuthenticated
        }
    }

    signout = () => {
        Auth.signout(() => {
            this.setState({ isAuthenticated: false })
        })
    }

    render() {
        const { isAuthenticated } = this.state;

        if (!isAuthenticated) {
            return <Redirect to={{
                pathname: '/login'}}/>
        }

        return (
            <div>
                <label>COMPARE</label>
                <button onClick={this.signout}>Sign Out</button>
            </div>


        );
    }
}

export default Compare;