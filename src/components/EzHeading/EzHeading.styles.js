import styled, {css} from 'react-emotion';
import variant from 'styled-component-variant';

export const Subheading = styled.div`
  color: ${props => props.theme.colors.grays[600]};
  font-size: ${props => props.theme.fontSizes[300]};
  font-weight: ${props => props.theme.fontWeights.normal};
`;

const heading = (size, weight) => ({theme}) => css`
  font-size: ${theme.fontSizes[size]};
  font-weight: ${theme.fontWeights[weight]};
  margin: 0;
`;

const size = variant('size', {
  1: heading(700, 'normal'),
  2: heading(600, 'normal'),
  3: heading(500, 'bold'),
  4: heading(400, 'normal'),
  5: heading(300, 'bold'),
  6: heading(200, 'normal'),
});

export const headings = ['1', '2', '3', '4', '5', '6'].reduce((res, n) => {
  const tag = `h${n}`;
  return Object.assign({[tag]: styled(tag)(size)}, res);
}, {});
