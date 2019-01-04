import React, { Component } from 'react';
import Toolbar from './components/Toolbar.js';
import MessageList from './components/MessageList.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [1,2,3]
    }
  }

  render() {
    return (
      <div className="app">
        <Toolbar></Toolbar>
        <MessageList
          messages={this.state.messages}>
        </MessageList>
      </div>
    );
  }
}

export default App;
