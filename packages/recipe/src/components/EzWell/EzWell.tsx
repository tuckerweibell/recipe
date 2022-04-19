import React, {forwardRef, Ref, ReactNode, HTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzWell.theme.config';
import {filterDOMProps} from '../EzField/filterDOMProps';

const styles = theme.css({
  textAlign: 'start',
  display: 'block',
  minWidth: '$well-min-w',
  padding: '$well-p',
  borderWidth: '$well',
  borderStyle: 'solid',
  borderRadius: '$regular',
  backgroundColor: '$well-bg',
  borderColor: '$well-border',
});

type ariaKeys = 'aria-label' | 'aria-labelledby';
type domProps = 'className' | 'id';

interface Props extends Pick<HTMLAttributes<HTMLDivElement>, ariaKeys | domProps> {
  /**
   * The contents of the Well.
   */
  children: ReactNode;
  /**
   * An accessibility role for the well.
   */
  role?: string;
}

function Well(props: Props, ref: Ref<HTMLDivElement>) {
  /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
  const {children, role, ...otherProps} = props;

  if (!role && (props['aria-label'] || props['aria-labelledby']))
    console.warn('A labelled Well must have a role.');

  return (
    <Style ruleset={theme}>
      <div
        {...filterDOMProps(otherProps, {
          propNames: new Set(['id', 'className']),
        })}
        role={role}
        ref={ref}
        className={styles()}
      >
        {children}
      </div>
    </Style>
  );
}

/**
 * A Well is a content container that displays non-editable content separate from other content on the screen.
 * Often this is used to display preformatted text, such as code/markup examples on a documentation page.
 */
const EzWell = forwardRef(Well);

export default EzWell;
