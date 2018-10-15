import React, { Component } from 'react';
import  assets from '../../assets';

class Checkbox extends Component {

    constructor(props){
        super(props);
        this.state = {
            isChecked: (props.groups.indexOf(props.label) >= 0),    
        }
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;
        this.setState(({ isChecked }) => (
        {
            isChecked: !isChecked,
        }
        ));

        var list = this.props.groups;
        var item = this.props.label;
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        } else {
            list.push(item);
        }

        handleCheckboxChange(label, list);
    }

    render() {
        const { label, groups } = this.props;
        const isChecked =  (groups.indexOf(label) >= 0);

        return (
            <div  className="checkbox" onClick = {this.toggleCheckboxChange}>
                <img alt="..." src = {(isChecked)?assets.checked:assets.unchecked} />
                <div className = 'label'>{label}</div>
            </div>
        );
    }
}

export default Checkbox;