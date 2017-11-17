import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import Item from './Item'
import Auth from '../../Authenticator'
import '../../App.css';

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
            marginBottom:'0px',
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

                <div className={'CardContainer'}>
                    <div>
                    <Item itemName="Mason Tapered Rapid Movement Chino"
                          brand="Banana Republic"
                          //description="I like apples."
                          price = {"98.00"}
                          score = {58}
                          image={process.env.PUBLIC_URL + 'pic1.jpg'} />
                    </div>
                    <div>
                    <Item itemName="Aiden Slim Rapid Movement Chino"
                          brand="Banana Republic"
                          //description="I like apples."
                          price = {"49.00"}
                          score = {178}
                          image={process.env.PUBLIC_URL + 'pic2.jpg'} />
                    </div>
                </div>
            </div>


        );
    }
}

export default Compare;