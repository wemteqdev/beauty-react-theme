import React from 'react';
import { connect} from 'react-redux';
import * as searchActions from '../../../actions/searchActions';
import FilterItemList from './filter-item-list';
import Map from '../map';
import FilterResultHeader from './filter-result-header';
import OlaPagenation from '../ola-pagenation';
import assets from '../../assets';

class FilteredResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingMap:true
        }
        this.changeShowMapMode = this.changeShowMapMode.bind(this);
    }

    changeShowMapMode(val){
        console.log(val);
        this.setState({showingMap:val});
    }

    onChangePage(page){
        console.log(page);
    }
    render() {
        return (
            <div className = "filtered-result">
                <FilterResultHeader changeShowMapMode = {this.changeShowMapMode}/>
                <div className = 'filered-result-body'>
                    <FilterItemList withmap = {this.state.showingMap}/>
                    <Map show = {this.state.showingMap}/>
                </div>
                <OlaPagenation total = {100} current = {1} onChange = {this.onChangePage}/>
            </div>
        )
    }
}

export default FilteredResult;