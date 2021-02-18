import loadable from '@loadable/component';

const isIE11 =
  typeof window === `undefined` || (!!window.MSInputMethodContext && !!document.documentMode);

const Playground = ({code, scope, language}) => {
  const Playground = loadable(() => import(`./Docz`));
  const Preview = loadable(() => import(`./Preview`));

  const Component = isIE11 ? Preview : Playground;
  return <Component code={code} scope={scope} language={language} />;
};

export default Playground;
