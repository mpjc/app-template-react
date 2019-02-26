import React, { Component } from 'react';
import './PuzzleSetup.scss';

interface PuzzleSetupProps {
  setup(size: number): void;
}

class PuzzleSetup extends Component<PuzzleSetupProps> {
  render() {
    const { setup } = this.props;
    return (
      <div className="PuzzleSetup">
        <div className="PuzzleSetup-message">Choose your difficulty</div>
        <div className="PuzzleSetup-row">
          <div className="PuzzleSetup-start ui-button" onClick={() => setup(2)}>
            Super easy
          </div>
        </div>
        <div className="PuzzleSetup-row">
          <div className="PuzzleSetup-start ui-button" onClick={() => setup(3)}>
            Normal
          </div>
        </div>
        <div className="PuzzleSetup-row">
          <div className="PuzzleSetup-start ui-button" onClick={() => setup(4)}>
            Hard
          </div>
        </div>
        <div className="PuzzleSetup-row">
          <div className="PuzzleSetup-start ui-button" onClick={() => setup(5)}>
            I have time to waste...
          </div>
        </div>
      </div>
    );
  }
}

export default PuzzleSetup;
