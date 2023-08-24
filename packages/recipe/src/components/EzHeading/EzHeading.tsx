/* eslint-disable quote-props */
import React, {forwardRef, HTMLAttributes} from 'react';
import {VariantProps} from '@stitches/core';
import theme from '../theme.config';
import {ClearSlots, useSlotProps} from '../../utils/slots';
import {domProps, mergeProps} from '../../utils';

const headingCss = theme.css({
  fontFamily: '$headerFont',
  color: '$heading-text',
  margin: 0,

  variants: {
    size: {
      '1': {
        fontSize: '$h1',
        fontWeight: '$h1',
        lineHeight: '$h1',
      },
      '2': {
        fontSize: '$h2',
        fontWeight: '$h2',
        lineHeight: '$h2',
      },
      '3': {
        fontSize: '$h3',
        fontWeight: '$h3',
        lineHeight: '$h3',
      },
      '4': {
        fontSize: '$h4',
        fontWeight: '$h4',
        lineHeight: '$h4',
      },
      '5': {
        fontSize: '$h5',
        fontWeight: '$h5',
        lineHeight: '$h5',
      },
      '6': {
        fontSize: '$h6',
        fontWeight: '$h6',
        lineHeight: '$h6',
      },
    },
    casing: {
      uppercase: {textTransform: 'uppercase'},
    },
    color: {
      green: {color: '$heading-green'},
      blue: {color: '$heading-blue'},
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

type TextStyle = VariantProps<typeof headingCss>;
type Alignment = VariantProps<typeof alignCss>;
type Tag = React.ComponentType<any>;
interface Props extends Omit<HTMLAttributes<HTMLElement>, 'as' | 'css'>, Alignment, TextStyle {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subheading?: string;
  casing?: 'uppercase';
  color?: 'green' | 'blue';
}

/**
 * Headings are used to create visual hierarchy in page content. They are the primary means of controlling typography.
 */
const EzHeading = forwardRef<HTMLElement, Props>(
  (
    {children: title, subheading: subtitle, align, size, casing, color, as, ...additionalProps},
    ref
  ) => {
    const HeadingLevel = (as || (`h${size}` as any)) as Tag;
    const slotProps = useSlotProps({}, 'heading');

    const headingElement = (
      <HeadingLevel className={headingCss({size, casing, color})}>
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

    return React.cloneElement(
      el,
      mergeProps(
        props,
        additionalProps,
        // eslint-disable-next-line dot-notation
        {ref, className: EzHeading['__internalComponentSelector']},
        {className: el.props.className?.toString()}
      )
    );
  }
);

// eslint-disable-next-line dot-notation
EzHeading['__internalComponentSelector'] = 'css-ezh';

EzHeading.displayName = 'EzHeading';

export default EzHeading;
