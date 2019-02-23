import React, { Component } from 'react';
import './ListAdd.scss';

interface ListAddProps {
  add(value: string): void;
}

interface ListAddState {
  inputValue: string;
}

class ListAdd extends Component<ListAddProps, ListAddState> {

  state = {
    inputValue: ''
  };

  onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.add();
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  }

  add = () => {
    this.props.add(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="ListAdd">
        <input className="ListAdd-text" placeholder="..." value={inputValue}
          onChange={this.onChange} onKeyPress={this.onKeyPress} />
        <div className="ListAdd-add" onClick={this.add}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    );
  }
}

export default ListAdd;