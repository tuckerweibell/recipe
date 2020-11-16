const paths = require('react-scripts/config/paths');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const chalk = require('chalk');
const filesize = require('filesize');

function checkDifference(currentSize, baseline) {
  // threshold value is value in bytes considered to be an acceptable diff in size between
  // full path based imports, and named imports from an index (set to 1KB here)
  const THRESHOLD = 1024 * 1;
  const difference = currentSize - baseline;
  const fileSize = !Number.isNaN(difference) ? filesize(difference) : 0;

  if (difference >= THRESHOLD) {
    console.log(
      `Importing named component from @ezcater/recipe is larger than the ${filesize(baseline)} baseline by ${chalk.red(
        '+' + fileSize
      )}. Tree-shaking may not be configured correctly.`
    );
    process.exit(1);
  } else if (difference < 0) {
    console.log(`Bundle size for a EzButton ${chalk.green(filesize(currentSize))}.`);
  }
}

FileSizeReporter.measureFileSizesBeforeBuild(paths.appBuild).then(fileSizes => {
  const size = Object.entries(fileSizes.sizes)
    .filter(([filename]) =>
      filename.includes('ImportWithIndex')
    )
    .map(([, importByIndex]) => importByIndex)
    .reduce((a, b) => a + b);

  const baseline = 10240; // 10KB baseline - any bigger and either we have too much going on in button, or we're loading too much

  checkDifference(size, baseline);
});
