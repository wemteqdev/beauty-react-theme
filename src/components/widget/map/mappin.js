import React from 'react';

class MapPin extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {lat, lng, text, hint} = this.props;
        const classname = (hint)?"pin-marker hinted":"pin-marker";
        return (
            <div className = {classname}
                lat={parseFloat(lat)}
                lng={parseFloat(lng)}
                >
                <span className = "down-arrow"></span>
                    {text}
            </div>
        );
    }
}


export default MapPin;