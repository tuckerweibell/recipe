import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'react-emotion';
import {variants} from '../../styles/';
import {standard} from '../../themes';

const base = ({theme}) => css`
  color: ${theme.colors.blueGrays[100]};
`;

const normalSize = ({theme}) => css`
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeights.base};
`;

const top = ({size, theme}) => css`
  font-size: ${theme.fontSizes[size]};
  font-weight: ${size === 'small' && theme.fontWeights.medium};
  margin-bottom: ${theme.spacing[1]};
`;

const bottom = props => css`
  ${normalSize(props)};
  margin-top: ${props.theme.spacing[1]};
`;

const left = props => css`
  ${normalSize(props)};
  display: inline;
  margin-right: ${props.theme.spacing[3]};
`;

const position = variants('position', {
  top,
  bottom,
  left,
});

const LabelWrapper = styled.div(base, position);
LabelWrapper.defaultProps = {theme: standard};

/**
 * Provides a label that can appear in one of several positions relative to its associated content.
 * Typically used to label an interactive element or a short string of text.
 */
const EzLabelledItem = ({children, position, size, title}) => (
  <div>
    {position === 'bottom' && children}
    <LabelWrapper position={position} size={size}>
      {title}
    </LabelWrapper>
    {['top', 'left'].includes(position) && children}
  </div>
);

EzLabelledItem.propTypes = {
  /**
   * The content to render in conjunction with the label
   */
  children: PropTypes.element,
  /**
   * Determines the position of the label relative to its child content
   */
  position: PropTypes.oneOf(['top', 'bottom', 'left']).isRequired,
  /**
   * Determines the size of the label text
   */
  size: PropTypes.oneOf(['normal', 'small']).isRequired,
  /**
   * The text for label itself
   */
  title: PropTypes.string.isRequired,
};

EzLabelledItem.defaultProps = {theme: standard};

EzLabelledItem.displayName = 'EzLabelledItem';

/**
 * @component
 */
export default EzLabelledItem;
