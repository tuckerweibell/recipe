import {css} from 'react-emotion';
import {variants} from '../../styles/';

export const base = ({theme}) => css`
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

export const position = variants('position', {
  top,
  bottom,
  left,
});
