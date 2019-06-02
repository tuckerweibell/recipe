import React, {useState, useEffect, useRef} from 'react';
import dayjs from 'dayjs';
import {CalendarWrapper, Container, Combobox} from './EzDateInput.styles';
import EzCalendar from '../EzCalendar/EzCalendar';
import {useComboboxState, useCombobox, useComboboxInput, useComboboxFlyout} from './EzCombobox';
import {useUpdateEffect} from '../../utils/hooks';

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
  const [validDate, setValidDate] = useState(null);

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

  useEffect(() => {
    if (dayjs(value).isValid()) setValidDate(value);
  }, [value]);

  useUpdateEffect(() => {
    onChange(validDate);
  }, [validDate, onChange]);

  const comboboxInput = useComboboxInput(comboboxState, {
    id,
    name,
    value,
    'aria-labelledby': ariaLabelledBy,
    onChange: e => {
      setValue(e.target.value);
      onChange(e.target.value);
    },
    disabled,
    placeholder,
  });

  const comboboxFlyout = useComboboxFlyout(comboboxState);

  return (
    <Container ref={clickOutsideRef} hasError={props.touched && props.error} opened={visible}>
      <Combobox {...combobox}>
        <input {...comboboxInput} />
      </Combobox>
      {visible && (
        <CalendarWrapper
          {...comboboxFlyout}
          onKeyDown={event => {
            if (event.key === 'Escape') hide();
          }}
        >
          <EzCalendar
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
