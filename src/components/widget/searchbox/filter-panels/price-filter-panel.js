import React from 'react';
import { connect} from 'react-redux';
import * as searchActions from '../../../../actions/searchActions';
import PriceRangeSlider from '../../price-range-slider';

// price-frequency-bar
class FrequencyBar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderBars(values){

        const bars =  values.map((val,index) =>(
            <div className = "bar" style = {{height:`${val}px`}} key = {index}></div>
        ));
        return (
            <div className = "price-frequency">
                {bars}
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderBars(this.props.barValues)}
            </div>
        );
    }
}
class PriceFilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.clearFilterOption = this.clearFilterOption.bind(this);
        this.onChangePriceRange = this.onChangePriceRange.bind(this);
    }
    clearFilterOption(e){
        const newopt = {
            ...this.props.filteropt,
            fromPrice:0,
            ToPrice:0,
            averagePrice:0
        };
        this.props.onChangeFilterOpt(newopt);
    }

    onChangePriceRange(fromPrice, toPrice){
        const newopt = {
            ...this.props.filteropt,
            fromPrice:fromPrice,
            ToPrice:toPrice,
            averagePrice:(fromPrice + toPrice) / 2
        };
        this.props.onChangeFilterOpt(newopt);
    }
    
    render() {
        return (
            <div className = "filter-dropdown-panel price-panel">
                <div className = "price-range">${this.props.filteropt.fromPrice} - ${this.props.filteropt.toPrice}+</div>
                <div className = "price-average-text">The average price for a service is ${this.props.filteropt.averagePrice}</div>
                <FrequencyBar barValues = {[81,20,50,90,80,81,20,50,90,80,81,20,50,90,80,81,20,50,90,80,81,20,50,90,80,81,20,50,90,80,81,20,50,90,80,81]}/>
                <PriceRangeSlider fromPrice = {this.props.filteropt.fromPrice} toPrice = {this.props.filteropt.toPrice} maxPrice = {this.props.filteropt.maxPrice} onChangePriceRange = {this.onChangePriceRange}/>
                <button className = "btn ola-btn-bordered s-btn clear-filter-btn" onClick = {this.clearFilterOption}>Clear Filters</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        filteropt: state.searchResult.filteropt,
    };
};


export default connect(mapStateToProps, null)(PriceFilterPanel);