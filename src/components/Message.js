import React, { Component } from 'react';
import '../App.css';

let Message = (props) =>  {
    return (
        <div className="messageList">
            <div className={props.message.read ? "row message read" : "row message unread" }onClick={() => props.messageRead(props.message.id)}>
                <div className="col-xs-1">

                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox"
                            // onChange={() => this.props.markAsSelected(this.props.message.id)}
                            // checked={(typeof this.props.message.selected !== "undefined") && this.props.message.selected === true ? 'checked' : ""}
                             />
                        </div>
                        <div className="col-xs-2">
                            <i className= {props.message.star ? "star fa fa-star" : "star fa fa-star-o"}onClick={() => props.messageStarred(props.message.id)}></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    <span className= {props.message.label ? "label label-warning" : "label label-warning"}onClick={() => props.messageLabel(props.message.id)}></span>
                    <a href="#">
                        {props.message.subject}
                    </a>
                </div>
            </div>
        </div>
    );
  }


export default Message;
