import React from 'react';
import * as CSS from 'csstype';
import Style from '@ezcater/snitches';
import theme from './EzCard.theme.config';
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
import {SlotProvider} from '../../utils/slots';
import {EzFooter, EzHeader, EzPreview} from '../EzContent';

type DOMProps = React.HTMLAttributes<HTMLElement>;
type HeadingProps = React.ComponentProps<typeof EzCardHeading>;

type ExpandableCardFooter = {
  expandLabel: string;
  collapseLabel: string;
  onClick: React.MouseEventHandler;
  isExpanded?: boolean;
};

type Position = 'top' | 'right' | 'left';
type ImageProps =
  | {imageSrc: string; imagePosition?: Position}
  | {imageSrc?: never; imagePosition?: never};
type ImageSizeProps = {
  imageMaxHeight?: CSS.MaxHeightProperty<string | number>;
  imageMaxWidth?: CSS.MaxWidthProperty<string | number>;
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

const containsChild = (children, type) =>
  React.Children.toArray(children).some((child: any) => child.type?.displayName === type);

const hasContentSlot = children => containsChild(children, 'EzContent');
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
  ...props
}) => {
  const {imagePosition = 'top'} = responsiveProps(props as any, 'imagePosition');
  return (
    <Style ruleset={theme}>
      <section
        {...filterValidProps(props)}
        className={clsx(
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
    </Style>
  );
};

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
