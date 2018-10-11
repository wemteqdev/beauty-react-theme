import React, { Component, PropTypes } from 'react';
import  assets from '../../assets';
import {
    Link    
} from 'react-router-dom';

class PageAlert extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            isOpen: true    
        }
        this.closeAlert = this.closeAlert.bind(this);

    }

    closeAlert = () => {
        this.setState({isOpen:false});
    }

    render() {

        const className = `ola-page-alert ${this.props.type} ola-${(this.state.isOpen)?'show':'hide'}`

        return (
            <div className = {className}>
                <div className = 'text'>
                    {this.state.data.description}
                    <Link className = "viewlink" to = {this.state.data.viewLink}>
                        Leave A Review
                        <span className = "ola-icon arrow-right">
                            <img src = {assets.dropdown_arrow_medium_white}/>
                        </span>
                    </Link>
                </div>
                <span className = 'close-icon' onClick = {this.closeAlert}>
                    <img src = {assets.action_X_white}/>
                </span>
            </div>
        );
    }
}

export default PageAlert;