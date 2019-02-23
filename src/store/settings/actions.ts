import { ThemeColors, SettingsActions } from "./types";

export const setTheme = (theme: ThemeColors) =>
  ({ type: SettingsActions.SET_THEME, theme });