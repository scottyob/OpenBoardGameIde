import BoardLib from "../board.js";
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Tree, { TreeNode } from 'rc-tree';
import * as actions from '../actions/index.js';
import { OpenBoardGame } from "../BoardGame.js";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import 'rc-tree/assets/index.css';

const GameComponent = OpenBoardGame.GameComponent;
const GameComponentStack = OpenBoardGame.GameComponentStack;
const Player = OpenBoardGame.Player;

const styles = theme => {
  return {
    root: {
    },
    icon: {
      height: "!18"
    }
  };
};

class ComponentExplorer extends Component {

  state = {
      anchorEl: null,
      menuType: null,  // Type of item for context menu
  };


  didSelectElement = (item) => {
    this.props.dispatch(actions.didChangeSelectedUuid(item));
  }

  onRightClick = (info, element, yeah) => {
      let target = this.names[info.node.props.eventKey];
      this.setState({ anchorEl: target });
  }

  render() {
    const { classes } = this.props

    let domObjects = {}  // Map menu items to DOM objects.
    function onRightClick(info) {
      let selectedUuid = info.node.props.eventKey;
      let target = domObjects[selectedUuid];
      console.log("target is", target)

      let component = BoardLib.uuidToComponent(this.props.board, selectedUuid);
      var menuType = 'table'
      if(selectedUuid != 'root-board') {
        if(component instanceof OpenBoardGame.GameComponent)
          menuType = 'component'
        else if (component instanceof GameComponentStack)
          menuType = 'stack'
        else if (component instanceof Player)
          menuType = 'player'
      }

      this.setState({
        anchorEl: target.current,
        menuType: menuType,
        menuUuid: selectedUuid,
      });
    }
    onRightClick = onRightClick.bind(this);

    let handleClose = () => {
      this.setState({ anchorEl: null })
    }

    const { anchorEl, menuType, menuUuid } = this.state;

    // Add Stacks to TreeNode
    var stacks = [];
    for(let stackIndex = 0; stackIndex < this.props.board.stacks.length; stackIndex++) {
      let stack = this.props.board.stacks[stackIndex];

      var cards = [];
      for(let i = 0; i < stack.members.length; i++) {
        let card = stack.members[i];
        let ref = React.createRef();
        domObjects[card.uuid] = ref;
        let title = <span ref={ref} aria-owns={anchorEl ? 'simple-menu' : null}>{card.displayName}</span>

        cards.push(<TreeNode title={title} key={card.uuid} />);
      }
      let ref = React.createRef();
      domObjects[stack.uuid] = ref;
      let title = <span ref={ref} aria-owns={anchorEl ? 'simple-menu' : null}>Stack</span>
      stacks.push(<TreeNode title={title} key={stack.uuid}>{cards}</TreeNode>);
    }

    // Add Comonents to TreeNode
    var components = []
    for(let i = 0; i < this.props.board.components.length; i++) {
      let component = this.props.board.components[i];
      let ref = React.createRef();
      domObjects[component.uuid] = ref;
      let title = <span ref={ref} aria-owns={anchorEl ? 'simple-menu' : null}>{component.displayName}</span>
      components.push(<TreeNode title={title} key={component.uuid} />);
      console.log("Added Component");
    }

    // Add Players to TreeNode
    var players = [];
    for(let i = 0; i < this.props.board.players.length; i++) {
      let player = this.props.board.players[i];
      let ref = React.createRef();
      let key = "player-" + (i + 1);
      domObjects[key] = ref;
      let title = <span ref={ref} aria-owns={anchorEl ? 'simple-menu' : null}>Player - {i + 1}</span>
      players.push(<TreeNode title={title} key={key} />);
    }

    let ref = React.createRef();
    domObjects['root-board'] = ref;
    let title = <span ref={ref} aria-owns={anchorEl ? 'simple-menu' : null}>Table</span>

    var menuItems = []
    let deleteMenuItem = <MenuItem onClick={(item) => {
      this.props.dispatch(actions.didDelete(menuUuid));
      handleClose();
    }}>Delete</MenuItem>

    var createComponent = (uuid = null) => {
      return <MenuItem onClick={(item) => {
        this.props.dispatch(actions.didCreateComponent(uuid));
        handleClose();
      }}>Create Component</MenuItem>
    }

    switch (menuType) {
      case 'table':
        menuItems = [
          <MenuItem onClick={(item) => {
            this.props.dispatch(actions.didCreateStack());
            handleClose();
          }}>Create Stack</MenuItem>,
          createComponent(),
          <MenuItem onClick={ () => {
            this.props.dispatch(actions.didCreatePlayer());
            handleClose();
          } }>Create Player</MenuItem>,
        ]
        break;
      case 'component':
        menuItems = [
          deleteMenuItem
        ]
        break;
      case 'stack':
        menuItems = [
          deleteMenuItem,
          createComponent(menuUuid)
        ]
        break;
      case 'player':
        menuItems = [
          deleteMenuItem
        ]
        break;
    }

    return <div>
      <Tree
         // expandedKeys={["root-board"]}
         onSelect={this.didSelectElement}
         onRightClick={onRightClick}
       >
         <TreeNode title={title} key="root-board">
           {stacks}
           {components}
           {players}
         </TreeNode>
       </Tree>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems}
      </Menu>
    </div>
  }
}

export default withStyles(styles)(ComponentExplorer);
