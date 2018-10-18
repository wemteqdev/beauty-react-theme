import React from 'react';
// import assets from '../../assets';
import CardItem from '../card-item';
import { connect} from 'react-redux';
// import searchResultActions from '../../../actions/searchResultActions';

class FilterItemList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    renderItmes = (arr) => {
        const colClass = (this.props.withmap)?'col-md-6 col-sm-12':'col-md-3 col-sm-6';
        const carditems =  arr.map((item,index) =>(
            <CardItem colClass = {colClass} cardinfo = {item} key={index}/>
        ));
        return (
            <div className="cardlist-container row">
                {carditems}
            </div>
        )
    }

    render() {
        const className = (this.props.withmap)?"result-list with-map":"result-list without-map";
        return (
            <div className = {className}>
                {this.renderItmes(this.props.filterResult)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        filterResult: state.searchResult.filterResult,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItemList);
