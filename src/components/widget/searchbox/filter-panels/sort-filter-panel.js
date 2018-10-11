import React from 'react';
import { connect} from 'react-redux';
import * as searchActions from '../../../../actions/searchActions';

class SortFilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.props.handleSearchFilterClickOption(this.props.name);
    }
    render() {
        const activeoption = this.props.activeoption;
        return (
            <div className = "filter-dropdown-panel">
                <h1>this is blank page</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        activeoption: state.searchResult.filteropt.active,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFilterClickOption:(opt)=>{
            dispatch(searchActions.changeFilterOption(opt))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SortFilterPanel);