import React from 'react';
import Label from '../EzLabel';

/**
 * Provides a label that can appear in one of several positions relative to its associated content.
 * Typically used to label an interactive element or a short string of text.
 */
type ItemProps = {
  children: React.ReactNode;
  position: 'top' | 'bottom' | 'left';
  size?: 'normal' | 'small';
  title: string;
  htmlFor?: string;
};

/**
 * @deprecated Please use EzLabel instead.
 */
const EzLabelledItem: React.FC<ItemProps> = ({
  children,
  position: labelPosition,
  size,
  title,
  htmlFor,
}) => (
  <div>
    {labelPosition === 'bottom' && children}
    <Label
      position={labelPosition === 'left' ? 'side' : labelPosition}
      use={size === 'normal' ? 'primary' : size === 'small' ? 'secondary' : size}
      as={htmlFor ? 'label' : 'div'}
      htmlFor={htmlFor}
    >
      {title}
    </Label>
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
