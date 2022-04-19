const {relative} = require('path');
const {createRequire} = require('module');
const logger = require('../logging');

const envMeta = {};

if (process.env.JENKINS_URL) {
  envMeta.url = process.env.JENKINS_URL;
  envMeta.id = process.env.BUILD_ID;
}

module.exports = {
  ImportDeclaration(path, state) {
    if (path.node.source.value !== '@ezcater/recipe') return;
    const {file} = state;
    const importNodes = [];

    path.get('specifiers').forEach(p => {
      if (p.isImportNamespaceSpecifier()) {
        // log namespace imports (i.e. import * as Foo from 'Recipe')
        importNodes.push({
          focus: 'namespace',
          value: p.node.local.name,
        });
      } else if (p.isImportDefaultSpecifier()) {
        // log default import - (i.e. import Recipe from 'Recipe')
        importNodes.push({
          focus: 'default',
          value: p.node.local.name,
        });
      } else if (p.isImportSpecifier()) {
        // log named imports (i.e. import EzButton from 'Recipe')
        importNodes.push({
          value: p.node.imported.name,
        });
      }
    });

    const {filename} = file.opts;
    const source = relative(process.cwd(), filename);
    const req = createRequire(filename);
    const apiVersion = req('@ezcater/recipe/package.json').version;
    const log = state.opts.trace ? logger.trace : logger.info;

    importNodes.forEach(identifier => {
      log('imported', {
        api_version: apiVersion,
        app_name: process.env.npm_package_name,
        source,
        ...envMeta,
        ...identifier,
      });
    });
  },
};
