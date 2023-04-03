import React, {Fragment} from 'react';
import theme from '../theme.config';
import EzLayout from '../EzLayout';
import EzTextStyle from '../EzTextStyle';
import LinkButton from '../utils/LinkButton';
import {LabelledOptionalLink} from '../EzLink/EzLink.types';
import {isLink} from '../EzLink';
import {clsx} from '../../utils';

type Orientation = 'horizontal' | 'vertical';

type Step = LabelledOptionalLink & {
  complete?: boolean;
};

type ProgressTrackerProps = {
  steps: Step[];
  selected?: Step;
  orientation?: Orientation;
};

const layout = theme.css({
  variants: {
    orientation: {
      horizontal: {},
      vertical: {paddingTop: 8, paddingBottom: 8},
    },
  },
});

const list = theme.css({
  display: 'flex',
  alignItems: 'flex-start',
  listStyle: 'none',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
  variants: {
    orientation: {
      horizontal: {flexDirection: 'row'},
      vertical: {flexDirection: 'column'},
    },
  },
});
const listItem = theme.css({
  position: 'relative',
  flex: '0 1 auto',
  display: 'flex',
  justifyContent: 'center',
});

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
    <nav className={layout({orientation})}>
      <ol
        className={list({orientation})}
        style={isHorizontal ? {} : {minHeight: `${steps.length * 3.5}rem`}}
      >
        {steps.map((step, i) => (
          <Fragment key={i}>
            {i !== 0 && <Spacer orientation={orientation} visited={i <= progress} />}
            <li className={listItem()}>
              <Track
                active={i === progress}
                visited={i <= progress}
                isFirst={i === 0}
                isLast={i === steps.length - 1}
                orientation={orientation}
              />
              <EzLayout
                layout={isHorizontal ? 'stack' : 'basic'}
                alignX={isHorizontal ? 'center' : undefined}
                alignY={isHorizontal ? undefined : 'center'}
              >
                <StepIcon complete={step.complete} />
                <StepLabel
                  label={step.label}
                  visited={i <= progress}
                  orientation={orientation}
                  link={step.onClick || isLink(step) ? step : undefined}
                />
              </EzLayout>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};

const icon = theme.css({
  lineHeight: 0,
  svg: {height: 24, width: 24, position: 'relative', pointerEvents: 'none', fill: 'white'},
});

const StepIcon = ({complete}) => (
  <span className={icon()}>
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      {complete ? (
        <path
          d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
          transform="scale(0.5)"
          style={{transformOrigin: 'center'}}
        />
      ) : (
        <circle cx="12" cy="12" r="4" />
      )}
    </svg>
  </span>
);

const track = theme.css({
  backgroundColor: '$progress-tracker-bg',
  variants: {
    visited: {true: {backgroundColor: '$progress-tracker-fg'}},
    orientation: {
      horizontal: {height: 24},
      vertical: {width: 24},
    },
    isStart: {true: {}, false: {}},
    isEnd: {true: {}, false: {}},
  },
  compoundVariants: [
    {isStart: 'true', orientation: 'horizontal', css: {roundedLeft: '$progress-tracker-rounded'}},
    {isStart: 'true', orientation: 'vertical', css: {roundedTop: '$progress-tracker-rounded'}},
    {isEnd: 'true', orientation: 'horizontal', css: {roundedRight: '$progress-tracker-rounded'}},
    {isEnd: 'true', orientation: 'vertical', css: {roundedBottom: '$progress-tracker-rounded'}},
  ],
});

const trackPosition = theme.css({
  position: 'absolute',
  inset: 0,
  variants: {
    orientation: {
      horizontal: {},
      vertical: {top: -8, bottom: -8},
    },
  },
});

const Track = ({active, visited, isFirst, isLast, orientation}) => {
  return (
    <>
      {/* the background (dark green) of the track */}
      <span
        className={clsx(
          track({orientation, isStart: isFirst, isEnd: isLast}),
          trackPosition({orientation})
        )}
      />
      {/* the current progress (light green) overlaid on top of the track */}
      {visited && (
        <span
          className={clsx(
            track({orientation, visited, isStart: isFirst, isEnd: active}),
            trackPosition({orientation})
          )}
        />
      )}
    </>
  );
};

const linkStyles = theme.css({
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  fontSize: '1rem',
  fontFamily: '$defaultFont',
  padding: 0,
  variants: {visited: {true: {color: '$blue600'}}},
});

const labelStyles = theme.css({
  variants: {
    visited: {
      true: {},
      false: {color: '$deemphasisText'},
    },
    orientation: {
      horizontal: {},
      vertical: {'&&': {paddingLeft: '$150'}},
    },
  },
});

const StepLabel = ({label, visited, orientation, link}) => (
  <>
    {link ? (
      <LinkButton
        label={label}
        {...link}
        className={clsx(linkStyles({visited}), labelStyles({visited, orientation}))}
      />
    ) : (
      <EzTextStyle align="center" use="strong" className={labelStyles({visited, orientation})}>
        {label}
      </EzTextStyle>
    )}
  </>
);

const spacer = theme.css({flex: '1 0 12px'});

const Spacer = ({orientation, visited}) => (
  <li aria-hidden className={clsx(track({orientation, visited}), spacer())} />
);

export default EzProgressTracker;
