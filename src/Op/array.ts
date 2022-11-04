import { $for } from './for.js'
import { $if } from './if.js'
import { Constant, TVar, variable, Variable } from './variable.js'

export const array = {
  /**
   * "Create an array of a given size, and optionally fill it with items."
   *
   * The function is a generator, so it can be used with the `for.of` function
   * @param {TVar<number>} size - number - The size of the array to create.
   * @param {TVar<T[]>} [items] - The items to iterate over.
   * @returns A generator function that returns an array of the specified size.
   */
  *create<T>(
    size: TVar<number>,
    items?: TVar<T[]>
  ): Generator<unknown, Variable<Constant<T>[]>, unknown> {
    const array = yield* variable.create(
      Array<Constant<T>>(variable.unwrap(size))
    )

    yield* $if.truthy(items, function* () {
      yield* $for.of(variable.unwrap<T[]>(items as T[]), (item, i) => {
        array.value[i.value] = item
      })
    })

    return array
  }
}
