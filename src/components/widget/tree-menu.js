import React from 'react';
import TreeView from '../widget/tree-view';
import { categories} from './dummyData';

class TreeMenu extends React.Component {

constructor(props) {
    super(props);
    this.changeCollaps = this.changeCollaps.bind(this);
    this.state = {
        menu:this.props.menu
    }
}

changeCollaps(path, collapsed){
    var menu = this.state.menu;
    switch(path.length){
        case 1:
            menu[path[0]].collapsed = collapsed;
            break;
        case 2:
            menu[path[0]].items[path[1]].collapsed = collapsed;
            break;
        case 3:
            menu[path[0]].items[path[1]].items[path[2]].collapsed = collapsed;
            break;
        case 4:
            menu[path[0]].items[path[1]].items[path[2]].items[path[3]].collapsed = collapsed;
            break;
    }
    this.setState({menu:menu});
}

renderSubMenu(menu, path = [], i=0, itemshtml = []){

    const node = menu[i];

    if(!node){
        return itemshtml;
    }

    if(!node.items){
        var paddingLeft = (path.length - 1) * 20 + 36;
        if(path.length == 0){
            paddingLeft = 0;
        }
        itemshtml.push((<div className="tree-view_item tree-menu-item" style = {{paddingLeft:paddingLeft}} key = {i} >{node}</div>));
    }else{
        var newpath = path.concat([i]);
        const label = <span className="node">{node.name}</span>;
        const collapsed = node.collapsed;
        itemshtml.push(
            <TreeView nodeLabel={label} key={node.name} defaultCollapsed={collapsed} path = {newpath} onClick = {this.changeCollaps}>
            {this.renderSubMenu(node.items, newpath, 0, [])}
            </TreeView>
        )
    }
    return this.renderSubMenu(menu, path, i+1, itemshtml);

}
    
  render() {

    const menu = this.state.menu;
    const items = this.renderSubMenu(menu, [], 0, []);

    return (
        <div className = "tree-menu">
            {items}
        </div>
    )
  }
};

export default TreeMenu;