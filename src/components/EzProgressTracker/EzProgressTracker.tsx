/** @jsx jsx */
import {jsx, Interpolation} from '@emotion/core';
import {Fragment} from 'react';
import EzLayout from '../EzLayout';
import EzTextStyle from '../EzTextStyle';
import LinkButton from '../EzPageHeader/LinkButton';
import {LabelledOptionalLink} from '../EzLink/EzLink.types';
import {isLink} from '../EzLink';

const verticalOffset = -8;

const roundedTop = {borderTopLeftRadius: 12, borderTopRightRadius: 12};
const roundedBottom = {borderBottomLeftRadius: 12, borderBottomRightRadius: 12};
const roundedLeft = {borderTopLeftRadius: 12, borderBottomLeftRadius: 12};
const roundedRight = {borderTopRightRadius: 12, borderBottomRightRadius: 12};

const railOutline = ({isHorizontal, visited, isStart, isEnd}: any) => {
  const {bg, fg} = {bg: '#006548', fg: '#00b06e'};
  const {top, bottom} = {top: '0 4px 0 0', bottom: '0 -4px 0 0'};
  const {left, right} = {left: '4px 0 0 0', right: '-4px 0 0 0'};
  const backgroundColor = visited ? fg : bg;
  const outline = (pos, color) => `inset ${pos} ${color}`;
  const outlineFull = outline('0 0 0 4px', bg);
  const outlineHorizontal = [outline(top, bg), outline(bottom, bg)].join();
  const outlineVertical = [outline(left, bg), outline(right, bg)].join();
  const rail = isHorizontal ? outlineHorizontal : outlineVertical;
  const maskedSide = outline(
    isHorizontal ? (isStart ? right : left) : isStart ? bottom : top,
    backgroundColor
  );
  const outlineSingleSided = [rail, maskedSide, outlineFull].join();

  return cx(
    {boxShadow: isStart && isEnd ? outlineFull : isStart || isEnd ? outlineSingleSided : rail},
    {backgroundColor},
    isStart && (isHorizontal ? roundedLeft : roundedTop),
    isEnd && (isHorizontal ? roundedRight : roundedBottom)
  );
};

const cx = (...args: Interpolation[]) => args.reduce((res, v) => Object.assign(res, v || {}), {});

type Orientation = 'horizontal' | 'vertical';

type Step = LabelledOptionalLink & {
  complete?: boolean;
};

type ProgressTrackerProps = {
  steps: Step[];
  selected?: Step;
  orientation?: Orientation;
};

/**
 * A progress tracker conveys progress through linear steps or actions across multiple screens, in order to complete a task.
 */
const EzProgressTracker: React.FC<ProgressTrackerProps> = ({
  steps,
  selected,
  orientation = 'horizontal',
}) => {
  const isHorizontal = orientation === 'horizontal';
  const progress = steps.findIndex(step => step === selected);
  return (
    <nav css={cx(!isHorizontal && {paddingTop: 8, paddingBottom: 8})}>
      <ol
        css={{
          display: 'flex',
          flexDirection: isHorizontal ? 'row' : 'column',
          alignItems: 'flex-start',
          listStyle: 'none',
          justifyContent: 'space-between',
          margin: 0,
          padding: 0,
          ...(isHorizontal ? {} : {minHeight: `${steps.length * 3.5}rem`}),
        }}
      >
        {steps.map((step, i) => (
          <Fragment key={i}>
            {i !== 0 && <Spacer isHorizontal={isHorizontal} visited={i <= progress} />}
            <Step
              label={step.label}
              active={i === progress}
              visited={i <= progress}
              complete={step.complete}
              isHorizontal={isHorizontal}
              isFirst={i === 0}
              isLast={i === steps.length - 1}
              link={step.onClick || isLink(step) ? step : undefined}
            />
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};

const Step = ({label, active, visited, complete, isHorizontal, isFirst, isLast, link}) => (
  <li css={{position: 'relative', flex: '0 1 auto', display: 'flex', justifyContent: 'center'}}>
    <StepConnector
      active={active}
      visited={visited}
      isFirst={isFirst}
      isLast={isLast}
      isHorizontal={isHorizontal}
    />
    <EzLayout
      layout={isHorizontal ? 'stack' : 'basic'}
      alignX={isHorizontal ? 'center' : 'left'}
      alignY={isHorizontal ? 'top' : 'center'}
    >
      <StepIcon complete={complete} />
      <StepLabel label={label} visited={visited} isHorizontal={isHorizontal} link={link} />
    </EzLayout>
  </li>
);

const StepIcon = ({complete}) => (
  <span css={{lineHeight: 0}}>
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      css={{height: 24, width: 24, position: 'relative', pointerEvents: 'none'}}
    >
      {complete ? (
        <path
          fill="white"
          d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
          css={{transformOrigin: 'center', transform: 'scale(0.5)'}}
        />
      ) : (
        <circle cx="12" cy="12" r="4" css={{fill: 'white'}} />
      )}
    </svg>
  </span>
);

const StepConnector = ({active, visited, isFirst, isLast, isHorizontal}) => {
  const track = cx(
    {content: "''", position: 'absolute'},
    {top: 0, left: 0, bottom: 0, right: 0},
    {[isHorizontal ? 'height' : 'width']: 24},
    !isHorizontal && {top: verticalOffset, bottom: verticalOffset}
  );

  return (
    <span
      css={{
        pointerEvents: 'none',
        // pseudo element "track" behind each step
        '&:before': cx(track, railOutline({isHorizontal, isStart: isFirst, isEnd: isLast})),
        // pseudo element line showing progress through steps
        '&:after':
          visited &&
          cx(track, railOutline({isHorizontal, visited, isStart: isFirst, isEnd: active})),
      }}
    />
  );
};

const StepLabel = ({label, visited, isHorizontal, link}) => {
  const color = !visited && 'var(--recipe-alias-deemphasis-text-color)';
  const paddingLeft = !isHorizontal && 'var(--recipe-global-static-size-150)';
  return link ? (
    <span css={{paddingLeft}}>
      <LinkButton label={label} {...link} css={{color}} />
    </span>
  ) : (
    <EzTextStyle align="center" use="strong" css={{color, paddingLeft}}>
      {label}
    </EzTextStyle>
  );
};

const Spacer = ({isHorizontal, visited}) => (
  <li
    aria-hidden
    css={cx(
      {flex: '1 0 12px'},
      {[isHorizontal ? 'height' : 'width']: 24},
      railOutline({isHorizontal, visited})
    )}
  />
);

export default EzProgressTracker;
