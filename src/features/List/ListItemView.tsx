import React, { Component } from "react";
import './ListItemView.scss';

import { ListItem } from "../../store/list";

interface ListItemViewProps {
  item: ListItem,
  toggle(item: ListItem): void,
  edit(item: ListItem): void,
  remove(item: ListItem): void,
}

class ListItemView extends Component<ListItemViewProps> {
  toggle = () => this.props.toggle(this.props.item);
  edit = () => this.props.edit(this.props.item);
  remove = () => this.props.remove(this.props.item);

  render() {
    const { item } = this.props;
    return (
      <div className="ListItemView">
        <div className="ListItemView-controls">
          <div className="ListItemView-control" onClick={this.toggle}>
            <i className={'far ' + (item.checked ? 'fa-check-square' : 'fa-square')}></i>
          </div>
        </div>
        <div className={'ListItemView-text ' + (item.checked ? 'checked' : '')}>
          {item.value}
        </div>
        <div className="ListItemView-controls">
          <div className="ListItemView-control" onClick={this.edit}>
            <i className="fas fa-edit"></i>
          </div>
          <div className="ListItemView-control" onClick={this.remove} >
            <i className="fas fa-trash"></i>
          </div >
        </div >
      </div >
    );
  }
}

export default ListItemView;