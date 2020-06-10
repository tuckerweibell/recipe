export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type Path = string;
/* Accepts any type to avoid coupling to any more router details than absolutely necessary */
export type Location = any;
export type LinkProps = {
  to: Path | Location;
  as: React.ComponentType<{to: string}>;
};

export type Clickable = {onClick: React.MouseEventHandler};

export type Labelled = Partial<Clickable> & {
  label: string;
  accessibilityLabel?: string;
};

export type Link = AnchorProps | LinkProps;

export type LabelledLink = Labelled & (Clickable | Link);
