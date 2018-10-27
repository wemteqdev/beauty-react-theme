import React, { Component } from 'react';
import assets from '../../../assets';
import CheckBox from '../../../widget/checkbox';
import DefaultSearchBar from '../../../widget/searchbox/defaultSearchBar';

class ChooseFriendsPage extends Component {
    handleCheckboxChange = () => {
    }
    render(){
        return (
            <div className="sign-page choose-friends-page">
                <div className="close">
                    <img alt="..." src={assets.action_X_black_s}/>
                </div>
                <div className="container-fluid">
                    <div className="row title">
                        Choose Friends to Invite
                    </div>
                    <div className="row marginTop-24">
                        <DefaultSearchBar className = "w-100" placeholder = "Search Friends"/>
                    </div>
                    <div className = "friends-list marginTop-50">
                        <div className="row marginTop-24 d-flex justify-content-between">
                            <CheckBox label = "John Doe" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                            <span>1085438427@qq.com</span>
                        </div>
                        <div className="row marginTop-24 d-flex justify-content-between">
                            <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                            <span>1085438427@qq.com</span>
                        </div>
                        <div className="row marginTop-24 d-flex justify-content-between">
                            <CheckBox label = "John Doe" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]} disabled={true}/>
                            <span className="disabled">This contact couldn’t be imported</span>
                        </div>
                        <div className="row marginTop-24 d-flex justify-content-between">
                            <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                            <span>1085438427@qq.com</span>
                        </div>
                        <div className="row marginTop-24 d-flex justify-content-between">
                            <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                            <span>1085438427@qq.com</span>
                        </div>
                        <div className="row marginTop-24 d-flex justify-content-between">
                            <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                            <span>1085438427@qq.com</span>
                        </div>
                    </div>
                    <div className = "row marginTop-30 d-flex justify-content-between">
                        <div className="col-7 px-0 d-flex align-items-center">
                            <CheckBox label = "Check All" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        </div>
                        <div className="col-5 px-0">
                            <button className = "btn ola-btn-primary m-btn w-100">Send 1000 Invites</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChooseFriendsPage;