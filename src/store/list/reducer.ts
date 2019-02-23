import { Reducer } from 'redux'
import { ListState, ListActions } from './types';
import { add, edit, remove, toggle } from './actions';

type AddAction = ReturnType<typeof add>;
type EditAction = ReturnType<typeof edit>;
type RemoveAction = ReturnType<typeof remove>;
type ToggleAction = ReturnType<typeof toggle>;

const initialState: ListState = {
  index: 0,
  items: [],
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const listReducer: Reducer<ListState> = (state = initialState, action) => {
  switch (action.type) {
    case ListActions.ADD: {
      const add = action as AddAction;
      const items = [...state.items, { id: state.index++, value: add.value, checked: false }];
      return { ...state, items };
    }
    case ListActions.EDIT: {
      const edit = action as EditAction;
      const items = state.items.map(i =>
        i.id === edit.id ? { ...i, value: edit.value } : i);
      return { ...state, items };
    }
    case ListActions.REMOVE: {
      const remove = action as RemoveAction;
      const items = state.items.filter((i) => i.id !== remove.id);
      return { ...state, items };
    }
    case ListActions.TOGGLE: {
      const toggle = action as ToggleAction;
      const items = state.items.map((i) =>
        i.id === toggle.id ? { ...i, checked: !i.checked } : i);
      return { ...state, items };
    }
    case ListActions.CLEAR: {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}

export { listReducer };
