import { GameActions } from "./types";

export const moveTile = (x: number, y: number) =>
  ({ type: GameActions.MOVE_TILE, x, y });

export const quit = () =>
  ({ type: GameActions.QUIT });

export const reset = () =>
  ({ type: GameActions.RESET });

export const setup = (size: number) =>
  ({ type: GameActions.SETUP, size });

export const shuffle = () =>
  ({ type: GameActions.SHUFFLE });
