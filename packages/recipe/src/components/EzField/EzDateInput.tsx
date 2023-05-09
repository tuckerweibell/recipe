import React, {useMemo, useState, useRef} from 'react';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import theme from '../theme.config';
import EzCalendar from '../EzCalendar/EzCalendar';
import EzIcon from '../EzIcon';
import EzPopover from '../EzPopover';
import EzTextInput from './EzTextInput';
import {useMenuTrigger, useMenuTriggerState} from '../Overlays';
import {useUpdateEffect} from '../../utils/hooks';
import {CalendarIcon, InsetIcon} from '../Icons';
import FocusScope from '../utils/FocusScope';
import {TextInputWrapper} from './Picker.styles';
import {clsx} from '../../utils';

const layout = theme.css({
  position: 'relative',
  width: '200px',
  input: {paddingLeft: '2.5em'},
});

const popper = theme.css({
  zIndex: '$date-input-z', // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert date inputs to mui
});

const calendarPopup = theme.css({
  '@baseToMedium': {
    maxWidth: '250px',
    width: 'auto',
  },

  position: 'relative',
  padding: '$150',
  fontFamily: '$defaultFont',
  fontSize: '$100',
  width: '320px',
  marginTop: '$100',
  borderRadius: 8,
  border: '1px solid $border',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.12)',
});

const arrow = theme.css({
  '&:after, &:before': {
    content: "' '",
    position: 'absolute',
    left: '19px',
    bottom: '100%',
    height: '0',
    width: '0',
  },
  '&:after': {
    marginLeft: '-5px',
    border: '5px solid transparent',
    borderBottomColor: 'white',
  },
  '&:before': {
    marginLeft: '-7px',
    border: '7px solid transparent',
    borderBottomColor: '$border',
  },
});

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
  const iconWrapperStyle = useMemo(
    () => ({
      alignItems: 'center',
      display: 'flex',
      fontSize: '13px',
    }),
    []
  );

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
    'aria-haspopup': 'dialog' as const,
    'aria-labelledby': ariaLabelledBy,
    onChange: e => setValue(e.target.value),
    disabled,
    placeholder,
    error: props.error,
    touched: props.touched,
    onFocus: props.onFocus,
    onFocusCapture: props.onFocusCapture,
  };

  const {minDate, maxDate, filterDate} = props;

  return (
    <>
      <TextInputWrapper
        className={layout({className: props.className})}
        disabled={disabled}
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
          <div style={iconWrapperStyle}>
            <EzIcon icon={isOpen ? faChevronUp : faChevronDown} size="inherit" />
          </div>
        </InsetIcon>
      </TextInputWrapper>
      {isOpen && (
        <EzPopover
          targetRef={triggerRef}
          placement="bottom-start"
          shouldCloseOnBlur
          onClose={close}
          className={popper()}
          classNameSuffix={props.classNameSuffix}
        >
          <FocusScope contain restoreFocus>
            {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
            <div
              {...menuProps}
              className={clsx(calendarPopup(), arrow())}
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
            </div>
          </FocusScope>
        </EzPopover>
      )}
    </>
  );
};

export default EzDateInput;
