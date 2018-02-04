import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Header'

class App extends Component {
  constructor(props){
    super(props)
  //}
  // closeJumbo(){
  //   this.refs.jumbotron.css('display', 'none');
  // }
  // setName(e){

  }
  render() {
    return (
      <div className="jumbotron" ref="jumbotron">
        <h1 className="display-4">Welcome</h1>
        <h3 className="lead">Enter your name to begin your Jukebox Experience</h3>
        <hr className="my-4"></hr>     
        <p >
          <input type="text" placeholder="Your Name"/><a className="btn btn-primary btn-lg" href="#" role="button">Start Listening</a>
        </p>
      </div>
    );
  }
}

export default App;
