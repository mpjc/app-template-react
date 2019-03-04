import React, { Component } from 'react';
import './Game.scss';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { GamePhase, GameTile, quit, shuffle, setup, moveTile } from '../../store/game';
import PuzzleSetup from './PuzzleSetup';
import PuzzleBoard from './PuzzleBoard';
import { Modal } from '../../shared';
import { ApplicationState } from '../../store';

interface GameProps {
  phase: GamePhase;
  board: GameTile[][];
  boardSize: number;
  moveTile(coords: { x: number, y: number }): void;
  setup(size: number): void;
  quit(): void;
  shuffle(): void;
}

function Game(props: GameProps) {
  const { phase, board, boardSize, moveTile, setup, quit, shuffle } = props;
  return (
    <div className="Game">
      <h3>Sliding Puzzle</h3>
      {phase === 'Setup'
        ? <div>
          <PuzzleSetup setup={setup} />
        </div>
        : <div>
          <p>Tap a tile to move it</p>
          <PuzzleBoard board={board} boardSize={boardSize} moveTile={moveTile} />
          {phase === 'Won' &&
            <Modal showClose={false} closeOnBgClick={true} close={() => { }}>
              <div slot="header"></div>
              <div slot="content">
                <div className="Game-win-text">You win!</div>
                <div className="Game-play-again ui-button" onClick={quit}>Play again?</div>
              </div>
            </Modal>
          }
          <div className="Game-controls">
            <div className="Game-control ui-button" onClick={quit}>Quit</div>
            <div className="Game-control ui-button" onClick={shuffle} > Shuffle</div >
          </div >
        </div >}
    </div >
  );
}

const mapStateToProps = ({ game }: ApplicationState) => ({
  phase: game.phase,
  board: game.board,
  boardSize: game.boardSize,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  moveTile: ({ x, y }: { x: number, y: number }) => dispatch(moveTile(x, y)),
  setup: (size: number) => dispatch(setup(size)),
  quit: () => dispatch(quit()),
  shuffle: () => dispatch(shuffle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
