import React, {useContext, Ref, ReactNode} from 'react';
import {Theme} from '@react-types/provider';

export interface ProviderProps {
  /** The content of the Provider. */
  children: ReactNode;
  /**
   * The theme for your application.
   */
  theme?: Theme;
}

export interface ProviderContext {
  theme: Theme;
}

const Context = React.createContext<ProviderContext | null>(null);

export function useProvider(): ProviderContext {
  return useContext(Context);
}

function Provider(props: ProviderProps, ref: Ref<HTMLDivElement>) {
  const {children} = props;
  const prevContext = useProvider();
  const {theme = prevContext?.theme} = props;

  const context = {...prevContext, theme};

  // Only wrap in a DOM node if the theme changed
  const contents =
    theme !== prevContext?.theme ? (
      <ProviderWrapper {...props} ref={ref}>
        {children}
      </ProviderWrapper>
    ) : (
      children
    );

  return <Context.Provider value={context}>{contents}</Context.Provider>;
}

const ProviderWrapper = React.forwardRef(function ProviderWrapper(
  props: ProviderProps,
  ref: Ref<HTMLDivElement>
) {
  const {children} = props;
  const {theme} = useProvider();
  const className = theme.global ? Object.values(theme.global).join(' ') : null;

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
});

export const EzProvider = React.forwardRef(Provider);
