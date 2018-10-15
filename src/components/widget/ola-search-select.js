import React from 'react';
// import OlaInput from './ola-input';
import assets from '../assets';
import OutSideEvent from '../widget/searchbox/outSideEvent';
import * as dummyData from '../widget/dummyData';


class OlaSearchSelect extends React.Component {
    
    constructor() {
        super();
        this.state = {
            selectedOption: '',
            isOpen:false,
            categories:[],
            searchFocusIndex:0
        } 
        this.onFocusInput = this.onFocusInput.bind(this);
        this.onOutClick = this.onOutClick.bind(this);
        this.renderCategoryItems = this.renderCategoryItems.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });

    }
    onFocusInput(e){
        e.preventDefault()
        this.setState({isOpen:true});
        this.getCategories();
    }

    getCategories(){
        const categories = dummyData.availabeCategories;
        this.setState({categories:categories});
    }
    selectCategory(item){
        // console.log(item);
        this.setState({selectedOption:item,isOpen:false});
    }

    renderCategoryItems(){
        const categories = this.state.categories;
        var self = this;
        const renderedItems = categories.map((item, index)=>(
            <li name = {item} className = {(index === self.state.searchFocusIndex)?'focused':''} onClick = {()=>{
                self.selectCategory(item)
            }} key={index}>{item}</li>
        ));
        return renderedItems;
    }

    onChange(e) {
        e.preventDefault();
        this.setState({selectedOption:e.target.value})
    }

    onKeyDown(e) {

        var focus = this.state.searchFocusIndex;

        if (e.keyCode === 40) {
            focus = Math.min(this.state.categories.length - 1, focus + 1);
            this.setState({searchFocusIndex:focus});

        } else if (e.keyCode === 38){
            focus = Math.max( 0, focus - 1);
            this.setState({searchFocusIndex:focus});

        } else if (e.keyCode === 13) {
            this.setState({selectedOption:this.state.categories[focus], searchFocusIndex:0, isOpen:false});

        } else if (e.keyCode === 27){
            this.setState({selectedOption:'', searchFocusIndex:0, isOpen:false});
        } else {
            this.setState({searchFocusIndex:0, isOpen:true});
        }
    }

    onOutClick(){
        this.setState({isOpen:false});
    }

    render() {
        const { isOpen } = this.state;
        return (
            <OutSideEvent onOutClick = {this.onOutClick}>
                <div className = 'ola-auto-select'>
                    <input className = "ola-input" type = 'text' placeholder = "Typpe Here..." onFocus = {this.onFocusInput} onChange = {this.onChange} onKeyDown = {this.onKeyDown} value = {this.state.selectedOption}/>
                    <span className = {`drop-down-icon ${(isOpen)?'up':'down'}`}>
                        <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                    </span>
                    <div className = {`select-options ${(isOpen)?'select-show':'select-hide'}`}>
                        <ul className = 'list-unstyled'>
                            {this.renderCategoryItems()}
                        </ul>
                    </div>
                </div>
            </OutSideEvent>
        )
    }
}

export default OlaSearchSelect;
