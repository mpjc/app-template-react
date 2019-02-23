import { SettingsActions, ThemeColors } from "./types";

export const setTheme = (theme: ThemeColors) =>
  ({ type: SettingsActions.SET_THEME, payload: theme });
