import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import OlaInput from './ola-input';
import OlaSearchSelect from './ola-search-select';


class SubmitIssueForm extends Component {

    render(){
        return(
            <div className = "submit-issue-form">
                
                <div className = "form-control">
                    <div className = "label">Issue Category</div>
                    <OlaSearchSelect/>
                </div>

                <div className = "form-control">
                    <div className = "label">Subject</div>
                    <OlaInput type = "text" placeholder = "Type Here..."/>
                </div>

                <div className = "form-control">
                    <div className = "label">Message</div>
                    <OlaInput type = "text" placeholder = "Type Here..."/>
                </div>
                <button className = "btn ola-btn-primary m-btn btn-w-200 submit-btn">Send Message</button>
            </div>
        )
    }
}

export default SubmitIssueForm;