import React from 'react';
import {MaxHeightProperty, MaxWidthProperty} from 'csstype'; // eslint-disable-line import/no-extraneous-dependencies
import {VariantProps} from '@stitches/core';
import {
  grid,
  msGrid,
  container,
  preview,
  header,
  content,
  footer,
  sections,
  orientation,
} from './EzCard.styles';
import EzButton from '../EzButton';
import EzCardSection from './EzCardSection';
import EzCardHeading from './EzCardHeading';
import {clsx, filterValidProps, responsiveProps} from '../../utils';
import {SlotProvider, containsChild, hasContentSlot} from '../../utils/slots';
import {EzFooter, EzHeader, EzPreview} from '../EzContent';

type DOMProps = React.HTMLAttributes<HTMLElement>;
type HeadingProps = React.ComponentProps<typeof EzCardHeading>;

type ExpandableCardFooter = {
  expandLabel: string;
  collapseLabel: string;
  onClick: React.MouseEventHandler;
  isExpanded?: boolean;
};

type Position = Pick<VariantProps<typeof preview>, 'position'>['position'];
type ImageProps =
  | {imageSrc: string; imagePosition?: Position}
  | {imageSrc?: never; imagePosition?: never};
type ImageSizeProps = {
  imageMaxHeight?: MaxHeightProperty<string | number>;
  imageMaxWidth?: MaxWidthProperty<string | number>;
};

type CardProps = (HeadingProps & ImageProps & ImageSizeProps) & {
  children: React.ReactNode;
  horizontal?: boolean;
  accent?: 'info';
  expandable?: ExpandableCardFooter;
  size?: 'small' | 'medium';
  isQuiet?: boolean;
  /** The card is visually presented as being clickable. */
  clickable?: boolean;
};

const hasCardSection = children => containsChild(children, 'EzCardSection');

const unitlessToPx = value => (typeof value === 'number' ? `${value}px` : value);
/**
 * Cards are the primary means of grouping sections on a page.
 */
const EzCard: React.FC<DOMProps & CardProps> = ({
  title,
  subtitle,
  accent,
  actions,
  expandable,
  horizontal: isHorizontal,
  children,
  imageSrc,
  imageMaxWidth: maxWidth,
  imageMaxHeight: maxHeight,
  size,
  isQuiet,
  clickable,
  style = {},
  className,
  ...props
}) => {
  const {imagePosition = 'top'} = responsiveProps(props as any, true, 'imagePosition');
  return (
    <section
      {...filterValidProps(props)}
      className={clsx(
        className,
        grid({imagePosition}),
        // dynamically generate styles for IE (which doesn't support inline CSS vars)
        msGrid(unitlessToPx(maxWidth))({imagePosition}),
        container({
          accent,
          size: size || (isQuiet ? 'small' : undefined),
          isQuiet,
          clickable,
        })
      )}
      style={{...style, '--sizes-card-preview-max-w': unitlessToPx(maxWidth)} as any}
    >
      <SlotProvider
        slots={{
          preview: {className: preview({position: imagePosition})},
          header: {className: header()},
          content: {className: content()},
          footer: {className: footer()},
        }}
      >
        {imageSrc && (
          <EzPreview>
            <img src={imageSrc} alt="" style={{maxHeight, maxWidth, objectFit: 'cover'}} />
          </EzPreview>
        )}
        {title && (
          <EzHeader>
            <EzCardHeading {...{actions, title, subtitle}} />
          </EzHeader>
        )}
        {hasContentSlot(children) ? (
          children
        ) : (
          <div
            className={clsx(
              sections(),
              orientation({layout: isHorizontal ? 'horizontal' : 'vertical'})
            )}
          >
            {hasCardSection(children) ? children : <EzCardSection>{children}</EzCardSection>}
          </div>
        )}
        {expandable && (
          <EzFooter>
            <EzButton use="tertiary" onClick={expandable.onClick}>
              {expandable.isExpanded && expandable.collapseLabel
                ? expandable.collapseLabel
                : expandable.expandLabel}
            </EzButton>
          </EzFooter>
        )}
      </SlotProvider>
    </section>
  );
};

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
