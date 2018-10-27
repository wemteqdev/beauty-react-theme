import React from 'react';
import assets from '../../assets';

class DefaultSearchBar extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render (){
        const placeholder = (this.props.placeholder)?this.props.placeholder:"";
        let className = this.props.className ;
        return(
            <div className = {`search-bar ${className}`}>
                <span className = "search-img">
                    <img alt="..." src = {assets.search40}/>
                </span>
                <div className = "search-bar-input-container">
                    <input 
                        className = "none-border-input"
                        type = "text"
                        name = "query"
                        placeholder = {placeholder}
                    />
                </div>
            </div>
        )
    }
}

export default DefaultSearchBar;