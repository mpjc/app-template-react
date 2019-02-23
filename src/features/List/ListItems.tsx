import React, { Component } from 'react'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import './ListItems.scss';

import ListItemView from './ListItemView';
import ListItemEdit from './ListItemEdit';
import { Modal } from '../../shared';
import { ListItem } from '../../store/list';
import { toggle, remove, edit } from '../../store/list';

interface ListItemsProps {
  items: ListItem[];
  edit(id: number, value: string): void;
  remove(id: number): void;
  toggle(id: number): void;
}

interface ListItemsState {
  itemToEdit: ListItem | null;
}

class ListItems extends Component<ListItemsProps, ListItemsState> {
  state = {
    itemToEdit: null
  };

  removeItem = (item: ListItem) => this.props.remove(item.id);

  toggleItem = (item: ListItem) => this.props.toggle(item.id);

  selectEditItem = (item: ListItem) => this.setState({ itemToEdit: item });

  updateItem = (id: number, value: string) => {
    this.props.edit(id, value);
    this.clearEditItem();
  };

  clearEditItem = () => this.setState({ itemToEdit: null });

  render() {
    const { items, children } = this.props;
    const { itemToEdit } = this.state;

    const listContent = items.length
      ? <div>
        {items.map(i => (
          <ListItemView item={i} key={i.id}
            toggle={this.toggleItem} edit={this.selectEditItem} remove={this.removeItem} />
        ))}
      </div>
      : children;

    return (
      <div className="ListItems">
        {listContent}
        {!!itemToEdit && (
          <Modal close={this.clearEditItem} showClose={true} closeOnBgClick={true}>
            <div className="ListItems-edit-header">Edit item</div>
            <ListItemEdit
              item={itemToEdit}
              update={this.updateItem}
              cancel={this.clearEditItem}
            />
          </Modal>
        )}
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  edit: (id: number, value: string) => dispatch(edit(id, value)),
  remove: (id: number) => dispatch(remove(id)),
  toggle: (id: number) => dispatch(toggle(id)),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(ListItems);
