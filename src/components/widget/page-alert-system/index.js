import React from 'react';
import assets from '../../assets';

// import Proptypes from 'prop-types';
// import * as pagePathActons from '../../../actions/pagePathActions';

import { connect } from 'react-redux';
import * as http from '../../http';
import PageAlert from './pageAlert';



class PageAlertSystem extends React.Component {

    constructor(props) {
        super(props);
        this.onClickCloseBtn = this.onClickCloseBtn.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {
        
    }

    onClickCloseBtn(e) {
        e.preventDefault();
        this.props.handleClickCloseBtn();
    }

    render() {
        const alerdata = {
            description:"You purchased “whatever deal/product name” on 24.12.2018. Give back to the community and",
            viewLink:"/"
        }
        return (
            <PageAlert type = 'info' data = {alerdata}/>
        );
    }
}

const mapStateToProps = (state) => {
    return  {
        notify: ''
    };
};

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreatetors(actions, dispatch);
    return {
        handleClickCloseBtn:()=>{
            // dispatch(searchActions.clickSearchBar())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageAlertSystem);