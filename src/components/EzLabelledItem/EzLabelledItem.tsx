import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../themes/styled';

import {base, position} from './EzLabelledItem.styles';

type LabelWrapperProps = {
  position: string;
  size: string;
};
const LabelWrapper = styled.div<LabelWrapperProps>(base, position);

/**
 * Provides a label that can appear in one of several positions relative to its associated content.
 * Typically used to label an interactive element or a short string of text.
 */
type ItemProps = {
  children: any;
  position?: string;
  size?: string;
  title: string;
};

const EzLabelledItem: React.SFC<ItemProps> = ({children, position: labelPosition, size, title}) => (
  <div>
    {labelPosition === 'bottom' && children}
    <LabelWrapper position={labelPosition} size={size}>
      {title}
    </LabelWrapper>
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
