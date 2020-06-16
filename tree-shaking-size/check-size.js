const paths = require('react-scripts/config/paths');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const chalk = require('chalk');
const filesize = require('filesize');

function checkDifference(currentSize, previousSize) {
  // threshold value is value in bytes considered to be an acceptable diff in size between
  // full path based imports, and named imports from an index (set to 1KB here)
  const THRESHOLD = 1024 * 1;
  const difference = currentSize - previousSize;
  const fileSize = !Number.isNaN(difference) ? filesize(difference) : 0;

  if (difference >= THRESHOLD) {
    console.log(
      `Importing named component from @ezcater/recipe increased the bundle size by ${chalk.red(
        '+' + fileSize
      )}. Tree-shaking may not be configured correctly.`
    );
    process.exit(1);
  } else if (difference < THRESHOLD && difference > 0) {
    console.log(
      `Importing named component from @ezcater/recipe increased the bundle size by ${chalk.yellow(
        '+' + fileSize
      )}.`
    );
  } else if (difference < 0) {
    console.log(`Importing named imports reduced the bundle size by ${chalk.green(fileSize)}!`);
  }
}

FileSizeReporter.measureFileSizesBeforeBuild(paths.appBuild).then(fileSizes => {
  const [, importByIndex] = Object.entries(fileSizes.sizes).find(([filename]) =>
    filename.includes('ImportWithIndex')
  );

  const [, importByPath] = Object.entries(fileSizes.sizes).find(([filename]) =>
    filename.includes('ImportWithFullPath')
  );

  checkDifference(importByIndex, importByPath);
});
