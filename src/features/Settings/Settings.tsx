import React, { Component } from 'react'
import './Settings.scss';

import { ThemeColors } from '../../store/settings';

export interface SettingsProps {
  theme: ThemeColors;
  setTheme(theme: ThemeColors): void;
}

class Settings extends Component<SettingsProps> {
  render() {
    const { theme, setTheme } = this.props;
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
}

export default Settings;
