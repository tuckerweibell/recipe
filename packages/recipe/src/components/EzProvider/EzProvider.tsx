import React, {forwardRef, ReactNode} from 'react';

export interface ProviderProps {
  /** The content of the Provider. */
  children: ReactNode;
  /**
   * The theme for your application.
   */
  theme?: {toString: () => string};
}

const EzProvider = forwardRef<HTMLDivElement, ProviderProps>(function EzProvider(
  {theme, children},
  ref
) {
  return (
    <div className={theme?.toString()} ref={ref}>
      {children}
    </div>
  );
});

export default EzProvider;
