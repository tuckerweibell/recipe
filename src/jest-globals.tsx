import {render, cleanup} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

export const renderToHtml = ui => {
  const {container} = render(ui);
  return container.outerHTML;
};

export const fullRender = render;

afterEach(cleanup);
