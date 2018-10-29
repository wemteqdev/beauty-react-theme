import React from 'react';
import assets from '../assets';
import CardItem from './card-item';
import { Arrow } from './icons';

import {Link} from 'react-router-dom';

import {isMobile} from 'react-device-detect';

class ProductDealsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carditmes:[]
        }
    }

    componentDidMount(){
        const data = this.getCardItems(this.props.category, this.props.keyword);
        this.setState({carditmes:data});
    }

    getCardItems = (category, keyword) => {
        const item = {
            imgurl:assets.cardpicture,
            category:"marketplace",
            kind:'spa',
            subkind:'sauna',
            rating:1,
            id:1,
            location:{
                city:"Toronto",
                street:"Ontario",
                distance:"24 KM",
            },  
            title:"Sparx Asian Beauty Product For Your Familyc",
            price:[450,300],
            expireDays:2,
            customers:3856,
            friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
        }
        const data = [item,item,item,item];
        return data;
    }
    renderItmes = (arr) => {
        let colClass = 'col-lg-3 col-md-6 col-sm-12';
        if (isMobile) {
            colClass = 'col-12';
        }
        const carditems =  arr.map((item,index) =>(
            <CardItem colClass = {colClass} cardinfo = {item} key={index}/>
        ));
        let scroll_x_container = "";
        if (isMobile) {
            scroll_x_container = "flex-nowrap scroll-x";
        }
        return (
            <div className={`cardlist-container row ${scroll_x_container}`}>
                {carditems}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className = "list-title">{this.props.title}</div>
                {this.renderItmes(this.state.carditmes)}
                { 
                    this.props.moreLink? (<Link className = "view-all-list-link" to = '/'>{this.props.moreLinkName} <Arrow dir = "right"/> </Link>):''    
                }
            </div>
        );
    }
}


export default ProductDealsList;