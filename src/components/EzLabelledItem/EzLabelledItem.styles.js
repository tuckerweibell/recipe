import {css} from 'react-emotion';
import {variants} from '../../styles/';

export const base = ({theme}) => css`
  color: ${theme.colors.blueGrays[100]};
`;

const normalSize = ({theme}) => css`
  font-size: ${theme.fontSizes[300]};
  font-weight: ${theme.fontWeights.normal};
`;

const top = ({size, theme}) => css`
  font-size: ${size === 'small' && theme.fontSizes[200]};
  font-weight: ${size === 'small' && theme.fontWeights.bold};
  margin-bottom: ${theme.spacing.xs2};
`;

const bottom = props => css`
  ${normalSize(props)};
  margin-top: ${props.theme.spacing.xs2};
`;

const left = props => css`
  ${normalSize(props)};
  display: inline;
  margin-right: ${props.theme.spacing.sm};
`;

export const position = variants('position', {
  top,
  bottom,
  left,
});
