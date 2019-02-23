export type ThemeColors = 'light' | 'dark';

export interface SettingsState {
  readonly theme: ThemeColors;
};

const actions = {
  SET_THEME: 'SET_THEME'
}

export { actions as SettingsActions };

