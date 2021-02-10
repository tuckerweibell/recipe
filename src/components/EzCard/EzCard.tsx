/** @jsx jsx */
import {jsx, ClassNames, css} from '@emotion/core';
import React from 'react';
import * as CSS from 'csstype';
import {
  grid,
  container,
  preview,
  header,
  content,
  footer,
  sections,
  horizontal,
  vertical,
} from './EzCard.styles';
import EzButton from '../EzButton';
import EzCardSection from './EzCardSection';
import EzCardHeading from './EzCardHeading';
import {filterValidProps} from '../../utils';
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
  imagePosition = 'top',
  imageMaxWidth: maxWidth,
  imageMaxHeight: maxHeight,
  size,
  isQuiet,
  clickable,
  ...props
}) => (
  <section
    {...filterValidProps(props)}
    css={css([grid({imagePosition, maxWidth}), container({accent, size, isQuiet, clickable})])}
  >
    <ClassNames>
      {({css: toClassName}) => (
        <SlotProvider
          slots={{
            preview: {className: toClassName(preview({imagePosition}))},
            header: {className: toClassName(header())},
            content: {className: toClassName(content())},
            footer: {className: toClassName(footer())},
          }}
        >
          {imageSrc && (
            <EzPreview>
              <img src={imageSrc} alt="" css={{maxHeight, maxWidth, objectFit: 'cover'}} />
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
            <div css={[sections(), isHorizontal ? horizontal() : vertical()]}>
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
      )}
    </ClassNames>
  </section>
);

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
