import React from 'react';
import ReactSlider from 'react-slider';
import asset from '../../assets';
import OutSideEvent from '../searchbox/outSideEvent';
// import moment, { calendarFormat } from 'moment';


class TimePickerPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hour:'12',
            min:'30'
        }
        this.onChangeHours = this.onChangeHours.bind(this);
        this.onChangeMins = this.onChangeMins.bind(this);
    }



    onChangeHours(hour) {
        this.setState({hour:hour});
        this.props.onChangeTime({...this.state, hour:hour});
    }

    onChangeMins(min) {
        this.setState({min:min});
        this.props.onChangeTime({...this.state, min:min});
    }

    render() {  
        const visible = (this.props.visible)?'timepicker-show':'timepicker-hide';
        const visibleClass = `timepicker-panel ${visible}`;
        return (
            <div className = {visibleClass}>
                <div className = "selected-time">{this.state.hour} : {this.state.min}</div>
                <div className = "time-gage-number">
                    <span>00</span>
                        <div className = "lines-group">
                            <span className = 'line'></span>
                        </div>
                    <span className = 'medium'>12</span>
                        <div className = "lines-group">
                            <span className = 'line'></span>
                        </div>
                    <span>24</span>
                </div>
                <ReactSlider className = "timepicker-slider" withBars = {true} barClassName = 'track' onChange = {this.onChangeHours} min = {0} max = {24} step = {1} value = {parseInt(this.state.hour, 10)}>
                    <div className="time-picker-handler"></div>
                </ReactSlider>

                <div className = "time-gage-number">
                    <span>00</span>
                        <div className = "lines-group">
                            <span className = 'line'></span>
                        </div>
                    <span className = 'medium'>30</span>
                        <div className = "lines-group">
                            <span className = 'line'></span>
                        </div>
                    <span>59</span>
                </div>

                <ReactSlider className = "timepicker-slider" withBars = {true} barClassName = 'track' onChange = {this.onChangeMins} min = {0} max = {60} step = {1} value = {parseInt(this.state.min, 10)}>
                    <div className="time-picker-handler"></div>
                </ReactSlider>
            </div>
        )
    }

}

class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            time: props.time
        }
        this.onChangeTime = this.onChangeTime.bind(this);
        this.handleOutClickTimePicker = this.handleOutClickTimePicker.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    onChangeTime(time){
        this.props.onChangeTime(time);
        this.setState({time:time});
        // console.log(time);
    }

    show() {
        if(this.state.visible === true){
            this.setState({ visible: false });
        }else{
            this.setState({ visible: true });
        }
    }

    hide() {
        this.setState({ visible: false });
    }

    handleOutClickTimePicker(){
        this.hide();
    }

    render() {

        var timestring = "h/m";
        if(this.props.time){
            timestring = `${this.state.time.hour}/${this.state.time.min}`;
        }
        return (
            <OutSideEvent onOutClick = {this.handleOutClickTimePicker}>  
                <div className = "ola-time-picker">
                    <div className = "time-picker-trigger" onClick = {this.show}>
                        {timestring}
                        <img alt="..." className = "icon-calcendar" src = {asset.clock_m}/>
                    </div>
                    <TimePickerPanel visible = {this.state.visible} onChangeTime = {this.onChangeTime}/>
                </div>
            </OutSideEvent>
        );
    }

}



export default TimePicker;