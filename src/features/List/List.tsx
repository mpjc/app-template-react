import React from 'react'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import './List.scss';

import { ApplicationState } from '../../store';
import { ListItem } from '../../store/list';
import { add, clear } from '../../store/list/actions';

import ListAdd from './ListAdd';
import ListItems from './ListItems';

interface ListProps {
  items: ListItem[],
  checkedItems: ListItem[],
  uncheckedItems: ListItem[],
  add(value: string): void;
  clear(): void;
}

function List({ items, checkedItems, uncheckedItems, add, clear }: ListProps) {
  const separator = checkedItems.length
    ? <hr className="List-separator"></hr>
    : null;

  return (
    <div className="List">
      <h3>List</h3>
      <ListAdd add={add} />
      {
        items.length
          ?
          <div className="List-items">
            <ListItems items={uncheckedItems}>
              <div>All complete!</div>
            </ListItems>
            {separator}
            <ListItems items={checkedItems} />
            <div className="List-clear ui-button" onClick={clear}>Clear</div>
          </div>
          :
          <div className="List-empty">Add an item...</div>
      }
    </div >
  );
}

const mapStateToProps = ({ list }: ApplicationState) => ({
  items: list.items,
  checkedItems: list.items.filter((i) => i.checked),
  uncheckedItems: list.items.filter((i) => !i.checked),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (value: string) => dispatch(add(value)),
  clear: () => dispatch(clear())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
