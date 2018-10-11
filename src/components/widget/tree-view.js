
import React from 'react';
import PropTypes from 'prop-types';

class TreeView extends React.PureComponent {
  propTypes: {
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    nodeLabel: PropTypes.node.isRequired,
    className: PropTypes.string,
    itemClassName: PropTypes.string,
    childrenClassName: PropTypes.string,
    treeViewClassName: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.defaultCollapsed
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(...args) {
    this.setState({ collapsed: !this.state.collapsed });
    if (this.props.onClick) {

      this.props.onClick(this.props.path, !this.state.collapsed);
    }
  }

  render() {
    const {
      collapsed = this.state.collapsed,
      className = '',
      itemClassName = '',
      treeViewClassName = '',
      childrenClassName = '',
      nodeLabel,
      path,
      children,
      defaultCollapsed,
      ...rest
    } = this.props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
    }

    const arrow = (
      <div
        {...rest}
        className={className + ' ' + arrowClassName}
        onClick={this.handleClick}
      />
    );

    const node = (label)=>(
        <div {...rest}
        className={"tree-menu-item"}
        onClick={this.handleClick}>
            {label}
        </div>
    )

    // const paddingLeft = (path.length - 1) * 14;
    
    var paddingLeft = (path.length - 2) * 20 + 36;
    var marginLeft = -22;
        if(path.length <= 1){
            paddingLeft = 0;
            marginLeft = 0;
        }
    

    return (
      <div className={'tree-view ' + treeViewClassName}>
        <div className={'tree-view_item ' + itemClassName} style = {{paddingLeft:paddingLeft,marginLeft:marginLeft}}>
          {(path.length > 1)?arrow:""}
          {node(nodeLabel)}
        </div>
        <div className={containerClassName + ' ' + childrenClassName}>
          {collapsed ? null : children}
        </div>
      </div>
    );
  }
}

export default TreeView;