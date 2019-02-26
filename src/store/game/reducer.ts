import { Reducer } from 'redux'
import { GameState, GameActions, GamePhase } from './types';
import { moveTile, setup } from './actions';
import { createBoard, tryMove, isCorrectOrder } from '../../utils/sliding-puzzle.utils';

type MoveTileAction = ReturnType<typeof moveTile>;
type SetupAction = ReturnType<typeof setup>;

const initialState: GameState = {
  boardSize: 0,
  board: createBoard(0),
  phase: GamePhase.Setup,
}

const gameReducer: Reducer<GameState> = (state = initialState, action) => {
  switch (action.type) {
    case GameActions.MOVE_TILE: {
      if (state.phase === GamePhase.Playing) {
        const { x, y } = action as MoveTileAction;
        const board = tryMove(state.board, { x, y });
        const phase = isCorrectOrder(board) ? GamePhase.Won : state.phase;
        return { ...state, board, phase };
      }
      return state;
    }
    case GameActions.QUIT: {
      const boardSize = 0;
      const board = createBoard(0);
      const phase = GamePhase.Setup;
      return { boardSize, board, phase };
    }
    case GameActions.SETUP: {
      const { size } = action as SetupAction;
      const boardSize = size;
      const board = createBoard(size);
      const phase = GamePhase.Playing;
      return { boardSize, board, phase };
    }
    case GameActions.RESET: {
      const board = createBoard(state.boardSize);
      const phase = GamePhase.Playing;
      return { ...state, board, phase };
    }
    case GameActions.SHUFFLE: {
      const board = createBoard(state.boardSize);
      return { ...state, board };
    }
    default:
      return state;
  }
}

export { gameReducer };