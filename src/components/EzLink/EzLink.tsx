import React from 'react';
import {StyledLink, StyledAnchor} from './EzLink.styles';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type LinkProps = {
  to: string;
  as: React.ComponentType<{to: string}>;
};

type Props = (AnchorProps | LinkProps) & {
  children: React.ReactNode;
};

function isAnchor(props: AnchorProps | LinkProps): props is AnchorProps {
  return (props as any).href !== undefined;
}

const EzLink = (props: Props) => {
  if (isAnchor(props)) return <StyledAnchor {...props} />;

  const {as: Component, ...rest} = props;

  return (
    <StyledLink>
      <Component {...rest} />
    </StyledLink>
  );
};

export default EzLink;
