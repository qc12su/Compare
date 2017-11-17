import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import Item from './Item'
import Auth from '../../Authenticator'

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
        const signoutButtonStyle = {
            float: 'right'
        }

        const { isAuthenticated } = this.state;

        if (!isAuthenticated) {
            return <Redirect to={{
                pathname: '/login'}}/>
        }

        return (
            <div>
                <button onClick={this.signout} style={signoutButtonStyle}>Sign Out</button>

                <div>
                    <div>
                    <Item itemName="Mason Tapered Rapid Movement Chino"
                          brand="Banana Republic"
                          description="I like apples."
                          price = {"$9.99"}
                          score = {0}
                          image={process.env.PUBLIC_URL + 'pic1.jpg'} />
                    </div>
                    <div>
                    <Item itemName="Apple"
                          brand="Banana Republic"
                          description="I like apples."
                          price = {"$9.99"}
                          score = {0}
                          image={process.env.PUBLIC_URL + 'pic2.jpg'} />
                    </div>
                </div>
            </div>


        );
    }
}

export default Compare;