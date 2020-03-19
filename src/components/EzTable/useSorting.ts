import React, {useState} from 'react';
import {SortingState, Sortable} from './EzTable.types';

const useSorting = (initialState: SortingState = {direction: 'asc', column: null}): Sortable => {
  const [state, setState] = useState<SortingState>(initialState);

  const isSorted = React.useCallback(column => state.column && state.column.key === column.key, [
    state,
  ]);

  const onClick = React.useCallback(
    (event, column, callback) => {
      if (!column.sortable) return;

      const direction = isSorted(column) && state.direction === 'asc' ? 'desc' : 'asc';

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
