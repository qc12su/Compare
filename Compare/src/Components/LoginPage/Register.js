import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Row, Col} from 'react-bootstrap';

const rowStyle = {
     margin: "5px", 
     verticalAlign: "center"
}

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          username: '', 
          password: '', 
          email: '',
          usernameError: '',
          emailError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleChange(key) {
        return function (e) {
          var state = {};
          state[key] = e.target.value;
          this.setState(state);
        }.bind(this);
    }

    handleSubmit(event) {
        var data = {
            "username": this.state.username,
            "password": this.state.password,
            "email": this.state.email
        }

        fetch('http://localhost:3000/userAPI/users',{
            method: "post",
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) =>{
            console.log(response.status);
            if (response.status == 208){
                this.setState({
                    usernameError: "Duplicate username."
                })
            }
            if (response.status == 226){
                this.setState({
                    emailError: "Duplicate email."
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        event.preventDefault();
    }
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                /*check fields*/
                //disabled={false}
                onClick={this.handleSubmit}
            />,
        ];

        var redText = {
            color: 'red'
        };

        return (
            <div>
                <RaisedButton label="Register" className={"LoginPageButton"}
                              onClick={this.handleOpen} />
                <Dialog title="Register" style = {{textAlign:"left"}} actions={actions} modal={true} open={this.state.open}>
                     <form>
                        <Grid fluid ={true}>
                            <Row style ={rowStyle}>
                                <div className = "col-md-2 col-md-offset-3">
                                Username: </div>
                                <div className="col-md-2">
                                    <input path = "username" value={this.state.username} onChange= {this.handleChange('username')} />
                                    <div style = {redText}>{this.state.usernameError}</div>
                                </div>
                            </Row>
                            <Row style ={rowStyle}>
                                <div className="col-md-2 col-md-offset-3">
                                Password: </div>
                                <div className="col-md-2">
                                    <input type="password" path = "password"
                                    value={this.state.password} 
                                    onChange= {this.handleChange('password')}/>
                                </div>
                            </Row>
                            <Row style ={rowStyle}>
                                <div className="col-md-2 col-md-offset-3">
                                Email: </div>
                                <div className="col-md-2">
                                    <input
                                    path = "email"
                                    value={this.state.email} 
                                    onChange= {this.handleChange('email')} />
                                    <div style = {redText}>{this.state.emailError}</div>
                                </div>
                            </Row>
                        </Grid>
                      </form>
                </Dialog>
            </div>
        );
    }
}