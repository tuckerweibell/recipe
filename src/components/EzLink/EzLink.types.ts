export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type LinkProps = {
  to: string;
  as: React.ComponentType<{to: string}>;
};

export type Clickable = {onClick: React.MouseEventHandler};

export type Labelled = Partial<Clickable> & {
  label: string;
  accessibilityLabel?: string;
};

export type Link = AnchorProps | LinkProps;

export type LabelledLink = Labelled & (Clickable | Link);
