import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome</h1>
        <h3 className="lead">Enter your name to begin your Jukebox Experience</h3>
        <hr className="my-4"></hr>     
        <p className="lead">
          <input type="text" placeholder="Type Words"/><a className="btn btn-primary btn-lg" href="#" role="button">Start Listening</a>
        </p>
      </div>
    );
  }
}

export default App;
