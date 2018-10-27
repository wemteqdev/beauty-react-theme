import React from "react";
import assets from '../assets';

class OlaSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:""
        }
    }

    onChange = (e) => {
        this.setState({text:e.target.value});
    }

    dropDown(){
    }

    render(){
        const type = (this.props.type)?this.props.type:"text";
        const placeholder = (this.props.placeholder)?this.props.placeholder:"";
        let className = this.props.className ;

        return(
            <div className = {`ola-select-container ${className}`}>
                <input className = "ola-select w-100" type = {type} placeholder = {placeholder} value = {this.state.text} onChange = {this.onChange}/>
                <img alt="..." src = {assets.select_dropdown_icon_black} onClick = {this.dropDown} className="dropdown"/>
            </div>
        )
    }
}

export default OlaSelect;