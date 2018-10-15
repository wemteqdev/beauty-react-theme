import React from 'react';
import { connect} from 'react-redux';
// import * as searchActions from '../../../../actions/searchActions';
import DatePicker from '../../datepicker';
import TimePicker from '../../datepicker/timepicker';

class DateFilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.clearFilterOption = this.clearFilterOption.bind(this);
        this.onChangeFromDate = this.onChangeFromDate.bind(this);
        this.onChangeToDate = this.onChangeToDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
    }

    clearFilterOption(e){
        const newopt = {
            ...this.props.filteropt,
            fromDate:null,
            toDate:null,
            time:null
        };
        this.props.onChangeFilterOpt(newopt);
    }
    onChangeFromDate(day){
        const newopt = {
            ...this.props.filteropt,
            fromDate:day
        };
        // console.log(newopt);
        this.props.onChangeFilterOpt(newopt);
    }

    onChangeToDate(day){
        const newopt = {
            ...this.props.filteropt,
            toDate:day
        };


        this.props.onChangeFilterOpt(newopt);
    }

    onChangeTime(time){

        const newopt = {
            ...this.props.filteropt,
            time:time
        };
        this.props.onChangeFilterOpt(newopt);
    }

    render() {
        return (
            <div className = "filter-dropdown-panel date-panel">
                <div className = "from">From</div>
                <DatePicker onSelect = {this.onChangeFromDate} date = {this.props.filteropt.fromDate}/>
                <div className = "to">To</div>
                <DatePicker onSelect = {this.onChangeToDate} date = {this.props.filteropt.toDate}/>
                <div className = "Time">Time</div>
                <TimePicker onChangeTime = {this.onChangeTime} time = {this.props.filteropt.time}/>
                <button className = "btn ola-btn-bordered s-btn clear-filter-btn" onClick = {this.clearFilterOption}>Clear Filters</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        filteropt: state.searchResult.filteropt,
    };
};


export default connect(mapStateToProps, null)(DateFilterPanel);