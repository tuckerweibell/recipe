import React from 'react';
import puppeteer from 'puppeteer';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import {JSDOM} from 'jsdom';

const capture = async (
  browser: puppeteer.Browser,
  viewport: Pick<puppeteer.BoundingBox, 'width' | 'height'>,
  html: string
): Promise<Buffer | string> => {
  const page = await browser.newPage();

  await page.setViewport(viewport);
  await page.setContent(html, {waitUntil: 'networkidle0'});

  return page.screenshot({
    type: 'png',
    clip: {
      x: 0,
      y: 0,
      ...viewport,
    },
    omitBackground: true,
  });
};

const getHtmlData = (Component: React.ClassType<unknown, any, any>): string => {
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
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <style>
      html {
        box-sizing: border-box;
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
      }
      body {margin: 0;}
    </style>
    </head>
    ${body}
  `;
};

const repng = async (
  Component: React.ClassType<unknown, any, any>,
  opts: {width?: number; height?: number; puppeteer?: puppeteer.LaunchOptions} = {}
): Promise<Buffer | string> => {
  const {width = 1024, height = 512} = opts;
  const browser = await puppeteer.launch(opts.puppeteer);
  const html = getHtmlData(Component);
  const result = await capture(browser, {width, height}, html);

  await browser.close();

  return result;
};

export default repng;
