import React, {useContext, Ref, ReactNode} from 'react';
import {Theme} from '@react-types/provider';
import Style from '@ezcater/snitches';
import topLevelTheme from '../theme.config';

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

function Provider({children, theme}: ProviderProps, ref: Ref<HTMLDivElement>) {
  const prevContext = useProvider();
  const context = {...prevContext, theme: theme || prevContext?.theme};

  // Only wrap in a DOM node if the theme changed
  const contents =
    theme !== prevContext?.theme ? (
      <ProviderWrapper ref={ref}>{children}</ProviderWrapper>
    ) : (
      children
    );

  return (
    <Style ruleset={topLevelTheme}>
      <Context.Provider value={context}>{contents}</Context.Provider>
    </Style>
  );
}

const ProviderWrapper = React.forwardRef<HTMLDivElement, {children: React.ReactNode}>(
  function ProviderWrapper({children}, ref) {
    const {theme} = useProvider();
    const className = theme.global ? Object.values(theme.global).join(' ') : null;

    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }
);

export const EzProvider = React.forwardRef(Provider);
