import React from 'react';
import styled from 'react-emotion';
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

const {standard} = themes;
const {colors} = standard;
const {interactive, info, destructive, warning, success} = colors;

const ColorContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: ${standard.spacing.xl};

  &:not(:last-child) {
    margin-right: ${standard.spacing.xl2};
  }

  > *:not(:first-child) {
    margin-top: ${standard.spacing.xs};
    max-width: 120px;
  }
`;

const Swatch = styled.div`
  background: ${props => props.color};
  height: 120px;
  width: 120px;
`;

const Description = styled.div`
  font-size: ${standard.fontSizes[200]};
  max-width: 120px;
`;

const ColorDefinition = props => {
  return (
    <ColorContainer>
      <Swatch color={props.color} />
      <EzTextStyle use="strong">{props.name}</EzTextStyle>
      <EzTextStyle use="subdued">{props.color}</EzTextStyle>
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

  && > * + * {
    margin-left: ${({theme}) => theme.spacing.sm};
  }
`;

const Elements = styled.div`
  ul {
    margin-bottom: ${({theme}) => theme.spacing.xl2};
  }
`;

export default () => {
  return (
    <Elements>
      <section>
        <DocLink as="h3">Content elements</DocLink>
        <p>
          Recipe uses various colors in the application shell to visually divide the page and draw
          users focus to the primary content.
        </p>
        <p>
          Recipe uses the <code>colors.page.background</code> color to provide a low contrast color
          to de-emphasize the page background. Main page content should use the{' '}
          <code>colors.content.background</code> color. Borders between content containers should
          use the <code>colors.border.base</code> color.
        </p>
        <p>
          Primary navigation uses the <code>colors.navigation.background</code> color with the{' '}
          <code>colors.navigation.active</code> color to indicate the selected navigation items.
        </p>
        <ColorDefinition color={colors.page.background} name="page.background" />
        <ColorDefinition color={colors.content.background} name="content .background" />
        <ColorDefinition color={colors.border.base} name="border.base" />
        <ColorDefinition color={colors.border.subtle} name="border.subtle" />
        <ColorDefinition color={colors.navigation.background} name="navigation .background" />
        <ColorDefinition color={colors.navigation.active} name="navigation.active" />
      </section>
      <section>
        <DocLink as="h3">Text</DocLink>
        <p>
          Recipe uses the <code>colors.text.base</code> color for headings and body copy and the{' '}
          <code>colors.text.deemphasis</code> color for secondary, de-emphasized text.
        </p>
        <ColorDefinition color={colors.text.base} name="text .base" />
        <ColorDefinition color={colors.text.deemphasis} name="text .deemphasis" />
      </section>
      <section>
        <DocLink as="h3">Interactive elements</DocLink>
        <DocLink as="h4">Base</DocLink>
        <p>
          Recipe uses the <code>interactive.base</code> color to draw attention to interactive
          elements for interactions; e.g. buttons, forms, check-marks and radio buttons.
        </p>
        <ColorDefinition color={interactive.base} name="interactive.base" />
        <h4>Example usage</h4>

        <ul>
          <li>
            <p>Use for background color in primary buttons</p>
            <p>
              <EzButton use="primary">Click me</EzButton>
            </p>
          </li>
          <li>
            <p>
              Use for foreground color in secondary buttons, links, check-marks and radio buttons
            </p>
            <div>
              <Examples>
                <EzButton use="secondary">Click me</EzButton>
                <EzLink href="javascript:void(0);">View Orders</EzLink>
                <EzCheckbox label="Basic checkbox" checked onChange={() => {}} />
                <EzField
                  type="radio"
                  label="Single choice list"
                  labelHidden
                  options={[{label: '', value: 'a'}]}
                  value="a"
                />
              </Examples>
            </div>
          </li>
        </ul>
        <DocLink as="h4">Checked</DocLink>
        <p>
          Recipe uses the <code>colors.interactive.checked.background</code> color to indicate that
          interactive elements are currently enabled, active or selected. This background color
          should always be paired with the <code>colors.interactive.active.foreground</code> color
          for contrast and the <code>colors.interactive.active.border</code> color for containing
          selected element.
        </p>
        <p>
          Note: the use of the checked colors should be applied when the use of{' '}
          <a href="#base">
            <code>colors.interactive.base</code>
          </a>{' '}
          as a foreground color on the content background is insufficient to distinguish the
          selected option; e.g. Toggle, Segmented control etc.
        </p>
        <ColorDefinition
          color={interactive.checked.background}
          name="interactive .checked .background"
        />
        <ColorDefinition
          color={interactive.checked.foreground}
          name="interactive .checked .foreground"
        />
        <ColorDefinition color={interactive.checked.border} name="interactive .checked.border" />
        <h4>Example usage</h4>

        <ul>
          <li>
            <p>Use for background color in selected items</p>
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
        </ul>

        <DocLink as="h4">Hover and active</DocLink>
        <p>
          Recipe uses the <code>colors.interactive.hover.background</code> color to indicate when a
          user interacts with an element with a pointing device. It is generally triggered when the
          user hovers over an element with the cursor. Once the user has activated the element,
          typically when the user presses down the primary mouse button, Recipe applies the{' '}
          <code>colors.interactive.active.background</code> color as the element background until
          the interaction is complete, typically when the user releases the mouse button.
        </p>
        <p>
          For components that need to differentiate between hover and interactive states, such as
          highlighting interactive table rows (clicking the row navigate or performs an action), use
          the <code>colors.interactive.hover.highlight</code> color.
        </p>
        <p>
          Note: the use of the hover and active colors should only be applied as a background color
          when the element background color matches has the content background.
        </p>
        <ColorDefinition
          color={interactive.hover.background}
          name="interactive .hover.background"
        />
        <ColorDefinition
          color={interactive.active.background}
          name="interactive .active.background"
        />
        <ColorDefinition color={interactive.hover.highlight} name="interactive .hover.highlight" />
        <ColorDefinition color={interactive.hover.border} name="interactive .hover.border" />
        <h4>Example usage</h4>

        <ul>
          <li>
            <p>Use for background color in selected items</p>
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
        </ul>
      </section>
      <section>
        <DocLink as="h3">Color usage</DocLink>
        <p>
          Semantics are an important part of color design. Colors can be used to communicate the
          intent of an interface element:
        </p>
        <DocLink as="h4">Informational</DocLink>
        <p>Used for informational messages and to provide more context to surrounding content.</p>
        <ColorDefinition color={info.background} name="info.background" />
        <ColorDefinition color={info.border} name="info.border" />
        <ColorDefinition color={info.foreground} name="info.foreground" />
        <ColorDefinition color={info.text} name="info.text" />
        <DocLink as="h4">Success</DocLink>
        <p>Used for success/confirmation messages or actions with positive connotations.</p>
        <ColorDefinition color={success.background} name="success .background" />
        <ColorDefinition color={success.border} name="success .border" />
        <ColorDefinition color={success.foreground} name="success .foreground" />
        <ColorDefinition color={success.text} name="success.text" />
        <DocLink as="h4">Destructive</DocLink>
        <p>
          Used to indicate negative trends or destructive actions and to draw attention to elements
          or notifications that require immediate attention, such as error banners.
        </p>
        <ColorDefinition color={destructive.background} name="destructive .background" />
        <ColorDefinition color={destructive.border} name="destructive.border" />
        <ColorDefinition color={destructive.foreground} name="destructive .foreground" />
        <ColorDefinition color={destructive.text} name="destructive.text" />
        <DocLink as="h4">Warning</DocLink>
        <p>
          Used to draw attention to content that requires low priority action. Used to to warn or
          caution the user to proceed carefully going forward.
        </p>
        <ColorDefinition color={warning.background} name="warning .background" />
        <ColorDefinition color={warning.border} name="warning .border" />
        <ColorDefinition color={warning.foreground} name="warning .foreground" />
        <ColorDefinition color={warning.text} name="warning.text" />
      </section>
      <section>
        <DocLink as="h3">Brand Colors</DocLink>
        <ColorDefinition color={standard.colors.brandColors.ezOrange} name="ezOrange">
          Calling attention to desired behaviors. Conversion-focused.
        </ColorDefinition>
        <ColorDefinition color={standard.colors.brandColors.ezLogoGreen} name="ezLogoGreen">
          Currently for success/confirmation related messaging or things with positive connotations.
        </ColorDefinition>
        <ColorDefinition color={standard.colors.brandColors.ezGreen} name="ezGreen">
          Used for similar reasons to ezLogoGreen, but less often at the moment.
        </ColorDefinition>
        <ColorDefinition color={standard.colors.brandColors.ezBlue} name="ezBlue">
          Interactive elements. Provides affordance that something can be interacted with.
          Informational messages.
        </ColorDefinition>
      </section>
    </Elements>
  );
};
