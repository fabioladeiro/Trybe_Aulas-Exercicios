import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess'

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='about'>About</Link>
        <br></br>
        <Link to='users'>Users</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" render={(props) => <Users {...props} greetingMessage={'Good Morning'} />} />
          <Route exact path="/" component={Home} />
        </Switch>
        <StrictAccess></StrictAccess>
      </BrowserRouter>
    );
  }
}

export default App;