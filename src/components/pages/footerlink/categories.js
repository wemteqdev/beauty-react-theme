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
                    <div className = "sub-category-block col-6" key = {j}>
                        <div className = "header row">{subitem.name}</div>
                        <div className = "body row">
                            <ul className = "list-unstyled">
                                {items}
                            </ul>
                        </div>
                    </div>
                )
            })

            return (
                <div className = "category-block col-md-6 col-sm-12" key ={index}>
                    <div className = "container">
                        <div className = "header row">{item.name}</div>
                        <div className = "body row">
                            {subCategoryList}
                        </div>
                    </div>
                </div>
            )
        });

        return categoryList;
    }
    render(){
        return (
            <div className = "footer-categories mt-5 py-5">

                <div className = "title">
                    Find by category
                </div>

                <div className = "searchbbar-block">
                    <DefaultSearchBar placeholder = "Search Categories"/>
                </div>

                <div className = "category-list-block container">
                    <div className="row">
                        {this.renderCategories()}
                    </div>
                </div>
            </div>
        );
    }
}
export default Categories;