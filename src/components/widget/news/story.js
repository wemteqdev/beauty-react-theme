import React from 'react';

const Story = (props) => {

    const {story} = props;

    return (
        <div className = "story">
            <div className = "title">
                {story.title}
            </div>
            <div className = "content">
                {story.content}
            </div>
            <a href="">Read More...</a>
        </div>
    );
}

export default Story;