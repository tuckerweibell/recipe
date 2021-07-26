const React = require('react');
const puppeteer = require('puppeteer');
const {render, unmountComponentAtNode} = require('react-dom');
const {act} = require('react-dom/test-utils');
const {JSDOM} = require('jsdom');

const capture = async (browser, viewport, html) => {
  const page = await browser.newPage();

  await page.setViewport(viewport);
  await page.setContent(html, {waitUntil: 'networkidle0'});

  return await page.screenshot({
    type: 'png',
    clip: {
      x: 0,
      y: 0,
      ...viewport,
    },
    omitBackground: true,
  });
};

const getHtmlData = Component => {
  const {window} = new JSDOM(`<!DOCTYPE html>`, {
    pretendToBeVisual: true,
    runScripts: 'dangerously',
  });
  const {document} = window;
  global.window = window;
  const container = document.body.appendChild(document.createElement('div'));

  act(() => {
    render(React.createElement(Component), container);
  });

  const body = document.body.outerHTML;

  unmountComponentAtNode(container);

  if (container.parentNode === document.body) {
    document.body.removeChild(container);
  }

  return `
    <!DOCTYPE html>
    <head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i" rel="stylesheet">
    <style>
      html {
        box-sizing: border-box;
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
      }
      body {margin: 0;}
    </style>
    </head>
    <body>
      ${body}
    </body>
  `;
};

module.exports = async (Component, opts = {}) => {
  const {width, height} = opts;

  const browser = await puppeteer.launch(opts.puppeteer);

  const html = getHtmlData(Component);

  const result = await capture(browser, {width, height}, html);

  browser.close();

  return result;
};
