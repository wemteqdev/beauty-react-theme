import React from 'react';
import { connect} from 'react-redux';
import * as searchActions from '../../../../actions/searchActions';

class ServiceFilterOption extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        const opt = {
            ...this.props.filteropt,
            activeService:this.props.name,
        }

        // console.log(opt);
        this.props.handleServiceFilterChange(opt);
    }

    render() {
        const activeservice = this.props.filteropt.activeService;
        return (
            <li className = {`filter-service-item ola-nav-item ${(activeservice === this.props.name)?'active':''}`}>
                <button className = "btn ola-btn-default ola-btn-category s-btn" onClick = {this.onClick} name = {this.props.name}>{this.props.name}</button>
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
        handleServiceFilterChange:(opt)=>{
            dispatch(searchActions.changeFilterOption(opt))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceFilterOption);