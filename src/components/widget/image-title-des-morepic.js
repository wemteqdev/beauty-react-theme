import React from 'react';
import assets from '../assets';

// import {
//     Link    
// } from 'react-router-dom';

class ImageTitleDesMorePic extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    renderMorepics(pics){
        var images = pics.map((item, index)=>{
            if(index < 3){
                return(
                    <img alt="..." src = {item} className = "more-pic" key = {index}/>
                )
            }
            return <div></div>
        })

        var count = (<div className = "more-count" key = {pics.length}>+{pics.length - 3}</div>);
        if(pics.length > 3){
            images = images.concat(count);
        }
        return images;
    }

    render() {

        const itemInfo = this.props.itemInfo;
        const className = this.props.className;

        return (
            <div className = {`${className} itdmp`}>
                <div>
                    <div className = "item-img" style = {
                            {background:`url(${itemInfo.asset})`}
                    }></div>
                </div>
                <div className = "category">{itemInfo.kind} · {itemInfo.subkind}</div>
                <div className = "title">
                    {itemInfo.title}
                </div>
                <div className = "description">
                    {itemInfo.description}
                </div>
                <div className = "more-pics-list">
                    {this.renderMorepics(itemInfo.pics)}
                </div>
                <div className = "comment-likes">
                    <div className = "comment-info">
                        <img alt="..." src = {assets.chat_s}/>
                        {itemInfo.comment}
                    </div>
                    <div className = "like-info">
                        <img alt="..." src = {assets.likes_s}/>
                        {itemInfo.likes}
                    </div>
                    <div className = "date">
                        {itemInfo.date}
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageTitleDesMorePic;