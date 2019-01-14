import React, { Component } from 'react';
import Message from './Message.js';
import '../App.css';

const MessageList = (props) => {
    return (
            props.messages.map(message => {
                return <Message message={message} messageRead={props.messageRead} messageStarred={props.messageStarred} messageLabel={props.messagelabel}></Message>
            })
            
        
    );
  
}

export default MessageList;
