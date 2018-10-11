import React, { Component } from 'react';
import assets from '../assets';
class NotifyItem extends Component {
    render(){
        const {notifyinfo} = this.props;
        return (
            <div className = "notify-item-container">
                <div className = "notify-item">
                    <img className = "img-circle user-img" src = {notifyinfo.asset}/>
                    <div className = "content">
                        <div className = "title">{notifyinfo.title}</div>
                        <div className = "description">{notifyinfo.description}</div>
                    </div>
                </div>
                <div className = "call_message">
                    <button className = "btn ola-btn ola-btn-bordered s-btn btn-w-200">Call or Message</button>
                </div>
            </div>
        );
    }
}
export default NotifyItem;