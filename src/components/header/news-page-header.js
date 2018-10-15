import React, { Component } from 'react';
import NewsPageNavBar from '../widget/nav-bar/news-page-nav-bar';

class NewsPageHeader extends Component {
    render() {
        return (
            <div className = "news-page-header">
                <NewsPageNavBar/>
            </div>
        );
    }
}

export default NewsPageHeader;
