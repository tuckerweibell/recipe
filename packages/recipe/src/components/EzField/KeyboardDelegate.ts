import {Key} from 'react';
import {Collection} from './Collection';

export interface KeyboardDelegate {
  /** Returns the key visually below the given one, or `null` for none. */
  getKeyBelow?(key: Key): Key;

  /** Returns the key visually above the given one, or `null` for none. */
  getKeyAbove?(key: Key): Key;

  /** Returns the first key, or `null` for none. */
  getFirstKey?(key?: Key, global?: boolean): Key;

  /** Returns the last key, or `null` for none. */
  getLastKey?(key?: Key, global?: boolean): Key;

  /** Returns the next key after `fromKey` that matches the given search string, or `null` for none. */
  getKeyForSearch?(search: string, fromKey?: Key): Key;
}
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getKeyAbove", "getFirstKey"] }] */
export class ListKeyboardDelegate implements KeyboardDelegate {
  private collection: Collection;

  private count: number;

  constructor(collection: Collection) {
    this.collection = collection;
    this.count = collection.index.size;
  }

  getKeyAbove(k: Key) {
    return k > 0 ? (k as number) - 1 : null;
  }

  getKeyBelow(k: Key) {
    return k < this.count - 1 ? (k as number) + 1 : null;
  }

  getFirstKey() {
    return this.count ? 0 : null;
  }

  getLastKey() {
    return this.count - 1;
  }

  getKeyForSearch(search) {
    const i = Array.from<any>(this.collection.index.values()).findIndex(item =>
      item.label.toLowerCase().startsWith(search)
    );
    return i < 0 ? null : i;
  }
}
