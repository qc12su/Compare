import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Login from './Components/LoginPage/Login';
import Compare from './Components/ComparePage/Compare';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/compare" component={Compare}/>
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
