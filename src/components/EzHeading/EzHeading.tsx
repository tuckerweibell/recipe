/* eslint-disable quote-props */
import React, {forwardRef, HTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzHeading.theme.config';
import {ClearSlots, useSlotProps} from '../../utils/slots';
import {domProps, mergeProps} from '../../utils';
import {VariantProps} from '../../utils/responsiveProps';

const headingCss = theme.css({
  color: '$heading-text',
  lineHeight: '$heading',
  margin: 0,

  variants: {
    size: {
      '1': {
        fontSize: '$800',
        fontWeight: '$regular',
      },
      '2': {
        fontSize: '$600',
        fontWeight: '$regular',
      },
      '3': {
        fontSize: '$300',
        fontWeight: '$bold',
      },
      '4': {
        fontSize: '$200',
        fontWeight: '$regular',
      },
      '5': {
        fontSize: '$100',
        fontWeight: '$bold',
      },
      '6': {
        fontSize: '$75',
        fontWeight: '$regular',
      },
    },
  },
});

const subheadingCss = theme.css({
  color: '$subheading-text',
  fontSize: '$subheading',
  fontWeight: '$subheading',
  lineHeight: '$subheading',
  marginTop: '$100',
});

const alignCss = theme.css({
  variants: {
    align: {
      center: {display: 'block', textAlign: 'center'},
      left: {display: 'block', textAlign: 'left'},
      right: {display: 'block', textAlign: 'right'},
    },
  },
});

type Sizes = VariantProps<typeof headingCss>;
type Alignment = VariantProps<typeof alignCss>;
type Tag = React.ComponentType<any>;
interface Props extends Omit<HTMLAttributes<HTMLElement>, 'as' | 'css'>, Alignment, Sizes {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subheading?: string;
}

/**
 * Headings are used to create visual hierarchy in page content. They are the primary means of controlling typography.
 */
const EzHeading = forwardRef<HTMLElement, Props>(
  ({children: title, subheading: subtitle, align, size, as, ...additionalProps}, ref) => {
    const HeadingLevel = (as || (`h${size}` as any)) as Tag;
    const slotProps = useSlotProps({}, 'heading');

    const headingElement = (
      <HeadingLevel className={headingCss({size})}>
        <ClearSlots>{title}</ClearSlots>
      </HeadingLevel>
    );

    const subheadingElement = subtitle && (size === '3' || size === '5') && (
      <div className={subheadingCss()}>
        <ClearSlots>{subtitle}</ClearSlots>
      </div>
    );

    const wrapperElement = (
      <div>
        {headingElement}
        {subheadingElement}
      </div>
    );

    const el = subheadingElement ? wrapperElement : headingElement;
    const props = domProps(slotProps, alignCss({align}));

    const children = React.cloneElement(
      el,
      mergeProps(
        props,
        additionalProps,
        // eslint-disable-next-line dot-notation
        {ref, className: EzHeading['__internalComponentSelector']},
        {className: el.props.className?.toString()}
      )
    );

    return <Style ruleset={theme}>{children}</Style>;
  }
);

// eslint-disable-next-line dot-notation
EzHeading['__internalComponentSelector'] = 'css-ezh';

export default EzHeading;
