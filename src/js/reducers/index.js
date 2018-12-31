import * as constants from "../constants/action-types";
import BoardLib from "../board.js";
import { GameComponent, GameComponentStack, Player } from "../BoardGame.js";
import { Math } from 'three';


const initialState = {
  table: BoardLib.getBoard(),
  selected: null,
  selectedUuid: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_SELECTED_UUID:
      return {
          ...state,
          selectedUuid: action.payload[0],
          selected: BoardLib.uuidToComponent(state.table, action.payload[0]),
      };
    case constants.UPDATE_SELECTED:
      let new_table = BoardLib.cloneTable(state.table);
      return {
        ...state,
        table: new_table,
        selected: BoardLib.uuidToComponent(new_table, state.selectedUuid)
      }
    case constants.LOAD_TABLE: {
      let newTable = BoardLib.loadTable(action.payload);
      return {
        ...state,
        table: newTable
      }
    }
    case constants.DELETE: {
      let newTable = BoardLib.cloneTable(state.table);
      let toDelete = BoardLib.uuidToComponentWithParent(newTable, action.payload);

      if(toDelete) {
        delete toDelete.parent.splice(toDelete.index, 1);
      }
      return {
        ...state,
        table: newTable
      }
    }
    case constants.CREATE_STACK: {
      let newTable = BoardLib.cloneTable(state.table);
      newTable.stacks.push(new GameComponentStack({uuid: Math.generateUUID()}));
      return {
        ...state,
        table: newTable
      }
    }
    case constants.CREATE_COMPONENT: {
      let newTable = BoardLib.cloneTable(state.table);
      let under = newTable.components;
      if(action.payload) {
        let parent = BoardLib.uuidToComponentWithParent(newTable, action.payload);
        under = parent.component.components || parent.component.members;
      }
      under.push(new GameComponent({
        uuid: Math.generateUUID(),
        displayName: "New Card",
        width: 0.0064, // Standard playing card
        height: 0.0089, // Standard playing card,
        backUrl: "https://cdn3.iconfinder.com/data/icons/gray-toolbar-4/512/question-512.png",
        frontUrl: "https://cdn3.iconfinder.com/data/icons/gray-toolbar-4/512/question-512.png",
      }));
      return {
        ...state,
        table: newTable
      }
    }
    case constants.CREATE_PLAYER: {
      let newTable = BoardLib.cloneTable(state.table);
      newTable.players.push(new Player({
        xPos: -1,
        yPos: -1,
        name: "player"
      }))

      return {
        ...state,
        table: newTable
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
