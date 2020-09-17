import React, {useEffect, useRef, createRef, useState} from 'react';
import dayjs from 'dayjs';

import {
  CalendarTable,
  Row,
  MonthNavigation,
  MonthName,
  WeekdayName,
  Day,
} from './EzCalendar.styles';

import en from './en';
import {useTranslation} from '../../utils/hooks';

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
    <div>
      <CalendarTable ref={calendarRef}>
        <Row>
          <MonthNavigation>
            <button
              type="button"
              ref={focusTarget}
              onClick={() => setFocusedDate(focusedDate.subtract(1, 'month').set('date', 1))}
            >
              ← {t('Prev')}
            </button>
          </MonthNavigation>
          <MonthName>{focusedDate.format('MMMM YYYY')}</MonthName>
          <MonthNavigation>
            <button
              type="button"
              onClick={() => setFocusedDate(focusedDate.add(1, 'month').set('date', 1))}
            >
              {t('Next')} →
            </button>
          </MonthNavigation>
        </Row>
        <Row>
          {repeat(weekDayCount).map((_, dayIndex) => (
            <WeekdayName key={dayIndex}>
              {focusedDate.set('day', dayIndex).format('dd')}
            </WeekdayName>
          ))}
        </Row>
        <div>
          {populateMonth(focusedDate).map((week, weekIndex) => (
            <Row key={weekIndex}>
              {week.map((day, dayIndex) => {
                const currentDay = focusedDate.set('date', day);
                const selectDate = () => onChange(currentDay.format(t('DATE_FORMAT')));
                const disabled = !isEnabled(currentDay);
                const ifEnabled = fn => e => {
                  if (!disabled) fn(e);
                };
                return (
                  <Day key={dayIndex} isSelected={currentDay.isSame(selectedDate)}>
                    {day && (
                      <button
                        ref={refs[day - 1]}
                        type="button"
                        onClick={ifEnabled(selectDate)}
                        aria-disabled={disabled}
                        onKeyDown={handleKeyInput(selectDate, disabled)}
                        aria-label={currentDay.format('dddd, MMMM D, YYYY').toString()}
                        tabIndex={day === focusedDate.date() ? 0 : -1}
                      >
                        {day}
                      </button>
                    )}
                  </Day>
                );
              })}
            </Row>
          ))}
        </div>
      </CalendarTable>
    </div>
  );
};

type Handles = {focus: () => void};

export default React.forwardRef(EzCalendar as React.RefForwardingComponent<Handles, any>);
