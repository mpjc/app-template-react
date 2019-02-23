import { combineReducers } from 'redux'
import { settingsReducer, SettingsState } from './settings';

export interface ApplicationState {
  readonly settings: SettingsState;
}

export const rootReducer = combineReducers<ApplicationState>({
  settings: settingsReducer
});
