import type {PropsWithChildren} from 'react';

type OptionalLink =
  // requires link props (and does not allow anchor props)
  | {href: string; to: never; as: never}
  // requires anchor props (and does not allow link props)
  | {to: any; as: React.ComponentType<{to: string}>; href: never}
  // props of link and anchor are optional, but if you provide them, they must be complete
  | {to?: never; as?: never; href?: never};

export type TimelineEventProps = PropsWithChildren<{
  title: string;
  time: string;
  status?: React.ReactElement;
  icon?: React.ReactElement;
}> &
  OptionalLink;

export type TimelineProps = PropsWithChildren<{
  expandable?: {expandLabel: string; onClick: React.MouseEventHandler};
}>;
