import React, {useMemo} from 'react';
import dayjs from 'dayjs';
import Style from '@ezcater/snitches';
import theme from './EzField.theme.config';
import en from './en';
import {useTranslation} from '../../utils/hooks';
import EzSelect from './EzSelect';
import {ClockIcon, InsetIcon} from '../Icons';

const repeat = n => new Array(n).fill(null);

const formatTime = (time: string) =>
  time.toLocaleLowerCase().replace(/([0-9]{2})([a-z]{2})$/u, '$1 $2');

const useTimeRangeOptions = ({start, end, step, displayAsNoon}) => {
  const {t} = useTranslation(en);

  const date = dayjs().format(t('DATE_FORMAT'));
  const startTime = dayjs(`${date} ${formatTime(start)}`);
  const endTime = dayjs(`${date} ${formatTime(end)}`);
  const interval = Math.floor(endTime.diff(startTime, 'minute') / step) + 1;

  const options = repeat(interval).map((_, i) => {
    const formattedValue = startTime.add(step * i, 'minute').format(t('TIME_FORMAT'));
    return formattedValue === '12:00 PM' && displayAsNoon ? 'Noon' : formattedValue;
  });

  return options;
};

const layout = theme.css({
  position: 'relative',
  width: '150px',
  input: {paddingLeft: '2.5em'},
});

const EzTimeInput = ({
  start,
  end,
  step = 60,
  value,
  displayAsNoon = false,
  focusLabel = '',
  ...rest
}) => {
  const {t} = useTranslation(en);

  const date = dayjs().format(t('DATE_FORMAT'));
  const valueTime = dayjs(`${date} ${value}`);
  const valueTimeString = valueTime.format(t('TIME_FORMAT'));

  const {error, touched} = rest;

  const options = useTimeRangeOptions({start, end, step, displayAsNoon});

  const selectOptions = useMemo(
    () =>
      options.map(option =>
        option === 'Noon' && displayAsNoon
          ? {label: option, value: '12:00 PM'}
          : {label: option, value: option}
      ),
    [options, displayAsNoon]
  );

  return (
    <Style ruleset={theme}>
      <div className={layout()}>
        <InsetIcon insetY0 left0 pl3>
          <ClockIcon />
        </InsetIcon>
        <EzSelect
          id={rest.id}
          label={rest.label}
          {...{error, touched}}
          placeholder={rest.placeholder}
          options={selectOptions}
          value={valueTimeString}
          onChange={rest.onChange}
          aria-labelledby={rest['aria-labelledby']}
          disabled={rest.disabled}
          focusLabel={focusLabel}
        />
      </div>
    </Style>
  );
};

export default EzTimeInput;
