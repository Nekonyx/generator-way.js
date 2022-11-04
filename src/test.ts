import { ICoroutine, Op, Timing } from './index.js'

const BENCHMARK_ITERATIONS = 5
const SIZE = 1_000_000

const coroutine: ICoroutine = function* () {
  const array = yield* Op.array.create(
    yield* Op.variable.createConstant(SIZE),
    ['a', 'b', 'c']
  )

  yield* Op.for.of(array, () => {
    return
  })
}

const nonCoroutine = () => {
  const array = Array(SIZE)

  let i = 0
  for (const item of ['a', 'b', 'c']) {
    array[i] = item
    i++
  }
}

const benchmark = (name: string, method: () => any) => {
  const measures: number[] = []

  for (let i = 0; i < BENCHMARK_ITERATIONS; i++) {
    const start = performance.now()
    method()
    const end = performance.now()
    measures.push(end - start)
  }

  const average = measures.reduce((a, b) => a + b) / measures.length
  const total = measures.reduce((a, b) => a + b)
  console.log(`${name}: ${average}ms average (${total}ms total)`)
}

benchmark('non-coroutine way', () => nonCoroutine())
benchmark('coroutine way', () => Timing.run(coroutine))
