import React, { Component } from 'react';
import './ListItemEdit.scss';

import { ListItem } from '../../store/list';

interface ListItemEditProps {
  item: ListItem;
  update(id: number, value: string): void;
  cancel(): void;
}

interface ListItemEditState {
  inputValue: string;
}

class ListItemEdit extends Component<ListItemEditProps, ListItemEditState> {
  state = {
    inputValue: this.props.item.value
  };

  update = () => this.props.update(this.props.item.id, this.state.inputValue);

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const { cancel } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="ListItemEdit">
        <input className="ListItemEdit-text" v-model="inputValue" value={inputValue}
          onChange={this.onChange} />
        <div className="ListItemEdit-controls">
          <div className="ListItemEdit-control ui-button" onClick={this.update}>Update</div>
          <div className="ListItemEdit-control ui-button" onClick={cancel}>Cancel</div>
        </div>
      </div>
    );
  }
}

export default ListItemEdit;