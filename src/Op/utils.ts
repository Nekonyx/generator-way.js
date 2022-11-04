/**
 * Utilities
 */
export const utils = {
  /** Creating a new Int32Array with a SharedArrayBuffer of 4 bytes. */
  _int32arr: new Int32Array(new SharedArrayBuffer(4))
}
