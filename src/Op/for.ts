import { Constant, TVar, variable } from './variable.js'

export const $for = {
  /**
   * It takes a number and a callback function, and then calls the callback function that many times
   * @param {number} times - number - The number of times to run the callback.
   * @param cb - (i: number) => void
   */
  *n(times: TVar<number>, cb: (i: Constant<number>) => void) {
    for (let i = 0; i < variable.unwrap(times); i++) {
      yield cb(yield* variable.createConstant(i))
    }
  },
  /**
   * It takes an iterable and a callback function, and returns a new iterable that yields the results
   * of the callback function
   * @param iterable - The iterable to iterate over.
   * @param cb - (item: string, i: number) => void
   */
  *in<T>(
    iterable: TVar<Iterable<T>>,
    cb: (item: Constant<string>, i: Constant<number>) => void
  ) {
    const unwrappedIterable = variable.unwrap<Iterable<T>>(iterable)
    let i = 0

    for (const item in unwrappedIterable) {
      yield cb(
        yield* variable.createConstant(item),
        yield* variable.createConstant(i)
      )
      i++
    }
  },
  /**
   * It takes an iterable and a callback, and returns a new iterable that yields the results of calling
   * the callback on each item in the original iterable
   * @param iterable - The iterable to iterate over.
   * @param cb - (item: T, i: number) => void
   */
  *of<T>(
    iterable: TVar<Iterable<T>>,
    cb: (item: Constant<T>, i: Constant<number>) => void
  ) {
    const unwrappedIterable = variable.unwrap<Iterable<T>>(iterable)
    let i = 0

    for (const item of unwrappedIterable) {
      yield cb(
        yield* variable.createConstant(item),
        yield* variable.createConstant(i)
      )
      i++
    }
  }
}
