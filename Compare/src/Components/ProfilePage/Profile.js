import React, { Component } from 'react';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname : "hi",
            lastname : "bye"
        }
    }

    makeRequest(){

        var userid = 1;
        const url = 'http://localhost:3001/getUser?userid=' + userid;
        alert(url + " request");
        fetch(url, {
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.username);
            this.setState({
                firstname: data.username
            })
        });
    }

    componentDidMount(){
        {this.makeRequest();}
    }
    render() {

        return (
            <div>/
                {this.state.firstname + " "}
                {this.state.lastname}
            </div>
        );
    }
}

export default Profile;