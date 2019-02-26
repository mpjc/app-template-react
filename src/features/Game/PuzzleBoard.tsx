import React, { Component } from 'react';
import './PuzzleBoard.scss';

import { GameTile } from '../../store/game/types';
import PuzzleTile from './PuzzleTile';

interface PuzzleBoardProps {
  board: GameTile[][];
  boardSize: number;
  moveTile(coords: { x: number, y: number }): void;
}

class PuzzleBoard extends Component<PuzzleBoardProps> {
  render() {
    const { board, boardSize, moveTile } = this.props;
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
}

export default PuzzleBoard;
