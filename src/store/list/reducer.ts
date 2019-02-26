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

const listReducer: Reducer<ListState> = (state = initialState, action) => {
  switch (action.type) {
    case ListActions.ADD: {
      const { value } = action as AddAction;
      const items = [...state.items, { id: state.index++, value, checked: false }];
      return { ...state, items };
    }
    case ListActions.EDIT: {
      const { id, value } = action as EditAction;
      const items = state.items.map(i => i.id === id ? { ...i, value: value } : i);
      return { ...state, items };
    }
    case ListActions.REMOVE: {
      const { id } = action as RemoveAction;
      const items = state.items.filter((i) => i.id !== id);
      return { ...state, items };
    }
    case ListActions.TOGGLE: {
      const { id } = action as ToggleAction;
      const items = state.items.map((i) => i.id === id ? { ...i, checked: !i.checked } : i);
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
