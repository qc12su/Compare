import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavigationBar from './Components/CommonTheme/NavigationBar';
import Login from './Components/LoginPage/Login';
import Compare from './Components/ComparePage/Compare';
import Profile from './Components/ProfilePage/Profile';

import './App.css';

class App extends Component {

  render() {
      return (
        <MuiThemeProvider>
            <NavigationBar/>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route exact path="/login" component={Login} />
                         <Route exact path="/userprofile" component={Profile}/>
                        /*user feed*/
                        <Route exact path="/compare" component={Compare}/>
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
