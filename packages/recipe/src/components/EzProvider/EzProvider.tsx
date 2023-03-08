import React, {createContext, forwardRef, ReactNode} from 'react';

export interface ProviderProps {
  /** The content of the Provider. */
  children: ReactNode;
  /**
   * The theme for your application.
   */
  theme?: {toString: () => string};
}

export const EzProviderContext = createContext<string | null>(null);

const EzProvider = forwardRef<HTMLDivElement, ProviderProps>(function EzProvider(
  {theme, children},
  ref
) {
  return (
    <EzProviderContext.Provider value={theme?.toString()}>
      <div className={theme?.toString()} ref={ref}>
        {children}
      </div>
    </EzProviderContext.Provider>
  );
});

export default EzProvider;
