import React from 'react';
import ImageTitleDesMorePic from '../../../widget/image-title-des-morepic';
import * as dummyData from '../../../widget/dummyData';
import SearchBarWithBorderBottom from '../../../widget/searchbox/searchbar-with-bottom-border';
import CheckBox from '../../../widget/checkbox';
import { connect} from 'react-redux';
import * as searchActions from '../../../../actions/searchActions';
import OlaPagenation from '../../../widget/ola-pagenation';

class News extends React.Component{

    constructor(props) {
        super(props);
        this.state = {groups:this.props.filteropt.activeCategory}
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.clearFilterOpt = this.clearFilterOpt.bind(this);
    }

    handleCheckboxChange(label, newgroups){
        const newopt = {
            ...this.props.filteropt,
            activeCategory:newgroups
        }
        this.props.onChangeFilterOpt(newopt);
        this.setState({
            groups: newgroups
        });
    }

    clearFilterOpt(){
        const newopt = {
            ...this.props.filteropt,
            activeCategory:[]
        }
        this.props.onChangeFilterOpt(newopt);
        this.setState({
            groups: []
        });
    }

    onChangePage(page){
        // console.log(page);
    }

    render(){
        return(
            <div className = "news row">
                <div className = "news-list-block col-md-8 col-sm-12">
                    <div className = "title">News</div>
                    <div className = "news-list row">
                        <ImageTitleDesMorePic itemInfo = {dummyData.news[0]} className = "col-lg-6 col-md-12"/>
                        <ImageTitleDesMorePic itemInfo = {dummyData.news[1]} className = "col-lg-6 col-md-12"/>
                        <ImageTitleDesMorePic itemInfo = {dummyData.news[2]} className = "col-lg-6 col-md-12"/>
                        <ImageTitleDesMorePic itemInfo = {dummyData.news[3]} className = "col-lg-6 col-md-12"/>
                    </div>

                    <OlaPagenation total = {50} current = {1} onChange = {this.onChangePage}/>
                </div>
                <div className = "filter-block col-md-4 col-sm-12">
                    <div className = "search-bar-block">
                        <SearchBarWithBorderBottom placeholder = "Search News" width = {308}/>
                    </div>
                    <div className = "filter-option-block">
                        <div className = "title">Filters</div>
                        <div className = "category-label">Categories</div>
                        <div className = "row filter-options">
                            <div className = "col-6">
                                <CheckBox label = "Business Travel" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Business Travel2" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Business Travel3" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Business Travel4" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Business Travel5" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Business Travel6" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Business Travel7" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                            </div>
                            <div className = "col-6">
                                <CheckBox label = "Bus Travel8" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Bus Travel9" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Bus Travel10" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Bus Travel11" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Bus Travel12" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Bus Travel13" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                                <CheckBox label = "Bus Travel14" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                            </div>
                        </div>
                        <div className = "filter-btn-group">
                            <button className ="btn ola-btn-bordered s-btn btn-w-144" onClick = {this.clearFilterOpt}>Clear Filters</button>
                            <button className ="btn ola-btn-bordered s-btn btn-w-144">Apply Filters</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        filteropt: state.searchNewsResult.filteropt,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilterOpt:(opt)=>{
            dispatch(searchActions.changeNewsFilterOption(opt))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);