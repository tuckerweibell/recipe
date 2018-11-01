import React from 'react';
import styled from 'react-emotion';
import {EzTextStyle} from '@ezcater/recipe';
import {standard} from '../../../recipe/src/themes';

function remToPx(rem) {
  return rem.replace('rem', '') * standard.baseFontSize.replace('px', '') + 'px';
}

const SpacingContainer = styled.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: ${standard.spacing.xl};
  }
`;

const Block = styled.div`
  background: ${standard.colors.blues[600]};
  height: ${props => props.height};
  margin-top: ${standard.spacing.xs};
  width: ${standard.spacing.xl2};
`;

export default props => {
  return (
    <SpacingContainer>
      {Object.keys(standard.spacing).map(key => {
        return (
          <div key={key}>
            <div>
              <EzTextStyle use="strong">{key}</EzTextStyle>
            </div>
            <div>{remToPx(standard.spacing[key])}</div>
            <Block height={standard.spacing[key]} />
          </div>
        );
      })}
    </SpacingContainer>
  );
};
