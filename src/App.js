import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component {
constructor(){
  super()
  this.state={
    onOff: false
  }
}

  forward(val){
    if (val === 'w' & this.state.onOff === false){
      this.setState({onOff: true})
  axios.post(`/api/forward/?button=${val}`).then(res => console.log(res))
    }
}
stop(){
  this.setState({onOff: false})
  axios.get(`/api/stop/?stop=stop`).then(res => console.log(res))
    
}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input onKeyDown={e => this.forward(e.key)} onKeyUp={() => this.stop()} type="box"  />
        </p>
      </div>
    );
  }
}

export default App;
