import React, { Component } from 'react';
import Toolbar from './components/Toolbar.js';
import MessageList from './components/MessageList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar></Toolbar>
        <MessageList></MessageList>
      </div>
    );
  }
}

export default App;
