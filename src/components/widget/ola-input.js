import React from "react";
import assets from '../assets';

class OlaInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:""
        }
        this.removeText = this.removeText.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({text:e.target.value});
    }

    removeText(){
        // console.log(this.state.text);
        this.setState({text:""});
    }

    render(){
        const type = (this.props.type)?this.props.type:"text";
        const placeholder = (this.props.placeholder)?this.props.placeholder:"";
        const removeIconClass = `remove-text-icon ${(this.state.text.length > 0)?'close-btn-show':'close-btn-hide'}`;
        let className = this.props.className ;

        return(
            <div className = {`ola-input-container ${className}`}>
                <input className = "ola-input w-100" type = {type} placeholder = {placeholder} value = {this.state.text} onChange = {this.onChange}/>
                <span className = {removeIconClass}>
                    <img alt="..." src = {assets.action_X_black_s} onClick = {this.removeText}/>
                </span>
            </div>
        )
    }
}

export default OlaInput;