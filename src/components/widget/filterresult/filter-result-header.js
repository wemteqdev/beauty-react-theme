import React from 'react';
import assets from '../../assets';
import Switch from '../switch';

class FilterResultHeader extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(val){
        this.props.changeShowMapMode(val);
    }

    render() {
        return (
            <div className = "filter-result-header">
                <div className = 'filter-info'>
                    <img alt="..." src = {assets.spotlight}/>
                    <div className = "frh-comment">Over 50,000 guest reviews in Wellington, with an average of 4.8 out of 5 stars.</div>
                </div>
                <div className = "showmap-switch">
                    <span>Show Map</span>
                    <Switch on = {true} onChange = {this.onChange}/>
                </div>
            </div>
        )
    }
}

export default FilterResultHeader;