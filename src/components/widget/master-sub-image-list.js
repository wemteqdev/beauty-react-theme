import React, { Component } from 'react';


class SubImageItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const title = this.props.item.title;
        const asset = this.props.item.asset;
        const oriDes = this.props.item.description;
        const layoutclass = `ola-col-${12 / this.props.cols}`;

        return (
            <div className = {layoutclass}>
                <div className = {`master-sub-image-item`}>
                    <div className = "item-img" style = {
                                {background:`url(${asset})`}
                    }></div>
                    <div className = "title">
                        {title}
                    </div>
                    <div className = "description">
                        {oriDes}
                    </div>
                </div>
            </div>
        );
    }
}


class MastImageSubImageList extends Component {

    constructor(props) {
        super(props);
        
    }

    renderItems(items, cols){
        const subitemList = items.map((item, index)=>(
            <SubImageItem cols = {cols} item = {item} key = {index}/>
        ));

        return subitemList;
    }

    render(){
        const {mainitem, subitems, title} =  this.props;
        return (
            <div className = {`mast-sub-image-list ${this.props.containerClass}`}>
                <div className = "title">
                    {title}
                </div>
                <div className = "ola-row">
                    <div className = "ola-col-12">
                        <div className = "main-info">
                            <div className = "item-img" style = {
                                {background:`url(${mainitem.asset})`}
                            }></div>
                            <div className = "description">{mainitem.description}</div>
                        </div>
                    </div>
                </div>
                <div className = "ola-row rp-20">
                    {this.renderItems(subitems,3)}
                </div>
            </div>
        )
    }
}

export default MastImageSubImageList;