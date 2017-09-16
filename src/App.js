import React, { Component } from 'react';
import logo from './logo.svg';
 import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {isOn : true};
    }
    toggle = () => {
        this.setState({isOn: !this.state.isOn})
      }



    render() {
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <MyComponent name="Harshini" />
        </div>
        <p className="App-intro">
          Click Below
       </p>
       <button onClick = {this.toggle} className= "switch">
         {this.state.isOn? 'On' : 'Off'}
        </button>
      </div>
     );
   }
}

export default App;
