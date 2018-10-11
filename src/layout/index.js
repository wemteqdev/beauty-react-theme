import React, { Component } from 'react'
import Header from './header'
//import Footer from './footer'

class Layout extends Component {
    render () {
        return(
            <div className="container">
                <Header/>
                { this.props.children }
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Layout