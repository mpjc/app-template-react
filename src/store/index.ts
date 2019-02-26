import { combineReducers } from 'redux'
import { gameReducer, GameState } from './game';
import { listReducer, ListState } from './list';
import { settingsReducer, SettingsState } from './settings';

export interface ApplicationState {
  readonly game: GameState;
  readonly list: ListState;
  readonly settings: SettingsState;
}

export const rootReducer = combineReducers<ApplicationState>({
  game: gameReducer,
  list: listReducer,
  settings: settingsReducer,
});
