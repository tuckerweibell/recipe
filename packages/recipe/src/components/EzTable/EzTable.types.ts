type Column = {
  heading: string;
  numeric?: boolean;
  defaultSort?: Direction;
  key?: string;
  component?: React.ReactNode | React.ComponentType;
  sortable?: boolean;
  icon?: React.ReactNode | React.ComponentType;
  /**
   * @deprecated Use `key` to provide column identifier and `component` to provide a custom cell renderer.
   */
  accessor?: React.ReactNode | React.ComponentType | string;
};

type Direction = 'asc' | 'desc';

type OnSortClickOptions = {
  column: Column;
  direction: Direction;
};

type onSortClick = (event: React.MouseEvent<HTMLElement>, options: OnSortClickOptions) => void;

type onRowsPerPageChange = (event: any) => void;

type BulkSelection = {
  disableMultiPageSelection?: boolean;
  onRowSelectClick: (event: React.MouseEvent<HTMLInputElement>, value: any) => void;
  onBulkSelectClick: React.MouseEventHandler;
  isRowSelected: (item: any) => boolean;
  totalRowsSelected: number;
};

type SelectAllOrNoneEnabled = {
  onSelectAllClick: React.MouseEventHandler;
  onSelectNoneClick: React.MouseEventHandler;
};

type SelectAllOrNoneDisabled = {
  onSelectAllClick?: never;
  onSelectNoneClick?: never;
};

type ActionsProps = {
  actions: React.ReactNode | React.ComponentType;
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
  onPrevPageClick: React.MouseEventHandler;
  onNextPageClick: React.MouseEventHandler;
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
  titleIcon?: React.ReactNode | React.ComponentType;
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
    event: React.MouseEvent<HTMLElement>,
    column: Column,
    // eslint-disable-next-line no-shadow
    callback: (event: React.MouseEvent<HTMLElement>, options: OnSortClickOptions) => void
  ) => void;
};

export type SortingState = {
  direction: Direction;
  column?: Column;
};
