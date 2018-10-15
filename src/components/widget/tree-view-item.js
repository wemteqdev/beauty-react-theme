import React from 'react';
class TreeViewItem extends React.Component {
    render(){
        const {path, className} = this.props;
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}
export default TreeViewItem;