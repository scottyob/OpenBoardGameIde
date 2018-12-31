// src/js/actions/index.js
import * as constants from "../constants/action-types";

export const didChangeSelectedUuid = item => (
    { type: constants.CHANGE_SELECTED_UUID, payload: item }
);

export const didUpdateSelected = item => (
  { type: constants.UPDATE_SELECTED, payload: item }
);

export const didLoadTable = data => (
  { type: constants.LOAD_TABLE, payload: data }
)

export const didDelete = uuid => (
  { type: constants.DELETE, payload: uuid }
)

export const didCreateStack = () => (
  { type: constants.CREATE_STACK }
)

export const didCreateComponent = underUuid => (
  { type: constants.CREATE_COMPONENT, payload: underUuid }
)

export const didCreatePlayer = () => (
  { type: constants.CREATE_PLAYER }
)
