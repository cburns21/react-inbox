import React, { Component } from 'react';
import '../App.css';

let Message = (props) =>  {
    return (
        <div clasName="messageList">
            <div className="row message read">
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" />
                        </div>
                        <div className="col-xs-2">
                            <i className={false ? "star fa fa-star-o" : "star fa fa-star"}></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    <a href="#">
                        Here is some message text that has a bunch of stuff
                    </a>
                </div>
            </div>
        </div>
    );
  }


export default Message;
