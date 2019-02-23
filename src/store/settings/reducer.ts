import { Reducer } from 'redux'
import { SettingsState, SettingsActions } from './types';
import { setTheme } from './actions';

type SetThemeAction = ReturnType<typeof setTheme>;

const initialState: SettingsState = {
  theme: 'dark'
}

const settingsReducer: Reducer<SettingsState> = (state = initialState, action) => {
  switch (action.type) {
    case SettingsActions.SET_THEME: {
      const setTheme = action as SetThemeAction;
      return { ...state, theme: setTheme.theme };
    }
    default:
      return state;
  }
}

export { settingsReducer };