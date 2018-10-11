import React, { Component, PropTypes } from 'react';
import  assets from '../assets';
import ReactSlider from 'react-slider';

class PriceRangeSlider extends Component {

    constructor(props){
        super(props);
        this.state = {
            fromPrice: this.props.fromPrice,    
            toPrice: this.props.toPrice    
        }
        this.onChangePriceRange = this.onChangePriceRange.bind(this);
    }

    onChangePriceRange(val){

        const fromPrice  = val[0];
        const toPrice  = val[1];
        this.setState({
            fromPrice:fromPrice,
            toPrice:toPrice
        })
        this.props.onChangePriceRange(fromPrice, toPrice);
    }
    render() {
        const { fromPrice, toPrice } = this.props;
        const value = [parseInt(this.state.fromPrice), parseInt(this.state.toPrice)];
        console.log(value);
        return (
            <div className = 'ola-price-range'>
                <div className = "price-dynamic-bar"></div>
                <ReactSlider className = "price-slider" withBars = {true} barClassName = 'track' onChange = {this.onChangePriceRange} min = {0} max = {this.props.maxPrice} step = {1} value = {value}>
                    <div className="min price-handler"></div>
                    <div className="max price-handler"></div>
                </ReactSlider>
            </div>
        );
    }
}

export default PriceRangeSlider;