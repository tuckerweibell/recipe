import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzTextStyle from '../EzTextStyle';

describe('EzTextStyle', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzTextStyle use="strong">Strong Text</EzTextStyle>);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        asProp: <EzTextStyle as="small">Small Text</EzTextStyle>,
        useProp: <EzTextStyle use="strong">Strong Text</EzTextStyle>,
        alignProp: <EzTextStyle align="left">Strong Text</EzTextStyle>,
        alignPropResponsive: (
          <EzTextStyle align={{base: 'center', medium: 'left'}}>Strong Text</EzTextStyle>
        ),
        domProps: (
          <EzTextStyle
            // can pass arbitrary data-* attributes
            data-custom-tag="foo-bar"
            // can pass boolean data-* attributes
            data-bool
            // can pass aria-* attributes
            aria-describedby="#description"
            // can pass html attributes
            hidden
            // can forward ref
            ref={React.createRef()}
          >
            Small Text
          </EzTextStyle>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
