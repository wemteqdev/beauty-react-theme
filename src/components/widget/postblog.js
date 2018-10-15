import React from 'react';
import {
    Link    
} from 'react-router-dom';

class PostBlog extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        const postinfo = this.props.postinfo;

        return (
            <div className = {`${this.props.className} post-blog`}>
                <div>
                    <div className = "post-img" style = {
                            {background:`url(${postinfo.asset})`}
                    }></div>
                </div>
                <div>
                    <div className = "post-title">
                        {postinfo.title}
                    </div>
                    <div className = "post-description">
                        {postinfo.description}
                        <br/>
                        { 
                            postinfo.linkurl? (<Link className = "ola-link red-link" to={postinfo.linkurl}>How we keep you safe?</Link>):'' 
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default PostBlog;