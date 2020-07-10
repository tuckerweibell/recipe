import {AnchorProps, LinkProps, Clickable, Link} from './EzLink.types';

export function isAnchor(props: AnchorProps | LinkProps): props is AnchorProps {
  return (props as AnchorProps).href !== undefined;
}

export function isLink(props: Clickable | Link): props is Link {
  return (props as AnchorProps).href !== undefined || (props as LinkProps).to !== undefined;
}
