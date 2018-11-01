import React from 'react';
import styled from 'react-emotion';
import {EzTextStyle, themes} from '@ezcater/recipe';

const {standard} = themes;

const ColorContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: ${standard.spacing.xl};

  &:not(:last-child) {
    margin-right: ${standard.spacing.xl2};
  }

  > *:not(:first-child) {
    margin-top: ${standard.spacing.xs};
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

const ColorShades = props => {
  return (
    <React.Fragment>
      {Object.keys(props.color).map(key => {
        return <ColorDefinition color={props.color[key]} name={key} key={key} />;
      })}
    </React.Fragment>
  );
};

export default props => {
  return (
    <React.Fragment>
      <h3>Brand Colors</h3>
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

      <h3>White and black</h3>
      <ColorDefinition color={standard.colors.white} name="white">
        White. Background for most content.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.black} name="black">
        Black.
      </ColorDefinition>

      <h3>Grays</h3>
      <ColorDefinition color={standard.colors.grays[0]} name="grays[0]">
        Alias for white.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[100]} name="grays[100]">
        The background used for the control that expands/collapses or hides/reveals content.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[200]} name="grays[200]">
        Background of ezManage pages
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[300]} name="grays[300]">
        Used in the background of light tags on the customer page.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[400]} name="grays[400]">
        Border color of cards and interactive elements
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[500]} name="grays[500]">
        Border color of interactive elements when hovering.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[600]} name="grays[600]">
        Used for secondary, de-emphasized text.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[700]} name="grays[700]">
        Main text color. Used currently for headings and body copy.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[800]} name="grays[800]">
        Background color for our primary navigation
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[900]} name="grays[900]">
        Background color for selected nav item.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.grays[1000]} name="grays[1000]">
        Alias for black.
      </ColorDefinition>

      <h3>Blues</h3>
      <ColorDefinition color={standard.colors.blues[100]} name="blues[100]">
        Hover background color for table rows that are interactive (clicking the row navigates or
        performs an action).
      </ColorDefinition>
      <ColorDefinition color={standard.colors.blues[200]} name="blues[200]">
        Background of info flash messages and blue informational panels.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.blues[300]} name="blues[300]">
        Background color of blue circle icons.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.blues[400]} name="blues[400]">
        Border color of info message and blue informational panels.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.blues[500]} name="blues[500]">
        Upcoming customer order status indicator color. Current brand color for Direct Entry.
      </ColorDefinition>
      <ColorDefinition color={standard.colors.blues[600]} name="blues[600]">
        Interactive elements. Provides affordance that something can be interacted with.
        Informational messages. Messaging promoting Direct Entry (This is likely going to change at
        some point. Use sparingly).
      </ColorDefinition>
      <ColorDefinition color={standard.colors.blues[700]} name="blues[700]">
        Hover state for links
      </ColorDefinition>
      <h3>Color families</h3>
      <p>
        Typically you should use the base color first. The other shades should only be used in
        conjunction with base.
      </p>
      <h4>Reds</h4>
      <p>
        Error messages, validation messages. Destructive actions and things with negative
        connotations.
      </p>
      <ColorShades color={standard.colors.reds} />
      <h4>Orange</h4>
      <p>
        Calling attention to desired behaviors. Conversion-focused. Orange is a special case, other
        shades are not available.
      </p>
      <ColorDefinition color={standard.colors.orange} name="orange" />
      <h4>Yellows</h4>
      <p>Warning messages. Messaging promoting the marketplace (Use Sparingly).</p>
      <ColorShades color={standard.colors.yellows} />
      <h4>Greens</h4>
      <p>
        Currently for success/confirmation related messaging or things with positive connotations.
      </p>
      <ColorShades color={standard.colors.greens} />
      <h4>Teals</h4>
      <p>Color for things related to ezOrdering.</p>
      <ColorShades color={standard.colors.teals} />
      <h4>Purples</h4>
      <p>Use for helpful product marketing messages that aren’t specific to a product.</p>
      <ColorShades color={standard.colors.purples} />
    </React.Fragment>
  );
};
