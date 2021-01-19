import React from 'react';
import * as CSS from 'csstype';
import {CardContainer, SectionContainer} from './EzCard.styles';
import EzButton from '../EzButton';
import EzCardFooter from './EzCardFooter';
import EzCardSection from './EzCardSection';
import EzCardHeading from './EzCardHeading';
import EzCardImage from './EzCardImage';
import {filterValidProps} from '../../utils';

function isEzCardSection(element) {
  return element?.type?.displayName === 'EzCardSection';
}

function wrappedChildren(children) {
  if (isEzCardSection(children?.[0] || children)) return children;

  return <EzCardSection>{children}</EzCardSection>;
}

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

const isExpandableCardFooter = (expandable: any): expandable is ExpandableCardFooter =>
  expandable && (expandable as ExpandableCardFooter).expandLabel !== undefined;

/**
 * Cards are the primary means of grouping sections on a page.
 */
const EzCard: React.FC<CardProps> = ({
  title,
  subtitle,
  accent,
  actions,
  expandable,
  horizontal,
  children,
  imageSrc,
  imagePosition = 'top',
  imageMaxWidth,
  imageMaxHeight,
  size,
  isQuiet,
  clickable,
  ...props
}) => (
  <CardContainer
    {...filterValidProps(props)}
    accent={accent}
    imagePosition={imageSrc && imagePosition}
    size={size || (isQuiet ? 'small' : undefined)}
    isQuiet={isQuiet}
    clickable={clickable}
  >
    <div>
      {title && <EzCardHeading {...{actions, title, subtitle}} />}
      <SectionContainer horizontal={horizontal}>{wrappedChildren(children)}</SectionContainer>
      {isExpandableCardFooter(expandable) && (
        <EzCardFooter>
          <EzButton use="tertiary" onClick={expandable.onClick}>
            {expandable.isExpanded && expandable.collapseLabel
              ? expandable.collapseLabel
              : expandable.expandLabel}
          </EzButton>
        </EzCardFooter>
      )}
    </div>
    {imageSrc && (
      <EzCardImage
        src={imageSrc}
        position={imagePosition}
        imageMaxWidth={imageMaxWidth}
        imageMaxHeight={imageMaxHeight}
        alt=""
      />
    )}
  </CardContainer>
);

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
