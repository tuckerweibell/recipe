/** @jsx jsx */
import {jsx} from '@emotion/core';
import {Fragment} from 'react';
import EzLayout from '../EzLayout';
import EzTextStyle from '../EzTextStyle';

const iconDiameter = '1.5rem';

const CheckedPath = () => (
  <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z" />
);

const UncheckedPath = ({active}) => (
  <Fragment>
    <circle cx="12" cy="12" r="12" />
    <circle cx="12" cy="12" r="9" css={{fill: 'white'}} />
    {active && <circle cx="12" cy="12" r="6" />}
  </Fragment>
);

/**
 * A progress tracker conveys progress through linear steps or actions across multiple screens, in order to complete a task.
 */
const EzProgressTracker: React.FC = ({steps = [], selected, orientation = 'horizontal'}: any) => {
  const isHorizontal = orientation === 'horizontal';
  return (
    <nav>
      <ol
        css={{
          display: 'flex',
          flexDirection: isHorizontal ? 'row' : 'column',
          alignItems: 'flex-start',
          listStyle: 'none',
          justifyContent: 'space-between',
          margin: 0,
          padding: 0,
          ...(isHorizontal ? {} : {minHeight: `${steps.length * 3}rem`}),
        }}
      >
        {steps.map((step, i) => (
          <li
            key={i}
            // The line between steps is defined using two pseudo elements:
            // One connects to previous element, one connects to next element.
            // NOTE: While it seems like this does double work, the line doesn't
            // extend passed the elements boundary. This allows items to have a
            // dynamic width without a danger of over extending the line when the
            // element content exceeds the available space.
            css={{
              position: 'relative',
              flex: '1 1 0px',
              padding: isHorizontal ? '0 8px' : '8px 0',
              display: 'flex',
              justifyContent: 'center',
              // pseudo element line connecting step to previous step
              '+ li:before': {
                content: "''",
                position: 'absolute',
                pointerEvents: 'none',
                ...(isHorizontal
                  ? {
                      top: '12px',
                      left: '0',
                      right: 'calc(50% + 10px)',
                      borderTop: 'solid 3px #00b06e',
                    }
                  : {
                      left: '11px',
                      top: '0',
                      bottom: 'calc(50% + 10px)',
                      borderLeft: 'solid 3px #00b06e',
                    }),
              },
              // pseudo element line connecting step to next step
              ':not(:only-child):not(:last-child):after': {
                content: "''",
                position: 'absolute',
                pointerEvents: 'none',
                ...(isHorizontal
                  ? {
                      top: '12px',
                      left: 'calc(50% + 10px)',
                      right: '0',
                      borderTop: 'solid 3px #00b06e',
                    }
                  : {
                      left: '11px',
                      top: 'calc(50% + 10px)',
                      bottom: '0',
                      borderLeft: 'solid 3px #00b06e',
                    }),
              },
            }}
          >
            <EzLayout
              layout={isHorizontal ? 'stack' : 'basic'}
              alignX={isHorizontal ? 'center' : 'left'}
              alignY={isHorizontal ? 'top' : 'center'}
            >
              <span css={{lineHeight: 0}}>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  css={{
                    height: iconDiameter,
                    width: iconDiameter,
                    fill: '#00b06e',
                  }}
                >
                  {step.complete ? <CheckedPath /> : <UncheckedPath active={selected === step} />}
                </svg>
              </span>
              <EzTextStyle align="center" use={selected === step ? 'strong' : undefined}>
                {step.label}
              </EzTextStyle>
              {selected === step && (
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    aria-hidden="true"
                    width="0.75rem"
                    height="0.75rem"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform={isHorizontal ? 'rotate(90)' : ''}
                  >
                    <polygon points="5 4 15 12 5 20 5 4" />
                  </svg>
                </span>
              )}
            </EzLayout>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default EzProgressTracker;
