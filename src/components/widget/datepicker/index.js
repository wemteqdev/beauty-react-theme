
import React from 'react';
import ReactDOM from 'react-dom';
import asset from '../../assets';
import OutSideEvent from '../searchbox/outSideEvent';

var DateUtilities = {
    pad: function(value, length) {
        while (value.length < length)
            value = "0" + value;
        return value;
    },

    clone: function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    },

    toString: function(date) {
        return  DateUtilities.pad((date.getMonth()+1).toString(), 2) + "/" + DateUtilities.pad(date.getDate().toString(), 2) +  "/" + date.getFullYear();
    },

    toDayOfMonthString: function(date) {
        return DateUtilities.pad(date.getDate().toString());
    },

    toMonthAndYearString: function(date) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[date.getMonth()] + " " + date.getFullYear();
    },

    moveToDayOfWeek: function(date, dayOfWeek) {
        while (date.getDay() !== dayOfWeek)
            date.setDate(date.getDate()-1);
        return date;
    },

    isSameDay: function(first, second) {
        return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
    },

    isBefore: function(first, second) {
        return first.getTime() < second.getTime();
    },

    isAfter: function(first, second) {
        return first.getTime() > second.getTime();
    }
};



class MonthHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: DateUtilities.clone(this.props.view),
            enabled: true
        }
        this.moveBackward = this.moveBackward.bind(this);
        this.moveForward = this.moveForward.bind(this);
        this.move = this.move.bind(this);
        this.enable = this.enable.bind(this);
    }

    moveBackward() {
        var view = DateUtilities.clone(this.state.view);
        view.setMonth(view.getMonth()-1);
        this.move(view, false);
    }

    moveForward() {
        var view = DateUtilities.clone(this.state.view);
        view.setMonth(view.getMonth()+1);
        this.move(view, true);
    }

    move(view, isForward) {
        // if (!this.state.enabled)
    	//     return;

    	this.setState({
    	    view: view,
    	    enabled: false
    	});

    	this.props.onMove(view, isForward);
    }

    enable() {
    	this.setState({ enabled: true });
    }

    render() {
        var enabled = this.state.enabled;
        const iclassname = (enabled)?"":"disabled";
        return (
            <div  className="month-header">
                <span className = "month-title">{DateUtilities.toMonthAndYearString(this.state.view)}</span>
                <div className = "arrow-group">
                    <span className  = "back-btn" className = {iclassname} onClick = {this.moveBackward}>
                        <i className = 'arrow up' onClick = {this.moveBackward}></i>
                    </span>
                    <span className  = "forward-btn" className = {iclassname} onClick = {this.moveForward}>
                        <i className = 'arrow down' onClick = {this.moveForward}></i>
                    </span>

                </div>

            </div>
        )
    }
}

class WeekHeader extends React.Component{
    render() {
        return React.createElement("div", {className: "week-header"},
            React.createElement("span", null, "Sun"),
            React.createElement("span", null, "Mon"),
            React.createElement("span", null, "Tue"),
            React.createElement("span", null, "Wed"),
            React.createElement("span", null, "Thu"),
            React.createElement("span", null, "Fri"),
            React.createElement("span", null, "Sat")
    	);
    }
}

class Weeks extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            view: DateUtilities.clone(this.props.view),
            other: DateUtilities.clone(this.props.view),
            sliding: null
        }
        
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
        this.getWeekStartDates = this.getWeekStartDates.bind(this);
        this.moveTo = this.moveTo.bind(this);
        this.moveTo = this.moveTo.bind(this);
    }
    
    componentDidMount() {

        const element = ReactDOM.findDOMNode(this.refs.current);
        element.addEventListener("transitionend", this.onTransitionEnd);
    }

    onTransitionEnd() {
    	this.setState({
            sliding: null,
    	    view: DateUtilities.clone(this.state.other)
    	});

    	this.props.onTransitionEnd();
    }

    getWeekStartDates(view) {
        view.setDate(1);
    	view = DateUtilities.moveToDayOfWeek(DateUtilities.clone(view), 0);

        var current = DateUtilities.clone(view);
        current.setDate(current.getDate()+7);

        var starts = [view],
    	    month = current.getMonth();

    	while (current.getMonth() === month) {
    	    starts.push(DateUtilities.clone(current));
            current.setDate(current.getDate()+7);
    	}

    	return starts;
    }

    moveTo(view, isForward) {
    	this.setState({
            sliding: isForward ? "down" : "up",
            other: DateUtilities.clone(view)
    	});
    }

    render() {
        const className1 = "current" + (this.state.sliding ? (" sliding " + this.state.sliding) : "");
        const className2 = "other" + (this.state.sliding ? (" sliding " + this.state.sliding) : "");

        return (
            <div className = 'weeks'>
                <div ref="current" className={className1}>
                    {this.renderWeeks(this.state.view)}
                </div>
                <div ref = "other" className = {className2}>
                    {this.renderWeeks(this.state.other)}
                </div>
            </div>
        )
    }

    renderWeeks(view) {
        var starts = this.getWeekStartDates(view),
            month = starts[1].getMonth();
    	return starts.map(function(s, i) {
    	    return React.createElement(Week, {key: i, start: s, month: month, selected: this.props.selected, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate});
    	}.bind(this));
    }
}

