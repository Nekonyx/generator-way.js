import { ICoroutine } from '../types.js'
import { variable } from './variable.js'

/** Defining a set of functions that are used to control the flow of a coroutine. */
export const $if = {
  /**
   * "If the condition is truthy, yield the result of the  ICoroutine function, otherwise yield the
   * result of the  ICoroutine function."
   *
   * The above function is a ICoroutine function, which means it can be used with the yield keyword
   * @param {any} condition - any
   * @param {ICoroutine} $then - The ICoroutine function to run if the
   * condition is truthy.
   * @param {ICoroutine} [$else]
   */
  *truthy(condition: any, $then: ICoroutine, $else?: ICoroutine) {
    condition = variable.unwrap(condition)

    if (condition) {
      yield* $then()
    } else if ($else) {
      yield* $else()
    }
  },
  /**
   * "If the condition is not truthy, yield the result of the  ICoroutine function, otherwise yield
   * the result of the  ICoroutine function."
   *
   * The function is called *notTruthy because it's the opposite of the *truthy function
   * @param {any} condition - any - The condition to check.
   * @param {ICoroutine} $then - The ICoroutine function to execute if the
   * condition is truthy.
   * @param {ICoroutine} [$else]
   */
  *notTruthy(condition: any, $then: ICoroutine, $else?: ICoroutine) {
    condition = variable.unwrap(condition)

    if (!condition) {
      yield* $then()
    } else if ($else) {
      yield* $else()
    }
  },
  /**
   * "If a and b are equal, then execute the  ICoroutine function, otherwise execute the
   * ICoroutine function."
   *
   * The above function is a ICoroutine function, which means it can be used with the yield keyword
   * @param {any} a - any
   * @param {any} b - any, : ICoroutine, ?: ICoroutine
   * @param {ICoroutine} $then - The ICoroutine function to execute if the
   * condition is true
   * @param {ICoroutine} [$else]
   */
  *equal(a: any, b: any, $then: ICoroutine, $else?: ICoroutine) {
    a = variable.unwrap(a)
    b = variable.unwrap(b)

    if (a === b) {
      yield* $then()
    } else if ($else) {
      yield* $else()
    }
  },
  /**
   * "If a is not equal to b, then execute the  function, otherwise execute the  function."
   *
   * The first thing to notice is that the function is marked as a ICoroutine function. This is because
   * the function is going to yield control to the  and  functions
   * @param {any} a - any
   * @param {any} b - any, : ICoroutine, ?: ICoroutine
   * @param {ICoroutine} $then - The ICoroutine function to execute if the
   * condition is true.
   * @param {ICoroutine} [$else]
   */
  *notEqual(a: any, b: any, $then: ICoroutine, $else?: ICoroutine) {
    a = variable.unwrap(a)
    b = variable.unwrap(b)

    if (a !== b) {
      yield* $then()
    } else if ($else) {
      yield* $else()
    }
  }
}
