import React, { Component } from 'react';
import logo from './logo.svg';
import './dashboard.css';
import Nav from './Nav';
import Sidebar from  './Sidebar';


class App extends Component {
  render() {
    return (
      <body>
        <Nav />
       <Sidebar />
      </body> 
    );
  }
}

export default App;