class Week extends React.Component{
    constructor(props){
        super(props);
        this.buildDays = this.buildDays.bind(this);
        this.isOtherMonth = this.isOtherMonth.bind(this);
        this.getDayClassName = this.getDayClassName.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.isDisabled = this.isDisabled.bind(this);


    }
    buildDays(start) {
        var days = [DateUtilities.clone(start)],
            clone = DateUtilities.clone(start);

        for (var i = 1; i <= 6; i++) {
            clone = DateUtilities.clone(clone);
            clone.setDate(clone.getDate()+1);
            days.push(clone);
        }
        return days;
    }

    isOtherMonth(day) {
        return this.props.month !== day.month();
    }

    getDayClassName(day) {
        var className = "day";
        if (DateUtilities.isSameDay(day, new Date()))
            className += " today";
        if (this.props.month !== day.getMonth())
            className += " other-month";
        if (this.props.selected && DateUtilities.isSameDay(day, this.props.selected))
            className += " selected";
        if (this.isDisabled(day))
    	    className += " disabled";
        return className;
    }

    onSelect(day) {
        if (!this.isDisabled(day))
            this.props.onSelect(day);
    }

    isDisabled(day) {
        var minDate = this.props.minDate,
    	    maxDate = this.props.maxDate;

    	return (minDate && DateUtilities.isBefore(day, minDate)) || (maxDate && DateUtilities.isAfter(day, maxDate));
    }

    render() {
        var days = this.buildDays(this.props.start);
        return React.createElement("div", {className: "week"},
            days.map(function(day, i) {
                return React.createElement("div", {key: i, onClick: this.onSelect.bind(null, day), className: this.getDayClassName(day)}, DateUtilities.toDayOfMonthString(day))
            }.bind(this))
    	);
    }
}

class Calendar extends React.Component{

    constructor(props){
        super(props);
        this.onMove = this.onMove.bind(this);
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
    }

    onMove(view, isForward) {
        this.refs.weeks.moveTo(view, isForward);
    }
    onTransitionEnd() {
    	this.refs.monthHeader.enable();
    }

    render() {
        const visible = (this.props.visible)?'calendar-show':'calendar-hide';
        const visibleClass = `calendar ${visible}`;
        return (
            <div className = {visibleClass}>
                <MonthHeader ref = 'monthHeader' view = {this.props.view} onMove = {this.onMove}/>
                <WeekHeader/>
                <Weeks ref = 'weeks' view = {this.props.view} selected = {this.props.selected} onTransitionEnd = {this.onTransitionEnd} onSelect = {this.props.onSelect} minDate = {this.props.minDate} maxDate=  {this.props.maxDate}/>
            </div>
        )
    }
}

class DatePicker extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            view: DateUtilities.clone(new Date()),
            selected: DateUtilities.clone(new Date()),
    	    minDate: null,
    	    maxDate: null,
    	    visible: false
        }

        this.parentsHaveClassName = this.parentsHaveClassName.bind(this);
        this.setMinDate = this.setMinDate.bind(this);
        this.setMaxDate = this.setMaxDate.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        this.handleOutClickSearchBar = this.handleOutClickSearchBar.bind(this);

    }

    componentDidMount() {
    	document.addEventListener("click", function(e) {
            if (this.state.visible && e.target.className !== "date-picker-trigger" && !this.parentsHaveClassName(e.target, "date-picker")){
                this.hide();
            }
    	}.bind(this));
    }

    parentsHaveClassName(element, className) {
    	var parent = element;
    	while (parent) {
            if (parent.className && parent.className.indexOf(className) > -1)
                return true;

            parent = parent.parentNode;
    }
    }

    setMinDate(date) {
        this.setState({ minDate: date });
    }

    setMaxDate(date) {
        this.setState({ maxDate: date });
    }

    onSelect(day) {
        this.setState({ selected: day });
        this.props.onSelect(day);
        this.hide();
    }

    show() {
        if(this.state.visible == true){
            this.setState({ visible: false });
        }else{
            this.setState({ visible: true });
        }
    }

    hide() {
        this.setState({ visible: false });
    }

    handleOutClickSearchBar(){
        this.setState({ visible: false });
    }

    render() {
        const selected = (this.props.date)?DateUtilities.toString(this.state.selected):"mm/dd/yyyy";
        return (
            <OutSideEvent onOutClick = {this.handleOutClickSearchBar}>
                <div className = "ardp-date-picker">
                    <div className = "date-picker-trigger"  readOnly= 'true' onClick = {this.show}>
                        {selected}
                        <img className = "icon-calcendar" src = {asset.calendar_s}/>
                    </div>
                    <Calendar visible = {this.state.visible} view = {this.state.view} selected = {this.state.selected} onSelect = {this.onSelect} minDate = {this.state.minDate} maxDate = {this.state.maxDate}/>
                </div>
            </OutSideEvent>
        );
    }
}

export default DatePicker;