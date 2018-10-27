import React from "react";
import assets from '../assets';

class OlaTabButton extends React.Component {
    removeButton = () => {
    }

    render(){
        let label = this.props.label;
        let className = this.props.className ;

        return(
            <button className = {`ola-tagbutton ${className}`}>
                <div className="float-left mr-2">{label}</div>
                <img alt="..." src = {assets.action_x} onClick = {this.removeButton}/>
            </button>
        )
    }
}

export default OlaTabButton;