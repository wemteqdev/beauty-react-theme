import React from 'react';
import assets from '../assets';
import CardItem from './card-item';
import { Arrow } from './icons';

import {Link} from 'react-router-dom';

class CardList extends React.Component {

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
            category:"business",
            kind:'spa',
            subkind:'sauna',
            verified:true,
            rating:3,
            id:1,
            title:"Elite Spa In Your Own Home And Beyond With Olafic",
            location:{
                city:"Toronto",
                street:"Ontario",
                distance:"24 KM",
            },
            price:[50,100],
            customers:3856,
            friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
            following:true
        }
        const data = [item,item,item];
        console.log(data);
        return data;
    }

    renderItmes = (arr) => {
        const carditems =  arr.map((item,index) =>(
            <CardItem colClass = 'ola-col-4' cardinfo = {item} key={index}/>
        ));
        return (
            <div className="cardlist-container ola-row rp-14">
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


export default CardList;