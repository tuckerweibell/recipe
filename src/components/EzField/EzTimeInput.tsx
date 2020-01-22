import React from 'react';
import dayjs from 'dayjs';
import en from './en';
import {useTranslation} from '../../utils/hooks';
import {TimeInput} from './EzTimeInput.styles';

const repeat = n => new Array(n).fill(null);

const formatTime = (time: string) =>
  time.toLocaleLowerCase().replace(/([0-9]{2})([a-z]{2})$/u, '$1 $2');

const useTimeRangeOptions = ({start, end, step}) => {
  const {t} = useTranslation(en);

  const date = dayjs().format(t('DATE_FORMAT'));
  const startTime = dayjs(`${date} ${formatTime(start)}`);
  const endTime = dayjs(`${date} ${formatTime(end)}`);
  const interval = Math.floor(endTime.diff(startTime, 'minute') / step) + 1;

  return repeat(interval).map((_, i) => startTime.add(step * i, 'minute').format(t('TIME_FORMAT')));
};

export default ({start, end, step = 60, value, ...rest}) => {
  const {t} = useTranslation(en);

  const date = dayjs().format(t('DATE_FORMAT'));
  const valueTime = dayjs(`${date} ${value}`);
  const valueTimeString = valueTime.format(t('TIME_FORMAT'));

  const options = useTimeRangeOptions({start, end, step});
  return (
    <TimeInput
      id={rest.id}
      label={rest.label}
      placeholder={rest.placeholder}
      options={options.map(option => ({
        label: option,
        value: option,
      }))}
      value={valueTimeString}
      onChange={rest.onChange}
      aria-labelledby={rest['aria-labelledby']}
    />
  );
};
