import React from 'react';

const PersonInfo = (props) => {

    const {person} = props;

    return (
        <div className = "person-info row">
            <div className = "photo col-lg-4 col-md-6 col-sm-12">
                <img alt="..." src={person.photo}/>
            </div>
            <div className = "detail col-lg-8 col-md-6 col-sm-12 pl-4">
                <div className = "name">
                    {person.name}
                </div>
                <div className = "role">
                    {person.role}
                </div>
                <div className = "content">
                    {person.content}
                </div>
            </div>
        </div>
    );
}

export default PersonInfo;