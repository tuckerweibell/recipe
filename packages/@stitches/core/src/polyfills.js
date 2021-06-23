if (typeof globalThis === 'undefined') window.globalThis = window;

const isIE11 = typeof window !== `undefined` && !!window.MSInputMethodContext;
const Symbol = isIE11
  ? {
      for(x) {
        return x;
      },
      iterator: '__symbol:iterator0.97589819915729773',
    }
  : globalThis.Symbol;
