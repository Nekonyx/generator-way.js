export interface ICoroutine<T = unknown, TYield = unknown, TNext = unknown> {
  (): Generator<TYield, T, TNext>
}
