import React from 'react';
import assets from '../../assets';

class NavSearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            clicked:false
        }
        this.onfocus = this.onfocus.bind(this);
    }

    onfocus(e){
        e.preventDefault();
        this.setState({clicked:true});
    }

    render(){
        const placeholder = (this.props.placeholder)?this.props.placeholder:"";
        const role = this.props.role;
        if(role == "right"){
            return(
                <div className = "nav-search-bar right">
                    <div className = "search-bar-input-container">
                        <input 
                            className = "none-border-input"
                            type = "text"
                            name = "query"
                            placeholder = {placeholder}
                            onFocus = {this.onfocus}
                        />
                    </div>
                    <span className = "search-img">
                        <img src = {assets.search40}/>
                    </span>
                </div>
            );
        }else{
            return(
                <div className = "nav-search-bar left">
                    <span className = "search-img">
                        <img src = {assets.search40}/>
                    </span>
                    <div className = "search-bar-input-container">
                        <input 
                            className = "none-border-input"
                            type = "text"
                            name = "query"
                            placeholder = {placeholder}
                            onFocus = {this.onfocus}
                        />
                    </div>
                </div>
            );
        }
    }

}

export default NavSearchBar;