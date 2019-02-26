import React, { Component } from 'react';
import './PuzzleTile.scss';

import { GameTile } from '../../store/game';

interface PuzzleTileProps {
  tile: GameTile;
  boardSize: number;
}

class PuzzleTile extends Component<PuzzleTileProps> {
  render() {
    const { tile, boardSize } = this.props;
    if (tile.isEmpty) {
      return null;
    }
    const s = boardSize * 100;
    const h = (tile.x * 100 / (boardSize - 1)).toFixed(3);
    const v = (tile.y * 100 / (boardSize - 1)).toFixed(3);
    const style = {
      backgroundSize: `${s}% ${s}%`,
      backgroundPosition: `${h}% ${v}%`,
    }
    return (
      <div className="PuzzleTile" style={style}></div>
    );
  }
}

export default PuzzleTile;
