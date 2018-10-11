import React, { Component, PropTypes } from 'react';
import  assets from '../../assets';

class Switch extends Component {

    constructor(props){
        super(props);
        this.state = {
            on: this.props.on,    
        }
        this.toggleSwitchChange = this.toggleSwitchChange.bind(this);
    }

    toggleSwitchChange = () => {
        const { onChange, on } = this.props;
        this.setState(({ on }) => (
        {
            on: !on,
        }
        ));

        onChange(!this.state.on);
    }

    render() {
        const bgtoggle = (this.state.on)?assets.switchToggleOn:assets.switchToggleOff;
        const spos = (this.state.on)?assets.switchPosOn:assets.switchPosOff;

        const bgClass = (this.state.on)?'switch-bg on':'switch-bg off';
        const sposClass = (this.state.on)?'switch-pos on':'switch-pos off';

        return (
            <div  className="ola-switch" onClick = {this.toggleSwitchChange}>
                {this.state.on}
                <img className = {bgClass} src = {bgtoggle}/>
                <img className = {sposClass} src = {spos}/>
            </div>
        );
    }
}

export default Switch;