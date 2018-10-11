import React from 'react';
import assets from '../assets';

class Arrow extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const dirClass = "ola-icon arrow-" + this.props.dir;
        return (
            <span className = {dirClass}>
                <img src = {assets.arrowdown}/>
            </span>
        );
    }
}

class Social extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var iconimg = assets.linkedin;
        switch(this.props.name){
            case 'message':
                iconimg = assets.message;
            break;
            case 'news':
                iconimg = assets.news;
            break;
            case 'facebook':
                iconimg = assets.facebookBlack;
            break;
            case 'instagram':
                iconimg = assets.instagramBlack;
            break;
            case 'twitter':
                iconimg = assets.twitterBlack;
            break;
            case 'linkedin':
                iconimg = assets.linkedin;
            break;
        }

        const iconClass = "ola-icon social-icon";

        return (
            <span className = {iconClass}>
                <img src = {iconimg}/>
            </span>
        );
    }
}

export { Arrow, Social }