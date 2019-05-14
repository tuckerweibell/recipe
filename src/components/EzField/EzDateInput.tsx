import React, {useState, useEffect, useRef} from 'react';
import dayjs from 'dayjs';

import {useOnClickOutside} from '../../utils/hooks';
import {wrapEvents} from '../../utils';
import {StyledInput, CalendarWrapper} from './EzDateInput.styles';

import EzCalendar from '../EzCalendar/EzCalendar';

const CLOSE_CALENDAR_ON_SELECT_DELAY_MS = 100;

export default props => {
  const {name, disabled, placeholder = 'Select date', onBlur, onChange} = props;

  const inputRef = useRef();
  const calendarWrapperRef = useRef();

  const [previousValidDate, setPreviousValidDate] = useState(props.value);
  const [value, setValue] = useState(props.value);
  const [showCalendar, setShowCalendar] = useState(false);

  const didMountRef = useRef(false);
  const restoreFocus = useRef(false);
  const timeout = useRef(null);

  const show = () => setShowCalendar(true);
  const hide = () => {
    restoreFocus.current = true;
    (inputRef.current as any).focus();
    setShowCalendar(false);
  };
  const toggle = () => setShowCalendar(s => !s);

  useEffect(() => {
    if (didMountRef.current) {
      if (value) onChange(value);
      if (dayjs(value).isValid()) setPreviousValidDate(value);
    } else didMountRef.current = true;
  }, [value, onChange]);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    if (!showCalendar) onBlur();
  }, [showCalendar, onBlur]);

  useOnClickOutside(hide, [inputRef, calendarWrapperRef]);

  return (
    <>
      <StyledInput
        innerRef={inputRef}
        id={props.id}
        name={name}
        value={value || ''}
        onChange={e => setValue(e.target.value)}
        {...wrapEvents(props, {
          onFocus: () => {
            if (!restoreFocus.current) show();
            restoreFocus.current = false;
          },
          onClick: show,
          onKeyDown: event => {
            if (event.key === 'Escape') hide();
            if (event.key === 'Enter') toggle();
          },
        })}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={props.autoFocus}
      />
      {showCalendar && (
        <CalendarWrapper
          innerRef={calendarWrapperRef}
          onKeyDown={event => {
            if (event.key === 'Escape') hide();
          }}
        >
          <EzCalendar
            value={previousValidDate}
            onChange={date => {
              setValue(date);
              timeout.current = setTimeout(hide, CLOSE_CALENDAR_ON_SELECT_DELAY_MS);
            }}
          />
        </CalendarWrapper>
      )}
    </>
  );
};
