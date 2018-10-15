import React from 'react';
import ImageTitleDesMorelinkItem from './image-title-des-morelink-item';

class ImageWithDesList extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    renderItems(items, cols){

        const col_md = 'col-md-' + (12/cols);

        const lists = items.map((item, index)=>(
            <ImageTitleDesMorelinkItem
                title={item.title} 
                asset = {item.asset} 
                readmore = {item.readmore} 
                className = {`${col_md} col-sm-12`}
                description = {item.description}
                key = {index}
                />
        ))

        return lists;
    }

    render() {
        const {title,comment,items,cols} = this.props;
        return (
            <div className = {`itdm-list my-5`}>
                <div className = {comment?"title-comment":'title'}>{title}</div>
                { 
                    comment?(<div className = "comment">{comment}</div>):''    
                }
                <div className="row">
                    {this.renderItems(items, cols)}
                </div>
            </div>
        );
    }
}
export default ImageWithDesList;