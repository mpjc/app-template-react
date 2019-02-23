import { Reducer } from 'redux'
import { SettingsState, SettingsActions } from './types';

const initialState: SettingsState = {
  theme: 'light'
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const settingsReducer: Reducer<SettingsState> = (state = initialState, action) => {
  switch (action.type) {
    case SettingsActions.SET_THEME: {
      return { ...state, theme: action.payload };
    }
    default:
      return state;
  }
}

export { settingsReducer };