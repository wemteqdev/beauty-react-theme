import React, { Component } from 'react';
import MainNavBar from '../widget/nav-bar/main-nav-bar';

class MainHeader extends Component {
    render() {
        return (
            <div className = "main-header">
                <MainNavBar/>
            </div>
        );
    }
}

export default MainHeader;
