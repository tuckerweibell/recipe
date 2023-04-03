import React, {forwardRef, ReactElement, ReactNode} from 'react';
import theme from '../theme.config';
import {Link as LinkProps} from './EzLink.types';
import {isAnchor, isLink} from './utils';
import {clsx} from '../../utils';

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

const styles = theme.css({
  fontFamily: '$defaultFont',
  variants: {
    use: {
      primary: {
        fontWeight: 'bold',
        textDecoration: 'none',
        cursor: 'pointer',
        color: '$link-text',
        outlineOffset: '2px',
        '&:focus': {
          outline: 'none',
          textDecoration: 'underline',
        },
        '&:hover': {
          color: '$link-text-hover',
          textDecoration: 'underline',
        },
        '&:active': {
          color: '$link-text-down',
        },
      },
      secondary: {
        fontWeight: 'normal',
        textDecoration: 'underline',
        color: '$link-text',
        cursor: 'pointer',
        outlineOffset: '2px',
        '&:focus': {
          outline: 'none',
          textDecoration: 'underline',
        },
        '&:hover': {
          color: '$link-text-hover',
        },
        '&:active': {
          color: '$link-text-down',
        },
      },
      reset: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
});

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

  const el: any = getWrappedElement(content);

  return (
    <>
      {React.cloneElement(el, {
        ref: el.ref || ref,
        className: clsx(styles({use}), className, el.props.className),
        ...passThroughProps,
      })}
    </>
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
