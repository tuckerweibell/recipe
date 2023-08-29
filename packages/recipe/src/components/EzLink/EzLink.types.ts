import React, {type ComponentType, type MouseEventHandler, type ReactNode} from 'react';

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type Path = string;
/* Accepts any type to avoid coupling to any more router details than absolutely necessary */
export type Location = any;
export type LinkProps = {
  to: Path | Location;
  as: ComponentType<{to: string; children?: ReactNode}>;
};

export type Clickable = {onClick: MouseEventHandler};

export type Labelled = Partial<Clickable> & {
  label: string;
  accessibilityLabel?: string;
};

export type Link = AnchorProps | LinkProps;

/**
 * A labelled button or link
 */
export type LabelledLink = Labelled & (Clickable | Link);

/**
 * A labelled element that may optionally be a link or a button.
 */
export type LabelledOptionalLink = Labelled | (Labelled & Link);
