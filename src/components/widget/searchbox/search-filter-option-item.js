import React from 'react';
import { connect} from 'react-redux';
import * as searchActions from '../../../actions/searchActions';
import * as searchResultActions from '../../../actions/searchResultActions';
import DateFilterPanel from './filter-panels/date-filter-panel';
import PriceFilterPanel from './filter-panels/price-filter-panel';
import TypesFilterPanel from './filter-panels/types-filter-panel';
import SortFilterPanel from './filter-panels/sort-filter-panel';
import OutSideEvent from './outSideEvent';
import moment from 'moment';
import assets from '../../assets';
import * as dummyData from '../dummyData';



class SearchFilterOptionsItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.handleOutClickPanel = this.handleOutClickPanel.bind(this);
        this.onChangeFilterOpt = this.onChangeFilterOpt.bind(this);
    }

    onClick(e){
        const opt = {
            ...this.props.filteropt,
            active:(this.props.filteropt.active == this.props.name)?null:this.props.name
        }
        this.props.handleChangeFilterOption(opt);
    }

    handleOutClickPanel(panelname){
        if(this.props.filteropt.active == panelname){
            this.props.handleOutClickPanel(panelname);
        }
    }

    onChangeFilterOpt(newopt){
        this.props.handleChangeFilterOption(newopt);
        this.getSearchResult();
    }
    
    getSearchResult(){
        this.props.saveSearchResult(dummyData.filteredData);
    }
    
    renderPanel = (name) => {
        
        if(name == 'date') {
            return<DateFilterPanel onChangeFilterOpt = {this.onChangeFilterOpt}/>
        }
        if(name == 'price') {
            return<PriceFilterPanel onChangeFilterOpt = {this.onChangeFilterOpt}/>
        }
        if(name == 'types') {
            return<TypesFilterPanel onChangeFilterOpt = {this.onChangeFilterOpt}/>
        }
        if(name == 'sort') {
            return;
        }
    }

    render() {
        const activeoption = this.props.filteropt.active;
        var filtername = this.props.name;
        if(this.props.filteropt.fromDate && this.props.filteropt.toDate && this.props.name == 'date'){
            filtername = `${moment(this.props.filteropt.fromDate).format("MMM D")} - ${moment(this.props.filteropt.toDate).format("MMM D")}`;
        }

        return (
            <li className = {`filter-option-item ola-nav-item ${(activeoption == this.props.name)?'active':''}`}>
                <OutSideEvent onOutClick = {() => this.handleOutClickPanel(this.props.name)}>
                    <div>
                        <button className = "btn ola-btn-default ola-btn-category s-btn" onClick = {this.onClick} name = {this.props.name}>{filtername}</button>
                        {this.renderPanel(this.props.name)}        
                    </div>
                </OutSideEvent>
            </li>
        )
    }
}


const mapStateToProps = (state) => {
    return  {
        filteropt: state.searchResult.filteropt,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeFilterOption:(opt)=>{
            dispatch(searchActions.changeFilterOption(opt))
        },
        handleOutClickPanel:(panelname)=>{
            dispatch(searchActions.outclickFilterPanel(panelname))
        },
        saveSearchResult:(items)=>{
            dispatch(searchResultActions.saveSearchResult(items))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterOptionsItem);