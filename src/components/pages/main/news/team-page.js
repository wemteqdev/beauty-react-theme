import React from 'react';
import * as dummyData from '../../../widget/dummyData';
import PersonInfo from "../../../widget/news/person-info";

class TeamPage extends React.Component{
    render(){
        return(
            <div className = "team">
                <div className = "title">Our Co-Founders</div>
                <div className = "team-list row">
                    <PersonInfo person={dummyData.team_members[0]}/>
                    <PersonInfo person={dummyData.team_members[1]}/>
                    <PersonInfo person={dummyData.team_members[2]}/>
                </div>
            </div>
        )
    }
}

export default TeamPage;