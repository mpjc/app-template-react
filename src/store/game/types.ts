import { SlidingPuzzleTile } from "../../utils/sliding-puzzle.utils";

export enum GamePhase {
  Setup = 'Setup',
  Playing = 'Playing',
  Won = 'Won',
}

// tslint:disable-next-line:no-empty-interface
export interface GameTile extends SlidingPuzzleTile {
}

export interface GameState {
  board: SlidingPuzzleTile[][];
  boardSize: number;
  phase: GamePhase;
}

const actions = {
  MOVE_TILE: 'GAME/MOVE_TILE',
  QUIT: 'GAME/QUIT',
  RESET: 'GAME/RESET',
  SETUP: 'GAME/SETUP',
  SHUFFLE: 'GAME/SHUFFLE',
}

export { actions as GameActions };
