export function hasValue<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}
