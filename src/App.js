import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar'
import './index.css'

class App extends Component{
  render(){  
    return (
      <div className="App">
        <Navbar title="Github Finder" />
      </div>
    );
  }
}
export default App;
