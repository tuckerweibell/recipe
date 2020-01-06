const https = require('https');
const {escape} = require('querystring');

const env = process.env.NODE_ENV !== 'production' ? 'staging-' : '';
const hostname = `tracking.${env}ezcater.com`;
const namespace = 'recipe';

// builds querystring supporting nested objects
// i.e. {foo: {bar: 'baz'}} converts to foo[bar]=baz
function encode(queryObj, nesting = '') {
  const pairs = Object.entries(queryObj).map(([key, val]) => {
    if (typeof val === 'object') return encode(val, `${nesting}${key}[`);
    return [nesting + key + (nesting ? ']' : ''), val].map(escape).join('=');
  });
  return pairs.join('&');
}

function post(data) {
  const qs = encode(data);

  const req = https.request({
    hostname,
    port: 443,
    path: `/graphql?${qs}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': 0,
    },
  });

  req.on('error', e => console.error(e));
  req.end();
}

const trackEventQuery = ({event, properties: {app_name: appName, ...properties}}) => {
  const rawEvent = JSON.stringify({
    category: namespace,
    project: namespace,
    event,
    ...properties,
  });
  return {
    query: `mutation trackEvent($rawEvent: String!) { trackEvent( tracking_id: "recipe-analytics", appName: "${appName}", rawEvent: $rawEvent ) { success } }`,
    variables: {rawEvent},
  };
};

module.exports = {
  trace(...args) {
    console.log(...args);
  },
  info(...args) {
    const [event, ...rest] = args;
    const properties = Object.assign(...rest);
    post(trackEventQuery({event, properties}));
  },
};
