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

const EzCalendar = ({value, onChange}) => {
  const {t} = useTranslation(en);
  const calendarRef = useRef(null);
  const refs = useRef(repeat(maxDaysInMonth).map(() => createRef<HTMLButtonElement>())).current;

  const selectedDate = dayjs(value).isValid() ? dayjs(value) : dayjs();

  const [focusedDate, setFocusedDate] = useState(selectedDate);

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

  const handleKeyInput = selectFocusedDate => e => {
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
        selectFocusedDate();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <CalendarTable ref={calendarRef}>
        <Row>
          <MonthNavigation>
            <button
              type="button"
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
                return (
                  <Day key={dayIndex} isSelected={currentDay.isSame(selectedDate)}>
                    {day && (
                      <button
                        ref={refs[day - 1]}
                        type="button"
                        onClick={selectDate}
                        onKeyDown={handleKeyInput(selectDate)}
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

export default EzCalendar;
