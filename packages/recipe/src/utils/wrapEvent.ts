export const wrapEvent = (handler: React.ReactEventHandler, callback: React.ReactEventHandler) => {
  if (!handler) return callback;
  return (event: React.SyntheticEvent) => {
    handler(event);
    if (!event || !event.defaultPrevented) callback(event);
  };
};

export const wrapEvents = (props, events) =>
  Object.assign({}, ...Object.keys(events).map(e => ({[e]: wrapEvent(props[e], events[e])})));
