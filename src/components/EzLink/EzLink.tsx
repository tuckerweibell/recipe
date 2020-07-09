import React, {forwardRef} from 'react';
import {StyledLink, StyledAnchor} from './EzLink.styles';
import {AnchorProps, LinkProps} from './EzLink.types';
import {isAnchor} from './utils';

type Props = AnchorProps | LinkProps;

const EzLink = forwardRef<HTMLElement, Props>((props, ref) => {
  if (isAnchor(props)) return <StyledAnchor {...props} ref={ref as any} />;

  const {as: Component, ...rest} = props;
  const Link = Component as any;

  return (
    <StyledLink>
      <Link ref={ref} {...rest} />
    </StyledLink>
  );
});

export const Link = forwardRef<HTMLElement, Props>((props, ref) => {
  if (isAnchor(props)) {
    return (
      <a {...props} ref={ref as any}>
        {props.children}
      </a>
    );
  }
  const {as: Component, ...rest} = props;
  const LinkComponent = Component as any;

  return <LinkComponent ref={ref} {...rest} />;
});

export default EzLink;
