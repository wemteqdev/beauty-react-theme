import React, { Component } from 'react'
import SiteTitle from '../components/widgets/SiteTitle'
import SearchBox from '../components/widgets/SearchBox'

class Home extends Component {
    render() {
        return(
            <div className="listyourbusiness-page">
                <div className="row">
                <SiteTitle></SiteTitle>
                <SearchBox></SearchBox>
                </div>
            </div>
        )
    }
}

export default Home