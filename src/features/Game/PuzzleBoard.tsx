import React from 'react';
import './PuzzleBoard.scss';

import { GameTile } from '../../store/game/types';
import PuzzleTile from './PuzzleTile';

interface PuzzleBoardProps {
  board: GameTile[][];
  boardSize: number;
  moveTile(coords: { x: number, y: number }): void;
}

function PuzzleBoard({ board, boardSize, moveTile }: PuzzleBoardProps) {
  return (
    <div className="PuzzleBoard">
      {board.map((row, rowIndex) =>
        <div key={rowIndex} className="PuzzleBoard-row">
          {row.map((tile, colIndex) =>
            <div key={`${rowIndex}-${colIndex}`} className="PuzzleBoard-tile"
              onClick={() => moveTile({ x: colIndex, y: rowIndex })} >
              <PuzzleTile boardSize={boardSize} tile={tile} />
            </div>
          )}
        </div >
      )}
    </div >
  );
}

export default PuzzleBoard;
