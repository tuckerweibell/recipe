import React, {useState, useRef} from 'react';
import dayjs from 'dayjs';
import EzTextInput from './EzTextInput';
import {CalendarWrapper, OverlayFieldWrapper, TextInputWrapper} from './EzDateInput.styles';
import EzPopover from '../EzPopover';
import EzCalendar from '../EzCalendar/EzCalendar';
import {useMenuTrigger, useMenuTriggerState} from '../Overlays';
import {useUpdateEffect} from '../../utils/hooks';
import {ChevronIcon, CalendarIcon, InsetIcon} from '../Icons';
import FocusScope from '../FocusScope';

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

  const menuState = useMenuTriggerState();
  const combobox = {
    className: props.className,
    disabled,
    opened: menuState.isOpen,
  };

  const {close, isOpen} = menuState;
  const calendarRef = useRef<React.ElementRef<typeof EzCalendar>>();
  const onChangeRef = React.useRef(onChange);
  const triggerRef = useRef<HTMLInputElement>();

  useUpdateEffect(() => {
    if (dayjs(value).isValid()) setValidDate(value);
  }, [value]);

  useUpdateEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useUpdateEffect(() => {
    onChangeRef.current(validDate);
  }, [validDate]);

  const {menuTriggerProps, menuProps} = useMenuTrigger(menuState);

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

  const {minDate, maxDate, filterDate} = props;

  return (
    <OverlayFieldWrapper hasError={props.touched && props.error} opened={isOpen}>
      <TextInputWrapper
        {...combobox}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key !== 'Tab' || !isOpen) return;
          e.preventDefault();
          calendarRef.current.focus();
        }}
      >
        <InsetIcon insetY0 left0 pl3>
          <CalendarIcon />
        </InsetIcon>
        <EzTextInput {...comboboxInput} type="text" />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={isOpen} />
        </InsetIcon>
      </TextInputWrapper>
      {isOpen && (
        <EzPopover
          targetRef={triggerRef}
          placement="bottom-start"
          shouldCloseOnBlur
          onClose={close}
        >
          <FocusScope contain restoreFocus>
            <CalendarWrapper
              {...menuProps}
              role="dialog"
              aria-labelledby={id}
              onKeyDown={e => {
                if (e.key !== 'Escape') return;
                e.stopPropagation();
                close();
              }}
            >
              <EzCalendar
                {...{minDate, maxDate, filterDate}}
                ref={calendarRef}
                value={validDate}
                onChange={date => {
                  setValue(date);
                  close();
                }}
              />
            </CalendarWrapper>
          </FocusScope>
        </EzPopover>
      )}
    </OverlayFieldWrapper>
  );
};

export default EzDateInput;
