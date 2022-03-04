const {relative} = require('path');
const {createRequire} = require('module');
const logger = require('../logging');

const envMeta = {};

if (process.env.JENKINS_URL) {
  envMeta.url = process.env.JENKINS_URL;
  envMeta.id = process.env.BUILD_ID;
}

const track = (context, node) => {
  const filename = context.getFilename();
  const source = relative(process.cwd(), filename);
  const req = createRequire(filename);
  const api_version = req('@ezcater/recipe/package.json').version;
  const [logLevel] = context.options;
  const log = logLevel === 'trace' ? logger.trace : logger.info;

  log('imported', {
    api_version,
    app_name: process.env.npm_package_name,
    source,
    ...envMeta,
    ...node,
  });
};

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'tracks usage of Recipe via static analysis of Recipe imports',
      url:
        'https://github.com/ezcater/recipe/tree/master/packages/eslint-plugin-recipe/rules/track-imports',
    },
  },
  create: context => {
    return {
      ImportNamespaceSpecifier(node) {
        if (node.parent.source.value !== '@ezcater/recipe') return;
        track(context, {
          focus: 'namespace',
          value: node.local.name,
        });
      },
      ImportDefaultSpecifier(node) {
        if (node.parent.source.value !== '@ezcater/recipe') return;
        track(context, {
          focus: 'default',
          value: node.local.name,
        });
      },
      ImportSpecifier(node) {
        if (node.parent.source.value !== '@ezcater/recipe') return;
        track(context, {
          value: node.imported.name,
        });
      },
    };
  },
};
