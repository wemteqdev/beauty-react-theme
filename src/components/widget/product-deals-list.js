import React from 'react';
import assets from '../assets';
import CardItem from './card-item';
import { Arrow } from './icons';

import {Link} from 'react-router-dom';

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
        const carditems =  arr.map((item,index) =>(
            <CardItem colClass = 'ola-col-3' cardinfo = {item} key={index}/>
        ));
        return (
            <div className="cardlist-container ola-row rp-6">
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