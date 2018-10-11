import React, { Component } from 'react';
import * as dummyData from '../../widget/dummyData';
import DefaultSearchBar from '../../widget/searchbox/defaultSearchBar';
import {Link} from 'react-router-dom';


class Categories extends Component {

    renderCategories(){
        const categories = dummyData.categories;
        const categoryList = categories.map((item, index)=>{
            const subCategoryList = item.items.map((subitem, j) => {

                const items = subitem.items.map((item, k) => {
                    return (
                        <li  key = {k}>
                            <Link to="/" className = "red-link">{item}</Link>
                        </li>
                    )
                })

                return (
                    <div className = "sub-category-block ola-col-category" key = {j}>
                        <div className = "header">{subitem.name}</div>
                        <div className = "body ola-row">
                            <ul className = "list-unstyled">
                                {items}
                            </ul>
                        </div>
                    </div>
                )
            })

            return (
                <div className = "category-block ola-col-6" key ={index}>
                    <div className = "header">{item.name}</div>
                    <div className = "body ola-row">
                        {subCategoryList}
                    </div>
                </div>
            )
        });

        return categoryList;
    }
    render(){
        return (
            <div className = "footer-categories">

                <div className = "title">
                    Find by category
                </div>

                <div className = "searchbbar-block">
                    <DefaultSearchBar placeholder = "Search Categories"/>
                </div>

                <div className = "category-list-block ola-row">
                    {this.renderCategories()}
                </div>
            </div>
        );
    }
}
export default Categories;