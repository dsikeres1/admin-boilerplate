import { find, isNil } from "lodash";

export function pairSecond<T, U>([_, value]: [T, U]): U {
  return value;
}

export function pairGetValue<T, U>(pairs: [T, U][], key: T): U | undefined {
  const pair = find(pairs, ([x]) => x == key);
  if (isNil(pair)) {
    return;
  }
  return pairSecond(pair);
}
