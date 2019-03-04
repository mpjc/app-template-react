import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './Settings.scss';

import { ThemeColors, setTheme } from '../../store/settings';
import { ApplicationState } from '../../store';

export interface SettingsProps {
  theme: ThemeColors;
  setTheme(theme: ThemeColors): void;
}

function Settings({ theme, setTheme }: SettingsProps) {
  return (
    <div className="Settings">
      <h3>Settings</h3>
      <div className="Settings-group">
        <div className="Settings-header">Display</div>
        <div className="Settings-item">
          <div>Theme: {theme}</div>
          <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <i className={'fa-lg fas fa-toggle-' + (theme === 'dark' ? 'on' : 'off')}></i>
          </div>
        </div>
      </div>
    </div >
  );
}

const mapStateToProps = ({ settings }: ApplicationState) => ({
  theme: settings.theme
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTheme: (theme: ThemeColors) => dispatch(setTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
