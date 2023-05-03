import React, {useEffect, useRef, createRef, useState} from 'react';
import dayjs from 'dayjs';
import theme from '../theme.config';
import EzButton from '../EzButton';
import EzHeading from '../EzHeading';
import {useTranslation} from '../../utils/hooks';
import en from './en';
import EzTextStyle from '../EzTextStyle';

const container = theme.css({
  width: '$full',
  textAlign: 'center',

  button: {
    fontSize: 'inherit',
  },

  '&& > * + *': {
    marginTop: '$75',
  },
});

const dayOfWeek = theme.css({
  fontWeight: '$calendar-day-of-week',
  textDecoration: 'none',
});

const row = theme.css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const pagination = theme.css({
  padding: '$100',
});

const cell = theme.css({
  padding: '$100',

  // normalize the sizes of the cells
  flex: 1,

  variants: {
    selected: {
      true: {
        borderRadius: '$regular',
        border: 'solid 1px $calendar-day-border-selected',
        backgroundColor: '$calendar-day-bg-selected',
      },
    },
  },
});

const dayValue = theme.css({
  backgroundColor: 'transparent',
  border: 0,
  color: '$calendar-day-text',
  cursor: 'pointer',
  fontFamily: '$defaultFont',
  fontWeight: 700,
  padding: 0,
  '&:hover': {
    color: '$calendar-day-text-dark',
  },
  '&:disabled': {
    opacity: '50%',
  },
});

const weekDayCount = 7;
const maxDaysInMonth = 31;

const repeat = (n: number) => new Array(n).fill(null);

const populateMonth = (date: any) => {
  const daysInMonth = date.endOf('month').date();
  const monthDayStartOffset = date.set('date', 1).day() + 1;
  const weeksInMonth = Math.ceil((monthDayStartOffset + daysInMonth) / weekDayCount);

  let tempMonthDayStartOffset = monthDayStartOffset;
  let daysLeftInMonth = date.endOf('month').date();

  return repeat(weeksInMonth).map(() =>
    repeat(weekDayCount).map(() => {
      if (--tempMonthDayStartOffset > 0) return null;

      const day = daysInMonth - --daysLeftInMonth;

      if (day <= daysInMonth) return day;

      return null;
    })
  );
};

const EzCalendar = ({value, onChange, minDate, maxDate, filterDate}, ref) => {
  const {t} = useTranslation(en);
  const calendarRef = useRef(null);
  const refs = useRef(repeat(maxDaysInMonth).map(() => createRef<HTMLButtonElement>())).current;

  const selectedDate = dayjs(value).isValid() ? dayjs(value) : dayjs();

  const [focusedDate, setFocusedDate] = useState(selectedDate);
  const focusTarget = useRef<HTMLButtonElement>();

  React.useImperativeHandle(ref, () => ({
    focus() {
      focusTarget.current.focus();
    },
  }));

  useEffect(() => {
    const {activeElement, body} = calendarRef.current.ownerDocument;
    const bodyFocused = activeElement && activeElement === body;
    const {current} = refs[focusedDate.date() - 1];
    const dateFocused = refs.some(el => el.current === activeElement);
    const canFocus = current && (bodyFocused || dateFocused);

    if (canFocus) current.focus();
  }, [refs, focusedDate, value]);

  useEffect(() => {
    if (dayjs(value).isValid()) setFocusedDate(dayjs(value));
  }, [value]);

  const handleKeyInput = (selectFocusedDate, disabled) => e => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedDate(focusedDate.subtract(1, 'day'));
        break;
      case 'ArrowRight':
        e.preventDefault();
        setFocusedDate(focusedDate.add(1, 'day'));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedDate(focusedDate.subtract(1, 'week'));
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedDate(focusedDate.add(1, 'week'));
        break;
      case 'Space':
      case 'Enter':
        e.preventDefault();
        if (!disabled) selectFocusedDate();
        break;
      default:
        break;
    }
  };

  const isEnabled = (day: dayjs.Dayjs) => {
    const isSameOrAfterMinDate =
      minDate !== undefined ? day.isSame(minDate) || day.isAfter(minDate) : true;
    const isSameOrBeforeMaxDate =
      maxDate !== undefined ? day.isSame(maxDate) || day.isBefore(maxDate) : true;
    const isFilterMatch =
      filterDate !== undefined ? filterDate(day.format(t('DATE_FORMAT'))) : true;

    return isSameOrAfterMinDate && isSameOrBeforeMaxDate && isFilterMatch;
  };

  return (
    <section className={container()} ref={calendarRef}>
      <div className={row()}>
        <div className={pagination()}>
          <EzButton
            color="primary"
            onClick={() => setFocusedDate(focusedDate.subtract(1, 'month').set('date', 1))}
            ref={focusTarget}
            size="small"
            variant="text"
          >
            ← {t('Prev')}
          </EzButton>
        </div>
        <EzHeading size="5" as="h2">
          {focusedDate.format('MMMM YYYY')}
        </EzHeading>
        <div className={pagination()}>
          <EzButton
            color="primary"
            onClick={() => setFocusedDate(focusedDate.add(1, 'month').set('date', 1))}
            size="small"
            variant="text"
          >
            {t('Next')} →
          </EzButton>
        </div>
      </div>
      <div className={row()}>
        {repeat(weekDayCount).map((_, dayIndex) => {
          const day = focusedDate.set('day', dayIndex);
          return (
            <div className={cell()} key={dayIndex}>
              <abbr className={dayOfWeek()} title={day.format('dddd')}>
                {day.format('dd')}
              </abbr>
            </div>
          );
        })}
      </div>
      <div>
        {populateMonth(focusedDate).map((week, weekIndex) => (
          <div key={weekIndex} className={row()}>
            {week.map((day, dayIndex) => {
              const currentDay = focusedDate.set('date', day);
              const selectDate = () => onChange(currentDay.format(t('DATE_FORMAT')));
              const disabled = !isEnabled(currentDay);
              const selected = currentDay.isSame(selectedDate);
              return (
                <div className={cell({selected})} key={dayIndex}>
                  {day && (
                    <button
                      ref={refs[day - 1]}
                      aria-label={currentDay.format('dddd, MMMM D, YYYY').toString()}
                      className={dayValue()}
                      disabled={disabled}
                      onClick={selectDate}
                      onKeyDown={handleKeyInput(selectDate, disabled)}
                      tabIndex={day === focusedDate.date() ? 0 : -1}
                      type="button"
                    >
                      <EzTextStyle use={disabled ? 'subdued' : undefined}>{day}</EzTextStyle>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

type Handles = {focus: () => void};

export default React.forwardRef(EzCalendar as React.RefForwardingComponent<Handles, any>);
