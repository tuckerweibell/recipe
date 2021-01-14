import {ClassNames} from '@emotion/core';
import React, {forwardRef, ReactElement, ReactNode} from 'react';
import {primary, secondary, reset} from './EzLink.styles';
import {Link as LinkProps} from './EzLink.types';
import {isAnchor, isLink} from './utils';

type DeprecatedProps = LinkProps & {
  /** The content to display in the link. */
  children?: ReactNode;
};

type CurrentProps = {
  /** The content to display in the link. */
  children: string | ReactElement;
};

type Props = DeprecatedProps | CurrentProps;

type EzLinkProps = Props & {
  /**
   * The visual style of the link.
   * @default 'primary'
   */
  use?: 'primary' | 'secondary' | 'reset';
};

function getWrappedElement(children: string | ReactElement): ReactElement {
  return typeof children === 'string' ? (
    <span role="link" tabIndex={0}>
      {children}
    </span>
  ) : (
    React.Children.only(children)
  );
}

/**
 * Links allow users to navigate to a different location.
 * They can be presented inline inside a paragraph or as standalone text.
 */
const EzLink = forwardRef<HTMLElement, EzLinkProps>((props, ref) => {
  const {use = 'primary', as = 'span', className, children, ...passThroughProps} = props as any;

  let content: any = children;

  if (isLink(passThroughProps)) {
    const options: any = passThroughProps;
    const type = options.href ? 'a' : as;
    content = React.createElement(type, options, children);
  }

  const styles = {primary, secondary, reset};
  const style = styles[use];

  return (
    <ClassNames>
      {({css, cx}) => {
        return React.cloneElement(getWrappedElement(content), {
          ref,
          className: cx(css(style?.()), className),
          ...passThroughProps,
        });
      }}
    </ClassNames>
  );
});

export const Link = forwardRef<HTMLElement, any>((props, ref) => {
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
