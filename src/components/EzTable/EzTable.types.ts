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
  accessor: any;
};

export enum Direction {
  Ascending = 'asc',
  Descending = 'desc',
}

type OnSortClickOptions = {
  column: Column;
  direction: Direction;
};

type onSortClick = (event: React.MouseEvent<HTMLElement>, options: OnSortClickOptions) => void;

type BulkSelectionDisabled = {
  onBulkSelectClick?: never;
  onRowSelectClick?: never;
  isRowSelected?: never;
};

type BulkSelectionProps = {
  onRowSelectClick: (event: React.MouseEvent<HTMLInputElement>, value: any) => void;
  onBulkSelectClick: React.MouseEventHandler;
  isRowSelected: (item: any) => boolean;
};

export type TableProps = (BulkSelectionProps | BulkSelectionDisabled) & {
  title?: string;
  subtitle?: string;
  columns: Column[];
  items: any[];
  onSortClick?: onSortClick;
};

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
