import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Client from './Client'

class App extends Component {
  constructor () {
    super()
    this.callTest = this.callTest.bind(this)
    this.state = {
      result: {},
      message: ''
    }
  }

  callTest () {
    Client.get('/api/test', (result) => {
      this.setState({ result })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Welcome</h2>
        </div>
        <div style={{padding: '20px'}}>
          <button type='button' onClick={this.callTest}>
            Get some data!
          </button>
          <br/>
          <pre style={{maxWidth: '400px', margin: 'auto', textAlign: 'left'}}>
            RESULT: {JSON.stringify(this.state.result, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}

export default App
