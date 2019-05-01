import React, {forwardRef} from 'react';
import {StyledLink, StyledAnchor} from './EzLink.styles';
import {AnchorProps, LinkProps} from './EzLink.types';

type Props = (AnchorProps | LinkProps) & {
  children: React.ReactNode;
};

function isAnchor(props: AnchorProps | LinkProps): props is AnchorProps {
  return (props as any).href !== undefined;
}

const EzLink = forwardRef<HTMLElement, Props>((props, ref) => {
  if (isAnchor(props)) return <StyledAnchor {...props} innerRef={ref} />;

  const {as: Component, ...rest} = props;
  const Link = Component as any;

  return (
    <StyledLink>
      <Link innerRef={ref} {...rest} />
    </StyledLink>
  );
});

export default EzLink;
