/**
 * Union of properties from T
 */
type Properties<T> = {[K in keyof T]: Pick<T, K>}[keyof T];

/**
 * Require at least one of the properties of T
 */
export type RequireAtLeastOne<T> = Required<Properties<T>>;
