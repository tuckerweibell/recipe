import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base, position} from './EzLabelledItem.styles';

const LabelWrapper = styled.div(base, position);

/**
 * Provides a label that can appear in one of several positions relative to its associated content.
 * Typically used to label an interactive element or a short string of text.
 */
const EzLabelledItem = ({children, position: labelPosition, size, title}) => (
  <div>
    {labelPosition === 'bottom' && children}
    <LabelWrapper position={labelPosition} size={size}>
      {title}
    </LabelWrapper>
    {['top', 'left'].includes(labelPosition) && children}
  </div>
);

EzLabelledItem.propTypes = {
  /**
   * The content to render in conjunction with the label
   */
  children: PropTypes.node.isRequired,
  /**
   * Determines the position of the label relative to its child content
   */
  position: PropTypes.oneOf(['top', 'bottom', 'left']).isRequired,
  /**
   * Determines the size of the label text
   */
  size: PropTypes.oneOf(['normal', 'small']),
  /**
   * The text for label itself
   */
  title: PropTypes.node.isRequired,
};

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
