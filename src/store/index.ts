import { combineReducers } from 'redux'
import { settingsReducer, SettingsState } from './settings';
import { ListState, listReducer } from './list';

export interface ApplicationState {
  readonly settings: SettingsState;
  readonly list: ListState;
}

export const rootReducer = combineReducers<ApplicationState>({
  settings: settingsReducer,
  list: listReducer,
});
