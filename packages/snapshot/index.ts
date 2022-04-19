import path from 'path';
import fs from 'fs';
import glob from 'glob';
import snapshot from './snapshot';

const inputPathOrGlob = process.argv[2];
const outputPath = process.argv[3] || '../../docs/static/images/preview/';
const styles = [];

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
