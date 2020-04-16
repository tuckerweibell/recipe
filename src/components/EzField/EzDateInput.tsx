import React, {useState, useEffect, useRef} from 'react';
import dayjs from 'dayjs';
import EzTextInput from './EzTextInput';
import {CalendarWrapper, Container, Combobox} from './EzDateInput.styles';
import EzCalendar from '../EzCalendar/EzCalendar';
import {useComboboxState, useCombobox, useComboboxInput, useComboboxFlyout} from './EzCombobox';
import {useUpdateEffect} from '../../utils/hooks';
import {ChevronIcon, CalendarIcon, InsetIcon} from '../Icons';

const CLOSE_CALENDAR_ON_SELECT_DELAY_MS = 100;

const EzDateInput = ({
  id,
  name,
  disabled,
  onChange,
  'aria-labelledby': ariaLabelledBy,
  ...props
}) => {
  const {placeholder = 'Select date'} = props;

  const [value, setValue] = useState(props.value);
  const [validDate, setValidDate] = useState(dayjs(value).isValid() ? value : null);

  const comboboxState = useComboboxState();
  const {ref: clickOutsideRef, ...combobox} = useCombobox(comboboxState, {
    ...props,
    'aria-haspopup': true,
    disabled,
    opened: comboboxState.visible,
  });

  const {hide, visible} = comboboxState;

  const timeout = useRef(null);

  useEffect(() => () => clearTimeout(timeout.current), []);

  useUpdateEffect(() => {
    if (dayjs(value).isValid()) setValidDate(value);
  }, [value]);

  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;

  useUpdateEffect(() => {
    onChangeRef.current(validDate);
  }, [validDate]);

  const comboboxInput = useComboboxInput(comboboxState, {
    id,
    name,
    value,
    'aria-labelledby': ariaLabelledBy,
    onChange: e => setValue(e.target.value),
    disabled,
    placeholder,
    error: props.error,
    touched: props.touched,
  });

  const comboboxFlyout = useComboboxFlyout(comboboxState);

  const {minDate, maxDate, filterDate} = props;

  return (
    <Container ref={clickOutsideRef} hasError={props.touched && props.error} opened={visible}>
      <Combobox {...combobox}>
        <InsetIcon insetY0 left0 pl3>
          <CalendarIcon />
        </InsetIcon>
        <EzTextInput {...comboboxInput} />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={visible} />
        </InsetIcon>
      </Combobox>
      {visible && (
        <CalendarWrapper
          {...comboboxFlyout}
          onKeyDown={event => {
            if (event.key === 'Escape') hide();
          }}
        >
          <EzCalendar
            {...{minDate, maxDate, filterDate}}
            value={validDate}
            onChange={date => {
              setValue(date);
              comboboxInput.ref.current.focus();
              timeout.current = setTimeout(hide, CLOSE_CALENDAR_ON_SELECT_DELAY_MS);
            }}
          />
        </CalendarWrapper>
      )}
    </Container>
  );
};

export default EzDateInput;
