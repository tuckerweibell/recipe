const path = require('path');

// heavily simplified version of https://github.com/martpie/next-transpile-modules
const transpileModules = (modules = []) => (nextConfig = {}) => {
  if (modules.length === 0) return nextConfig;

  const match = modulePath =>
    modules.some(modulePattern => new RegExp(modulePattern).test(modulePath));

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      // Since Next.js 8.1.0, config.externals is undefined
      if (config.externals) {
        config.externals = config.externals.map(external => {
          if (typeof external !== 'function') return external;
          return (ctx, req, cb) => {
            return match(req.startsWith('.') ? path.resolve(ctx, req) : req)
              ? cb()
              : external(ctx, req, cb);
          };
        });
      }

      // transpile modules in the provided set, using the default loader from Next.js
      config.module.rules.push({
        test: /\.+(js)$/,
        loader: options.defaultLoaders.babel,
        include: match,
      });

      // Overload the Webpack config if it was already overloaded
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};

function findRules(config, predicate) {
  const existing = config.module.rules.find(arrayRule => arrayRule.oneOf);

  return existing ? existing.oneOf.filter(predicate) : config.module.rules.filter(predicate);
}

const exampleCssFileName = '/tmp/test.css';

const withRecipe = (nextConfig = {}) => {
  // list of recipe modules that contain css imports
  const recipeModules = ['@ezcater/recipe', '@recipe-ui/.*'];

  // make sure transpile Recipe modules to ensure any css imports are excluded from the final build
  nextConfig = transpileModules(recipeModules)(nextConfig);

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        );
      }

      // find the rule handling global imports on the client...
      findRules(config, rule => {
        // must be on the client
        if (options.isServer) return false;

        // A global CSS import always has side effects.
        if (!rule.sideEffects) return false;

        // Rule must match css import file naming convention (i.e. end in css)
        if (rule.test instanceof RegExp && !rule.test.test(exampleCssFileName)) return false;

        // rule currently excludes global css from inside node_modules
        if (
          !rule.issuer ||
          !rule.issuer.not ||
          !rule.issuer.not.some(condition => condition.test('node_modules'))
        )
          return false;

        return true;
      }).forEach(rule => {
        // ...and remove the condition preventing global css imports from within node_modules
        rule.issuer.not = rule.issuer.not.filter(condition => !'node_modules'.match(condition));
      });

      // find the rule that throws an error if Global CSS used inside of `node_modules`
      findRules(config, rule => {
        // Rule must match css import file naming convention (i.e. end in css)
        if (rule.test instanceof RegExp && !rule.test.test(exampleCssFileName)) return false;

        // rule currently applies to calls from inside node_modules
        if (
          !rule.issuer ||
          !rule.issuer.and ||
          !rule.issuer.and.some(condition => 'node_modules'.match(condition))
        )
          return false;

        return true;
      }).forEach(rule => {
        // ...and cause the rule to ignore any recipe modules
        rule.issuer.not = rule.issuer.not || [];
        recipeModules.forEach(recipeModule => {
          rule.issuer.not.push(new RegExp(recipeModule));
        });
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};

module.exports = nextConfig => withRecipe(nextConfig);
