import React from 'react';
import LabelledItem from './EzLabelledItem.styles';

/**
 * Provides a label that can appear in one of several positions relative to its associated content.
 * Typically used to label an interactive element or a short string of text.
 */
type ItemProps = {
  children: React.ReactNode;
  position: 'top' | 'bottom' | 'left';
  size?: 'normal' | 'small';
  title: string;
};

const EzLabelledItem: React.SFC<ItemProps> = ({children, position: labelPosition, size, title}) => (
  <div>
    {labelPosition === 'bottom' && children}
    <LabelledItem position={labelPosition} size={size}>
      {title}
    </LabelledItem>
    {['top', 'left'].includes(labelPosition) && children}
  </div>
);

/**
 * defaultProps
 * @property {string} size - uses defaults to the base font size.
 */
EzLabelledItem.defaultProps = {size: 'normal'};

EzLabelledItem.displayName = 'EzLabelledItem';

/**
 * @component
 */
export default EzLabelledItem;
