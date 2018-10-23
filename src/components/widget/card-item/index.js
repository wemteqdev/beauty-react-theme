import React from 'react';
// import assets from '../../assets';
import BusinessItem from './business-item';
import DealItem from './deal-item';
import MarketplaceItem from './marketplace-item';
import ProfessionalItem from './professional-item';

import * as searchResultActions from '../../../actions/searchResultActions';
import { connect } from 'react-redux';

class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    renderContent(cardinfo){
        switch(cardinfo.category){
            case 'business':
                return (
                    <BusinessItem cardinfo = {cardinfo}/>
                )
            case 'deal':
                return (
                    <DealItem cardinfo = {cardinfo}/>
                )
            case 'marketplace':
                return (
                    <MarketplaceItem cardinfo = {cardinfo}/>
                )
            case 'professional':
                return (
                    <ProfessionalItem cardinfo = {cardinfo}/>
                )
            default:
                return;
        }
    }

    onMouseOver(e){
        e.preventDefault();
        const lists = this.props.filterResult;
        const cardinfo = this.props.cardinfo;

        var i = lists.indexOf(cardinfo);
        var arr = lists.map((item, index)=>{
            if(index === i){
                item.hint = true;    
            }else{
                item.hint = false;
            }
            return item;
        });
        this.props.handleHoverCardItem(arr);

    }

    render() {
        const className = `${this.props.colClass} ${this.props.dMode}`
        const cardinfo = (this.props.cardinfo)?this.props.cardinfo:this.state;

        return (
            <div className = {className} onmouseover = {this.onMouseOver}>
                {this.renderContent(cardinfo)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return  {
        filterResult: state.searchResult.filterResult,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleHoverCardItem:(items)=>{
            // console.log(items);
            dispatch(searchResultActions.hoverCardItem(items))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);