type Column = (SortEnabledColumn | SortDisabledColumn) & {
  heading: string;
  numeric?: boolean;
  defaultSort?: Direction;
};

type SortEnabledColumn = {
  sortable: boolean;
  accessor: string;
};

type SortDisabledColumn = {
  sortable?: never;
  accessor: React.ReactNode | React.ComponentType;
};

type Direction = 'asc' | 'desc';

type OnSortClickOptions = {
  column: Column;
  direction: Direction;
};

type onSortClick = (event: React.MouseEvent<HTMLElement>, options: OnSortClickOptions) => void;

type onRowsPerPageChange = (event: any) => void;

type BulkSelectionDisabled = {
  onBulkSelectClick?: never;
  onRowSelectClick?: never;
  isRowSelected?: never;
};

type BulkSelectionEnabled = {
  onRowSelectClick: (event: React.MouseEvent<HTMLInputElement>, value: any) => void;
  onBulkSelectClick: React.MouseEventHandler;
  isRowSelected: (item: any) => boolean;
};

type SelectAllOrNoneEnabled = {
  onSelectAllClick: React.MouseEventHandler;
  onSelectNoneClick: React.MouseEventHandler;
};

type Selection = {selection?: BulkSelectionEnabled | BulkSelectionDisabled};
type SelectionAndPagination = {selection: BulkSelectionEnabled & SelectAllOrNoneEnabled};

type ActionsProps = {
  actions: React.ReactNode;
  title: string;
};

type OptionalTitle = {
  actions?: never;
  title?: string;
};

type TableActions = ActionsProps | OptionalTitle;

type PaginationProps = {
  currentPage: number;
  totalRows: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  onPrevPageClick: React.MouseEventHandler;
  onNextPageClick: React.MouseEventHandler;
  onRowsPerPageChange: onRowsPerPageChange;
};

type TableBase = {
  subtitle?: string;
  columns: Column[];
  items: any[];
  onSortClick?: onSortClick;
  pagination?: PaginationProps;
};

export type TableProps = TableBase & (Selection | SelectionAndPagination) & TableActions;

export type Sortable = {
  direction: Direction;
  isSorted: (column: Column) => boolean;
  onClick: (
    event: React.MouseEvent<HTMLElement>,
    column: Column,
    callback: (event: React.MouseEvent<HTMLElement>, options: OnSortClickOptions) => void
  ) => void;
};

export type SortingState = {
  direction: Direction;
  column?: Column;
};
