import React from 'react';
import warning from 'tiny-warning';
import {axe, render} from '../../../../test-utils';
import EzFormControlLabel from '../../EzFormControlLabel';
import EzRadio from '../index';

jest.mock('tiny-warning');
const warningMock = warning as jest.Mock<typeof warning>;

describe('EzRadio', () => {
  beforeEach(() => {
    warningMock.mockReset();
  });

  describe('accessibility guidelines', () => {
    const ariaWarning =
      '<EzRadio /> was used without an `ariaLabel` attribute and without being wrapped in a label';

    it('should meet accessibility guidelines when wrapped in a label', async () => {
      const {container} = render(
        <EzFormControlLabel
          control={<EzRadio />}
          label="Coffee"
          helperText="Caffineated"
          value="coffee"
        />
      );
      const actual = await axe(container.outerHTML);
      expect(actual).toHaveNoViolations();
      expect(warningMock).toHaveBeenCalledWith(true, ariaWarning);
    });

    it('should meet accessibility guidelines when an `ariaLabel` prop is passed in', async () => {
      const {container} = render(<EzRadio ariaLabel="Coffee" />);
      const actual = await axe(container.outerHTML);
      expect(actual).toHaveNoViolations();
      expect(warningMock).toHaveBeenCalledWith(true, ariaWarning);
    });

    it('should not meet accessibility guidelines when no `ariaLabel` prop is passed in and when not wrapped in a label element', async () => {
      const {container} = render(<EzRadio />);
      const actual = await axe(container.outerHTML);
      expect(actual.violations).toEqual([
        expect.objectContaining({
          help: 'Form elements must have labels',
        }),
      ]);
      expect(warningMock).toHaveBeenCalledWith(false, ariaWarning);
    });
  });

  it('should pass type checking', () => {
    [
      {
        ariaLabel: <EzRadio ariaLabel="aria-label" />,
        checked: <EzRadio checked />,
        color: <EzRadio color="secondary" />,
        disabled: <EzRadio disabled />,
        name: <EzRadio name="radio-button" />,
        onChange: <EzRadio onChange={() => {}} />,
        size: <EzRadio size="small" />,
        value: <EzRadio value="one" />,
        variant: <EzRadio variant="outlined" />,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
