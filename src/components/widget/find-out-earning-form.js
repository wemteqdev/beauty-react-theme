import React from "react";
import OlaInput from "./ola-input";
// import OlaAutoSuggest from "./ola-auto-suggest";
import OlaSearchSelect from "./ola-search-select";

class FindOutEarningForm extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render(){
        return(
            <div className = "find-out-earning-form col-lg-4">
                <div className = "title">Find out what you could earn on Olafic</div>
                <div className = "form-control px-0">
                    <div className = "label">Location</div>
                    <OlaInput type = "text" placeholder = "Type Here..."/>
                </div>
                <div className = "form-control px-0">
                    <div className = "label">Category</div>
                    <OlaSearchSelect/>
                </div>

                <div className = "potential-price">
                    $4,500
                </div>
                <div className = "potential-comment">
                    monthly potential <span>?</span>
                </div>
                <button className = "btn ola-btn-primary m-btn full-w-btn">Get Started</button>
                <div className = "comment">Free, No Commitment, and Takes Fewer than 5 Min</div>
            </div>
        )
    }

}

export default FindOutEarningForm;