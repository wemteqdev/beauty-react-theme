import React from 'react';
import { connect} from 'react-redux';
import * as searchActions from '../../../actions/searchActions';

class SearchCategory extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    onClick(e) {
        e.preventDefault();
        this.props.handleClickCategory(e.target.name);
    }

    render() {
        const activeCategory = this.props.activeCategory.toLowerCase();
        return (
            <div className = "search-category">
                <ul className = "list-unstyled nav">
                    <li className = {`ola-nav-item ${(activeCategory === 'all')?'active':''}`}>
                        <button className = "btn ola-btn-default ola-btn-category s-btn" onClick = {this.onClick} name = "all">all</button>
                    </li>
                    <li className = {`ola-nav-item ${(activeCategory === 'business')?'active':''}`}>
                        <button className = "btn ola-btn-default ola-btn-category s-btn" onClick = {this.onClick} name = "business">business</button>
                    </li>
                    <li className = {`ola-nav-item ${(activeCategory === 'professionals')?'active':''}`}>
                        <button className = "btn ola-btn-default ola-btn-category s-btn" onClick = {this.onClick} name = "professionals">professionals</button>
                    </li>
                    <li className = {`ola-nav-item ${(activeCategory === 'deals')?'active':''}`}>
                        <button className = "btn ola-btn-default ola-btn-category s-btn" onClick = {this.onClick} name = "deals">deals</button>
                    </li>
                    <li className = {`ola-nav-item ${(activeCategory === 'marketplace')?'active':''}`}>
                        <button className = "btn ola-btn-default ola-btn-category s-btn" onClick = {this.onClick} name = "marketplace">marketplace</button>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        activeCategory: state.searchbar.activeCategory,
    };
};

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreatetors(actions, dispatch);
    return {
        handleClickCategory:(activeCategory)=>{
            dispatch(searchActions.clickCategory(activeCategory))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchCategory);