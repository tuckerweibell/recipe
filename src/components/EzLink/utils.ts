import {AnchorProps, LinkProps, Clickable, Link} from './EzLink.types';

export function isAnchor(props: AnchorProps | LinkProps): props is AnchorProps {
  return (props as any).href !== undefined;
}

export function isLink(props: Clickable | Link): props is Link {
  return (props as any).href !== undefined || (props as any).to !== undefined;
}
