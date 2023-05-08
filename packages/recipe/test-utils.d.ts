import {ReactElement} from 'react';
import {RenderOptions} from '@testing-library/react';

declare const axe: import('jest-axe').JestAxe;

declare const customRender: (
  ui: ReactElement,
  options?: RenderOptions
) => import('@testing-library/react').RenderResult<
  typeof import('@testing-library/dom/types/queries'),
  HTMLElement,
  HTMLElement
>;

export * from '@testing-library/react';
export {default as userEvent} from '@testing-library/user-event';
export {customRender as render};
export {axe};
