#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const glob = require('glob');

const inputPathOrGlob = process.argv[2];
const outputPath = process.argv[3] || '../../doc-site/static/images/preview/';
const styles = [];

// allow node.js to import Recipe (which uses CSS imports)
require('ignore-styles').default(['.css'], (module, filename) => {
  console.log('loading styles: ', filename);

  const css = fs.readFileSync(filename, 'utf8');

  styles.push(css);
});

const snapshot = require('./snapshot');

glob(inputPathOrGlob, (err, files) => {
  if (err) {
    console.log("Cannot find files at provided path :'(");
    return;
  }

  Promise.all(
    files.map(filename => {
      console.log('Processing file', filename);

      const content = fs.readFileSync(filename, 'utf8');

      const previewFilename = path.basename(
        filename.replace(/.preview/, ''),
        path.extname(filename)
      );

      const outFile = `${previewFilename}.png`;

      const outputFilename = path.join(__dirname, outputPath, outFile);

      return snapshot({content, outputFilename, globalStyles: styles});
    })
  );
});
