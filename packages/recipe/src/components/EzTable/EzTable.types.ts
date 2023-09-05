import type {ComponentType, MouseEvent, MouseEventHandler, ReactNode} from 'react';

type Column = {
  component?: ReactNode | ComponentType;
  defaultSort?: Direction;
  heading: string;
  icon?: ReactNode | ComponentType;
  key?: string;
  numeric?: boolean;
  sortable?: boolean;
  width?: number;
  /**
   * @deprecated Use `key` to provide column identifier and `component` to provide a custom cell renderer.
   */
  accessor?: ReactNode | ComponentType | string;
};

type Direction = 'asc' | 'desc';

type OnSortClickOptions = {
  column: Column;
  direction: Direction;
};

type onSortClick = (event: MouseEvent<HTMLElement>, options: OnSortClickOptions) => void;

type onRowsPerPageChange = (event: any) => void;

type BulkSelection = {
  disableMultiPageSelection?: boolean;
  onRowSelectClick: (event: MouseEvent<HTMLInputElement>, value: any) => void;
  onBulkSelectClick: MouseEventHandler;
  isRowSelected: (item: any) => boolean;
  totalRowsSelected: number;
};

type SelectAllOrNoneEnabled = {
  onSelectAllClick: MouseEventHandler;
  onSelectNoneClick: MouseEventHandler;
};

type SelectAllOrNoneDisabled = {
  onSelectAllClick?: never;
  onSelectNoneClick?: never;
};

type ActionsProps = {
  actions: ReactNode;
  title?: string;
};

type OptionalTitle = {
  actions?: never;
  title?: string;
};

type TableActions = ActionsProps | OptionalTitle;

type Pagination = {
  currentPage: number;
  totalFilteredRows?: number;
  totalRows: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  onPrevPageClick: MouseEventHandler;
  onNextPageClick: MouseEventHandler;
  onRowsPerPageChange: onRowsPerPageChange;
};

type Selection = BulkSelection & (SelectAllOrNoneEnabled | SelectAllOrNoneDisabled);

type SelectionWithoutPagination = {
  pagination?: never;
  selection: BulkSelection & SelectAllOrNoneDisabled;
};

type PaginationWithoutSelection = {
  pagination: Pagination;
  selection?: never;
};

type PaginationAndSelection = {
  pagination: Pagination;
  selection: Selection;
};

type PaginationAndSelectionDisabled = {
  pagination?: never;
  selection?: never;
};

type PaginationSelectionCombination =
  | SelectionWithoutPagination
  | PaginationWithoutSelection
  | PaginationAndSelection
  | PaginationAndSelectionDisabled;

type TableBase = {
  subtitle?: string;
  columns: Column[];
  items: any[];
  onSortClick?: onSortClick;
  titleIcon?: ReactNode;
  fullWidth?: boolean;
  transparent?: boolean;
};

// SimpleTableWithoutTitle (no title, aria-label optional, no showCardWithoutHeading)
interface SimpleTableLabels {
  title?: never;
  ariaLabel?: string;
  showCardWithoutHeading?: never;
}

// TableInCardWithoutTitle (no title, aria-label required, showCardWithoutHeading true)
interface TableWithoutTitleCardLabels {
  title?: never;
  ariaLabel: string;
  showCardWithoutHeading: true;
}

// TableCardWithTitle (title required, aria-label optional, no showCardWithoutHeading)
interface TableWithTitleCardLabels {
  title: string;
  ariaLabel?: string;
  showCardWithoutHeading?: never;
}

type TableLabel = SimpleTableLabels | TableWithoutTitleCardLabels | TableWithTitleCardLabels;

export type TableProps = TableBase & TableActions & PaginationSelectionCombination & TableLabel;

export type Sortable = {
  direction: Direction;
  isSorted: (column: Column) => boolean;
  onClick: (
    event: MouseEvent<HTMLElement>,
    column: Column,
    // eslint-disable-next-line no-shadow
    callback: (event: MouseEvent<HTMLElement>, options: OnSortClickOptions) => void
  ) => void;
};

export type SortingState = {
  direction: Direction;
  column?: Column;
};
