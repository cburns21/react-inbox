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

  componentDidMount(){
    fetch('http://localhost:8082/api/messages')
    .then(function(response){
      return response.json()
    })
    .then(myJson => {
      this.setState({
        messages: myJson
      })
    });
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
