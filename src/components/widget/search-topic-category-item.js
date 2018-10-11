import React from 'react';
import assets from '../assets';
import {Link} from 'react-router-dom';

class SearchTopicCateogryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    renderItems(items){
        const itemlist = items.map((item, index)=>(
            <li>
                <Link to = "/help-topic" className = "red-link">{item}</Link>
            </li>
        ));
        return itemlist;
    }

    render() {
        const categoryInfo = this.props.categoryInfo;
        const className = this.props.className + " help-topic-category-item";
        return (
            <div className = {className}>
                <div className = "item-title">{categoryInfo.title}</div>
                <ul className = "item-list list-unstyled">
                    {this.renderItems(categoryInfo.items)}
                </ul>
                <div className = "view-all">
                    <Link to = "/">
                        view all
                        <span className = "ola-icon arrow-right">
                            <img src = {assets.dropdown_filled_red}/>
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
}
export default SearchTopicCateogryItem;