import React from 'react';
import ImageTitleDesMorelinkItem from './image-title-des-morelink-item';

class ImageWithDesList extends React.Component {

    constructor(props) {
        super(props);
    }

    renderItems(items, cols, itemClass){

        const lists = items.map((item, index)=>(
            <ImageTitleDesMorelinkItem
                title={item.title} 
                asset = {item.asset} 
                readmore = {item.readmore} 
                className = {itemClass}
                cols = {cols}
                description = {item.description}
                key = {index}
                />
        ))

        return lists;
    }

    render() {
        const {title,comment,items,rp,cols,containerClass,itemClass} = this.props;
        return (
            <div className = {`itdm-list ${containerClass}`}>
                <div className = {comment?"title-comment":'title'}>{title}</div>
                { 
                    comment?(<div className = "comment">{comment}</div>):''    
                }
                <div className={`ola-row rp-${rp}`}>
                    {this.renderItems(items, cols,itemClass)}
                </div>
            </div>
        );
    }
}
export default ImageWithDesList;