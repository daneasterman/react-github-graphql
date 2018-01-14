import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { text: "" };    
  }

  

  render() {
    return (
      <div className="App">

        <header className="App-header">
          
          <h1 className="App-title">GraphQL Github Client Example</h1>

        </header>
        <p className="App-intro">

        </p>

      </div>
    );
  }
}

export default App;
