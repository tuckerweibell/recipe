import React, {useState, useRef} from 'react';
import dayjs from 'dayjs';
import {useDialogState} from 'reakit/Dialog';
import EzTextInput from './EzTextInput';
import {CalendarWrapper, OverlayFieldWrapper, TextInputWrapper} from './EzDateInput.styles';
import EzPopover from '../EzPopover';
import EzCalendar from '../EzCalendar/EzCalendar';
import {useMenuTrigger, useOverlayPosition} from './Overlays';
import {useUpdateEffect} from '../../utils/hooks';
import {ChevronIcon, CalendarIcon, InsetIcon} from '../Icons';
import {Dialog} from '../EzModal/Dialog';

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
  const dialogState = useDialogState();

  const combobox = {
    className: props.className,
    disabled,
    opened: dialogState.visible,
  };

  const {hide: close, visible: isOpen, show: open, toggle} = dialogState;
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

  const {menuTriggerProps, menuProps} = useMenuTrigger({isOpen, open, close, toggle});

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
        <EzPopover {...overlayPosition}>
          <Dialog preventBodyScroll={false} {...dialogState} {...menuProps}>
            <CalendarWrapper
              onKeyDown={e => {
                if (e.key !== 'Escape') return;
                e.stopPropagation();
                comboboxInput.ref.current.focus();
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
                  comboboxInput.ref.current.focus();
                }}
              />
            </CalendarWrapper>
          </Dialog>
        </EzPopover>
      )}
    </OverlayFieldWrapper>
  );
};

export default EzDateInput;
