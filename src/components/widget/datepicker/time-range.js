import React, { Component } from 'react';
import TimePicker from './timepicker';

class TimeRange extends Component {
    onChangeTime = () => {
    }
    render(){
        let time_from = this.props.time_from;
        let time_to = this.props.time_to;
        return (
            <div className = "time-range">
                <div className = "relation-link"></div>
                <div className = "time-block">
                    <div className = "time-from">
                        <div className="when">From</div>
                        <div className="marginTop-12">
                            <TimePicker onChangeTime = {this.onChangeTime} time = {time_from} className="w-100"/>
                        </div>
                    </div>
                    <div className = "time-to marginTop-24">
                        <div className="when">To</div>
                        <div className="marginTop-12">
                            <TimePicker onChangeTime = {this.onChangeTime} time = {time_to} className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TimeRange;