import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Row, Col} from 'react-bootstrap';

const rowStyle = {
     margin: "5px", 
     verticalAlign: "center"
}

function addUser(data) {
                 return fetch('/addUser', {
                     method: 'POST',
                     mode: 'CORS',
                     body: JSON.stringify(data),
                     headers: {
                         'Content-Type': 'application/json'
                     }
                 }).then(res => {
                     return res;
                 }).catch(err => err);
}

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          username: '', 
          password: '', 
          email: ''
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
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        addUser(data);
        alert('Hello ' + data.username + ', your password is: ' + data.password + ' and  your email is ' + data.email);
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

        return (
            <div>
                <RaisedButton label="Register" className={"LoginPageButton"}
                              onClick={this.handleOpen} />
                <Dialog title="Register" style = {{textAlign:"left"}} actions={actions} modal={true} open={this.state.open}>
                     <form>
                        <Grid fluid ={true}>
                            <Row style ={rowStyle}>
                                <div class = "col-md-2 col-md-offset-3">
                                Username: </div>
                                <div class="col-md-2">
                                    <input path = "username" value={this.state.username} onChange= {this.handleChange('username')} />
                                </div>
                            </Row>
                            <Row style ={rowStyle}>
                                <div class="col-md-2 col-md-offset-3">
                                Password: </div>
                                <div class="col-md-2">
                                    <input type="password" path = "password"
                                    value={this.state.password} 
                                    onChange= {this.handleChange('password')}/>
                                </div>
                            </Row>
                            <Row style ={rowStyle}>
                                <div class="col-md-2 col-md-offset-3">
                                Email: </div>
                                <div class="col-md-2">
                                    <input
                                    path = "email"
                                    value={this.state.email} 
                                    onChange= {this.handleChange('email')} />
                                </div>
                            </Row>
                        </Grid>
                      </form>
                </Dialog>
            </div>
        );
    }
}