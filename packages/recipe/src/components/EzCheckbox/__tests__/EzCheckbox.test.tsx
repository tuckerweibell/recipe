import React from 'react';
import warning from 'tiny-warning';
import {axe, render} from '../../../../test-utils';
import EzFormControlLabel from '../../EzFormControlLabel';
import EzCheckbox from '../index';

jest.mock('tiny-warning');
const warningMock = warning as jest.Mock<typeof warning>;

describe('EzCheckbox', () => {
  beforeEach(() => {
    warningMock.mockReset();
  });

  describe('accessibility guidelines', () => {
    const ariaWarning =
      '<EzCheckbox /> was used without an `ariaLabel` attribute and without being wrapped in a label';

    it('should meet accessibility guidelines when wrapped in a label', async () => {
      const {container} = render(
        <EzFormControlLabel
          control={<EzCheckbox />}
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
      const {container} = render(<EzCheckbox ariaLabel="Coffee" />);
      const actual = await axe(container.outerHTML);
      expect(actual).toHaveNoViolations();
      expect(warningMock).toHaveBeenCalledWith(true, ariaWarning);
    });

    it('should not meet accessibility guidelines when no `ariaLabel` prop is passed in and when not wrapped in a label element', async () => {
      const {container} = render(<EzCheckbox />);
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
        ariaLabel: <EzCheckbox ariaLabel="aria-label" />,
        checked: <EzCheckbox checked />,
        color: <EzCheckbox color="secondary" />,
        defaultChecked: <EzCheckbox defaultChecked />,
        disabled: <EzCheckbox disabled />,
        id: <EzCheckbox id="test" />,
        indeterminate: <EzCheckbox indeterminate />,
        name: <EzCheckbox name="test" />,
        onBlur: <EzCheckbox onBlur={() => {}} />,
        onChange: <EzCheckbox onChange={() => {}} />,
        onFocus: <EzCheckbox onFocus={() => {}} />,
        size: <EzCheckbox size="small" />,
        value: <EzCheckbox value="one" />,
        variant: <EzCheckbox variant="outlined" />,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
