import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import * as pagePathActons from '../../actions/pagePathActions';

const history = createHistory();
class BasePage extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        console.log(window.location.href);
        console.log("will mount");
    }
    componentWillUnmount() {
        
    }
    componentDidUpdate() {
        
    }

    render() {
        return (
            <h1>test</h1>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        transToPath:(path) => {
            dispatch(pagePathActons.transToPath(path))
        }
    }
}

export default connect(null, mapDispatchToProps)(BasePage);