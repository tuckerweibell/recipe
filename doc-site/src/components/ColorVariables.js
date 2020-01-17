import React from 'react';
import {
  EzTextStyle,
  themes,
  EzButton,
  EzCheckbox,
  EzField,
  EzLink,
  EzSegmentedControl,
  EzToggle,
} from '@ezcater/recipe';
import styled from '@emotion/styled';

const {standard} = themes;
const {colors} = standard;

const ColorContainer = styled.span`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: ${standard.spacing.xl};

  &:not(:last-child) {
    margin-right: ${standard.spacing.xl2};
  }

  && > * + * {
    margin-top: ${standard.spacing.xs};
    max-width: 120px;
  }
`;

const Swatch = styled.span`
  background: ${props => props.color};
  height: 120px;
  width: 120px;
`;

const Description = styled.span`
  font-size: ${standard.fontSizes[200]};
  max-width: 120px;
`;

const findColor = name =>
  name
    .replace(/ /g, '')
    .split('.')
    .reduce((val, key) => val[key], colors);

export const ColorDefinition = props => {
  const color = props.color || findColor(props.name);
  return (
    <ColorContainer>
      <Swatch color={color} />
      <EzTextStyle use="strong">{props.name}</EzTextStyle>
      <EzTextStyle use="subdued">{color}</EzTextStyle>
      <Description>{props.children}</Description>
    </ColorContainer>
  );
};

const DocLink = props => {
  const Heading = props.as || 'h2';
  const id = props.children.toLowerCase().replace(/[^\w]+/gu, '-');
  return (
    <Heading id={id}>
      <a href={`#${id}`} aria-hidden="true" className="anchor">
        <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
          <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
          />
        </svg>
      </a>
      {props.children}
    </Heading>
  );
};

const Examples = styled.div`
  align-items: baseline;
  display: flex;
  margin-top: ${({theme}) => theme.spacing.sm};

  && > * + * {
    margin-left: ${({theme}) => theme.spacing.sm};
  }
`;

const StyledExample = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.xl2};
  list-style: none;

  p {
    margin-bottom: ${({theme}) => theme.spacing.sm};
  }
`;

const Base = () => (
  <StyledExample>
    <li>
      Use for background color in primary buttons
      <Examples>
        <EzButton use="primary">Click me</EzButton>
      </Examples>
    </li>
    <li>
      Use for foreground color in secondary buttons, links, check-marks and radio buttons
      <Examples>
        <EzButton use="secondary">Click me</EzButton>
        <EzLink href="#" onClick={e => e.preventDefault()}>
          View Orders
        </EzLink>
        <EzCheckbox label="Basic checkbox" checked onChange={() => {}} />
        <EzField
          type="radio"
          label="Single choice list"
          labelHidden
          options={[{label: '', value: 'a'}]}
          value="a"
        />
      </Examples>
    </li>
  </StyledExample>
);

const Checked = () => (
  <StyledExample>
    <li>
      Use for background color in selected items
      <Examples>
        <EzToggle onChange={() => {}} checked={true} />
        <EzSegmentedControl
          name="view-map-options"
          label="Map View"
          labelPosition="hidden"
          options={[
            {label: 'Map', value: 'map'},
            {label: 'Transit', value: 'transit'},
            {label: 'Satellite', value: 'satellite'},
          ]}
          active="map"
        />
      </Examples>
    </li>
  </StyledExample>
);

const Hover = () => (
  <StyledExample>
    <li>
      Use for background color on hovered items
      <Examples>
        <EzCheckbox label="Basic checkbox" checked onChange={() => {}} />
        <EzField
          type="radio"
          label="Single choice list"
          labelHidden
          options={[{label: '', value: 'a'}]}
          value="a"
        />
        <EzSegmentedControl
          name="view-map-options2"
          label="Map View"
          labelPosition="hidden"
          options={[
            {label: 'Map', value: 'map'},
            {label: 'Transit', value: 'transit'},
            {label: 'Satellite', value: 'satellite'},
          ]}
          active="map"
        />
        <EzButton use="secondary">Click me</EzButton>
      </Examples>
    </li>
  </StyledExample>
);

export const Example = {Base, Checked, Hover};
