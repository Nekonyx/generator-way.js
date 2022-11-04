import { ICoroutine } from './types.js'

export const Timing = {
  run<T>(coroutine: ICoroutine<T>): T {
    const generator = coroutine()
    let context: ReturnType<typeof generator['next']>

    do {
      context = generator.next()
    } while (!context.done)

    return context.value
  }
}

export * from './types.js'
export { Op } from './Op/Op.js'
