import React, { Component } from 'react';
import Landing from './components/Landing.js'

class App extends Component {
  componentDidMount(){
    console.log(process.env)
  }

  render() {
    return (
      <div className="App">
      <Landing />
      </div>
    );
  }
}

export default App;
