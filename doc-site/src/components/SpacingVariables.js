import React from 'react';
import styled from '@emotion/styled';
import {EzTextStyle, themes} from '@ezcater/recipe';
import Measure from './Measure';

const {standard} = themes;

const SpacingContainer = styled.div`
  display: flex;
  margin-bottom: 1em;

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

export default () => {
  return (
    <SpacingContainer>
      {Object.keys(standard.spacing).map(key => {
        return (
          <Measure cssProperty="height" key={key}>
            {([ref, measured]) => (
              <div>
                <div>
                  <EzTextStyle use="strong">{key}</EzTextStyle>
                </div>
                <div>{measured}</div>
                <Block ref={ref} height={standard.spacing[key]} />
              </div>
            )}
          </Measure>
        );
      })}
    </SpacingContainer>
  );
};
