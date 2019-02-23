import { connect } from 'react-redux';
import { setTheme, ThemeColors, } from '../../store/settings'
import { Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import Settings from './Settings';

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