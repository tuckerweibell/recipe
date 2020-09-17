import React, {useState, useEffect, useRef} from 'react';
import dayjs from 'dayjs';
import EzTextInput from './EzTextInput';
import {CalendarWrapper, OverlayFieldWrapper, TextInputWrapper} from './EzDateInput.styles';
import EzPopover from '../EzPopover';
import EzCalendar from '../EzCalendar/EzCalendar';
import {useMenuTriggerState, useMenuTrigger, useOverlayPosition} from './Overlays';
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

  const state = useMenuTriggerState();
  const combobox = {
    className: props.className,
    disabled,
    opened: state.isOpen,
  };

  const {close, isOpen} = state;

  const onChangeRef = React.useRef(onChange);
  const timeout = useRef(null);
  const triggerRef = useRef<HTMLInputElement>();

  useEffect(() => () => clearTimeout(timeout.current), []);

  useUpdateEffect(() => {
    if (dayjs(value).isValid()) setValidDate(value);
  }, [value]);

  useUpdateEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useUpdateEffect(() => {
    onChangeRef.current(validDate);
  }, [validDate]);

  const {menuTriggerProps, menuProps} = useMenuTrigger(state);

  const comboboxInput = {
    ...menuTriggerProps,
    ref: triggerRef,
    id,
    name,
    value,
    'aria-haspopup': 'dialog' as 'dialog',
    'aria-labelledby': ariaLabelledBy,
    onChange: e => setValue(e.target.value),
    disabled,
    placeholder,
    error: props.error,
    touched: props.touched,
  };

  const overlayPosition = useOverlayPosition({
    targetRef: triggerRef,
    placement: 'bottom-start',
  });

  const {minDate, maxDate, filterDate} = props;

  return (
    <OverlayFieldWrapper hasError={props.touched && props.error} opened={isOpen}>
      <TextInputWrapper {...combobox}>
        <InsetIcon insetY0 left0 pl3>
          <CalendarIcon />
        </InsetIcon>
        <EzTextInput {...comboboxInput} />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={isOpen} />
        </InsetIcon>
      </TextInputWrapper>
      {isOpen && (
        <EzPopover shouldCloseOnBlur onClose={close} {...overlayPosition}>
          <CalendarWrapper
            {...menuProps}
            onKeyDown={event => {
              if (event.key === 'Escape') close();
            }}
          >
            <EzCalendar
              {...{minDate, maxDate, filterDate}}
              value={validDate}
              onChange={date => {
                setValue(date);
                comboboxInput.ref.current.focus();
                timeout.current = setTimeout(close, CLOSE_CALENDAR_ON_SELECT_DELAY_MS);
              }}
            />
          </CalendarWrapper>
        </EzPopover>
      )}
    </OverlayFieldWrapper>
  );
};

export default EzDateInput;
