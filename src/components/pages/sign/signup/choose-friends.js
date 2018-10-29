import React, { Component } from 'react';
import CheckBox from '../../../widget/checkbox';
import DefaultSearchBar from '../../../widget/searchbox/defaultSearchBar';

import Modal from '../../modal';

import {Link} from 'react-router-dom';
import {isMobile} from 'react-device-detect';

class ChooseFriendsPage extends Component {
    handleCheckboxChange = () => {
    }
    renderMobilePage = () =>{
        return (
            <div className="sign-page choose-friend-page px-0">
                <div className="title marginTop-50">
                    Invite Friends
                </div>
                <div className="marginTop-24">
                    <DefaultSearchBar className = "w-100" placeholder = "Search Friends"/>
                </div>
                <div className = "marginTop-30 d-flex justify-content-between">
                    <CheckBox label = "Check All" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                    <Link to="/invite-friends" className = "import-contacts">Import Contacts</Link>
                </div>
                <div className = "marginTop-44">
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "John Doe" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "John Doe" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]} disabled={true}/>
                        <span className="disabled">Can’t import contact</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                </div>
            </div>
        );
    }
    renderWebPage = () =>{
        return (
            <div className="sign-page px-4">
                <div className="title">
                    Invite Friends
                </div>
                <div className="marginTop-24">
                    <DefaultSearchBar className = "w-100" placeholder = "Search Friends"/>
                </div>
                <div className = "friends-list marginTop-50">
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "John Doe" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "John Doe" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]} disabled={true}/>
                        <span className="disabled">This contact couldn’t be imported</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                    <div className="marginTop-24 d-flex justify-content-between">
                        <CheckBox label = "Samir Duran" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <span>1085438427@qq.com</span>
                    </div>
                </div>
                <div className = "marginTop-30 d-flex justify-content-between">
                    <div className="col-7 px-0 d-flex align-items-center">
                        <CheckBox label = "Check All" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                    </div>
                    <div className="col-5 px-0">
                        <button className = "btn ola-btn-primary m-btn w-100">Send 1000 Invites</button>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        if (!isMobile) {
            return (
                <Modal id="choosefriendsModal">
                    {this.renderWebPage()}
                </Modal>
            );
        } else {
            return this.renderMobilePage()
        }
    }
}
export default ChooseFriendsPage;