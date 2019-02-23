import { Action } from "redux";

export interface ListItem {
  id: number;
  value: string;
  checked: boolean;
}

export interface ListState {
  index: number;
  items: ListItem[];
}

const actions = {
  ADD: 'LIST/ADD',
  EDIT: 'LIST/EDIT',
  REMOVE: 'LIST/REMOVE',
  TOGGLE: 'LIST/TOGGLE',
  CLEAR: 'LIST/CLEAR',
}

export { actions as ListActions };
