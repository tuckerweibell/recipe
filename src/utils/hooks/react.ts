import React from 'react';

let currentInstance = null;

export const use = <P>(render: React.SFC<P>): React.ComponentClass<P> => {
  return class extends React.Component<P> {
    state = {};
    effects = [];
    componentDidMount() {
      this.afterRender();
    }
    componentDidUpdate() {
      this.afterRender();
    }
    componentWillUnmount() {
      this.effects.forEach(({destroy}) => {
        if (destroy) destroy();
      });
    }
    afterRender() {
      this.effects.forEach(({create, destroy}) => {
        if (destroy) destroy();
        create();
      });
    }
    render() {
      currentInstance = this;
      Object.assign(currentInstance, {callIndex: 0, effects: []});
      return render(this.props);
    }
  };
};

const nextStateCell = () => {
  const frame = currentInstance;
  const {state, callIndex} = currentInstance;
  currentInstance.callIndex++;
  return {
    frame,
    state,
    key: callIndex,
  };
};

export const useRef = <TValue>(initialValue: TValue): {current: TValue} => {
  const {state, key} = nextStateCell();

  if (!state.hasOwnProperty(key)) {
    state[key] = {current: initialValue};
  }

  return state[key];
};

export const useState = <TValue>(initialValue: TValue): [TValue, (value: TValue) => void] => {
  const {frame, state, key} = nextStateCell();

  return [
    state.hasOwnProperty(key) ? state[key] : initialValue,
    newValue => frame.setState({[key]: newValue}),
  ];
};

const inputsAreEqual = (next, prev) => next && next.every((d, i) => d === prev[i]);

export const useEffect = (create, inputs = [create]) => {
  const {frame, state, key} = nextStateCell();

  const prevEffect = state[key];

  if (prevEffect && inputsAreEqual(inputs, prevEffect.inputs)) return;

  const effect = (state[key] = {
    create,
    inputs,
    destroy: prevEffect ? prevEffect.destroy : null,
  });

  frame.effects.push(effect);
};
