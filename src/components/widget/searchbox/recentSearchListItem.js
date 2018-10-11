import React from 'react';
import assets from '../../assets';
import * as searchActions from '../../../actions/searchActions';
import * as pagePathActons from '../../../actions/pagePathActions';
import { connect } from 'react-redux';
import * as http from '../../http';

class RecentSearchListItem extends React.Component {

    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onMouseOver(e){
        e.preventDefault();
        this.props.changeFocus(this.props.focusindex);
    }

    onClick(e){
        e.preventDefault();
        http.saveLatesSearchResult(this.props, (result)=>{
            this.props.saveRecentSearechResult(result);
        });

        const path = `/search?query=${JSON.stringify({title:this.props.title})}`;
        this.props.transToPath(path)
        this.props.selectSearchedItem(this.props.title)
    }

    render() {

        const title = this.props.title;
        const created = this.props.created;
        const linkurl = this.props.linkurl;
        const classname = (this.props.highlight)?'highlight recent-search-result-list':'recent-search-result-list';

        return (
            <li>
                <div className = {classname} onMouseOver = {this.onMouseOver} onClick = {this.onClick}>
                    <span>
                        <img src = {assets.clock_s}/>
                    </span>
                    <div className = "title">{title}</div>
                    <div className = "created-date">{created}</div>
                </div>                
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreatetors(actions, dispatch);
    return {
        changeFocus:(focus)=>{
            dispatch(searchActions.changeFocus(focus))
        },
        selectSearchedItem:(title) => {
            dispatch(searchActions.selectSearchedItem(title))
        },
        saveRecentSearechResult:(recent) => {
            dispatch(searchActions.saveRecentSearechResult(recent));
        },
        transToPath:(path) => {
            dispatch(pagePathActons.transToPath(path))
        }

    }
}

export default connect(null, mapDispatchToProps)(RecentSearchListItem);