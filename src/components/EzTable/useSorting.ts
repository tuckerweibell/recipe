import React, {useState} from 'react';
import {Direction, SortingState, Sortable} from './EzTable.types';

const {Ascending, Descending} = Direction;

const useSorting = (
  initialState: SortingState = {direction: Ascending, column: null}
): Sortable => {
  const [state, setState] = useState<SortingState>(initialState);

  const isSorted = React.useCallback(
    column => state.column && state.column.accessor === column.accessor,
    [state]
  );

  const onClick = React.useCallback(
    (event, column, callback) => {
      if (!column.sortable) return;

      const direction = isSorted(column) && state.direction === Ascending ? Descending : Ascending;

      callback(event, {column, direction});

      if (event.isDefaultPrevented()) return;

      setState({column, direction});
    },
    [state, isSorted]
  );

  return {
    direction: state.direction,
    isSorted,
    onClick,
  };
};

export default useSorting;
