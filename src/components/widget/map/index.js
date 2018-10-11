import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapPin from './mappin';
import Checkbox from '../checkbox';
import { connect } from 'react-redux';
import $ from 'jquery';
import assets from '../../assets';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 45,
                lng: -73
            },
            zoom: 11    
        }
        
        this.handleSearchMapOptChange = this.handleSearchMapOptChange.bind(this);
    }

    mapOptionsCreator(map) {
        return  {
            zoom: 12,
            center: {lat: 57.137694, lng:-104.718430},
            zoomControl: true,
            zoomControlOptions: {
                position: map.ControlPosition.RIGHT_TOP
            },
            fullscreenControl: false
        };
      }

    handleSearchMapOptChange(label, list){
        console.log(label, list);
    }

    convertText(cardinfo){
        if(cardinfo.category == 'business' || cardinfo.category == 'professional'){
            return (
                <div className = 'text'><span>${cardinfo.price[0]}</span><span>-</span><span>${cardinfo.price[1]}</span></div>
            )
        }

        if(cardinfo.category == 'deal'){
            return (
                <div className = 'text'><span>${cardinfo.price.current}</span></div>
            )
        }

        if(cardinfo.category == 'marketplace'){
            return (
                <div className = 'text'><span>{cardinfo.kind}</span><span> · </span><span>{cardinfo.subkind}</span></div>
            )
        }

        
    }

    renderMapPins(){
        const cardlist = this.props.filterResult;
        console.log(cardlist);

        

        return cardlist.map((cardinfo,index) => (
            <MapPin
                lat={cardinfo.location.lat}
                lng={cardinfo.location.lng}
                text={this.convertText(cardinfo)}
                hint = {cardinfo.hint}
                linkurl = "/"
                info = ""
            />
        ));
    }

    onClickZoomBtn(e){
        e.preventDefault();
        $(`button.gm-control-active[aria-label='${e.target.name}']`).trigger("click")
    }


    render() {
        const classname = (this.props.show)?'result-map':'result-map ola-hide';
        return (
            <div className = {classname}>
                <div className = 'search-as-move'>
                <Checkbox groups = {['Search as I move the map']} label = "Search as I move the map" handleCheckboxChange = {this.handleSearchMapOptChange} />
                </div>
                <button className = "zoom-btn-trigger" name = "Zoom in" onClick = {this.onClickZoomBtn}>
                    <img src = {assets.zoom_in}/>
                </button>
                <button className = "zoom-btn-trigger" name = "Zoom out" onClick = {this.onClickZoomBtn}>
                    <img src = {assets.zoom_out}/>
                </button>
                <GoogleMapReact
                    options = {this.mapOptionsCreator}
                    bootstrapURLKeys={{ key: 'AIzaSyD5NfkcVgbxns5Q_LAFklg3ATMbF_fOR9g' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                    >
                        {this.renderMapPins()}
                    </GoogleMapReact>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return  {
        filterResult: state.searchResult.filterResult,
    };
};

export default connect(mapStateToProps, null)(Map);