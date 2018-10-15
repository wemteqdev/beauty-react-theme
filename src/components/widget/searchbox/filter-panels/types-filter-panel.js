import React from 'react';
import { connect} from 'react-redux';
// import * as searchActions from '../../../../actions/searchActions';
import ServiceFilterOption from './service-filter-option';
import CheckBox from '../../checkbox';

class TypesFilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.clearFilterOption = this.clearFilterOption.bind(this);
        this.state = {groups:this.props.filteropt.activeCategory}
    }

    handleCheckboxChange(label, newgroups) {

        const newopt = {
            ...this.props.filteropt,
            activeCategory:newgroups
        }
        this.props.onChangeFilterOpt(newopt);
        this.setState({group: newgroups});
    }

    clearFilterOption(){
        const newopt = {
            ...this.props.filteropt,
            activeCategory:[]
        }
        this.props.onChangeFilterOpt(newopt);
        this.setState({groups:[]});
    }

    render() {
        // const filteropt = this.props.filteropt;
        return (
            <div className = "filter-dropdown-panel types-panel">
                <div className = "service-title">Select Service</div>
                <div className = "fileroption-service">
                    <ul className = "list-unstyled nav">
                        <ServiceFilterOption name = "all"/>
                        <ServiceFilterOption name = "hair"/>
                        <ServiceFilterOption name = "makeup"/>
                    </ul>
                </div>
                <div className = "category-title">Category</div>
                <div className = "category-group ola-row rp-14">
                    <div className = "ola-col-4">
                        <CheckBox label = "spa fitness" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                        <CheckBox label = "spa fitness1" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.state.groups}/>
                        <CheckBox label = "spa fitness2" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness3" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness4" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                    </div>
                    <div className = "ola-col-4">
                        <CheckBox label = "spa fitness5" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness6" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness7" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness8" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness9" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                    </div>
                    <div className = "ola-col-4">
                        <CheckBox label = "spa fitness10" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness11" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness12" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness13" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                        <CheckBox label = "spa fitness14" handleCheckboxChange = {this.handleCheckboxChange} groups = {this.props.filteropt.activeCategory}/>
                    </div>
                </div>
                <button className = "btn ola-btn-bordered s-btn" onClick = {this.clearFilterOption}>Clear Filters</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        filteropt: state.searchResult.filteropt,
    };
};


export default connect(mapStateToProps, null)(TypesFilterPanel);