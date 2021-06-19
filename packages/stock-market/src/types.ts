import type { createStockMarket } from '.'

export type AnyFunction = (...args: any[]) => any

export type Rest<T extends any[]> = ((...p: T) => void) extends (
  p1: infer P1,
  ...rest: infer R
) => void
  ? R
  : never

export type RestOfParameters<T extends AnyFunction> = Rest<Parameters<T>>

export type RemoveOverloading<T, K> = Omit<T, keyof K> & K

export type StockMarketWithAdapter<T extends Adapter> = RemoveOverloading<
  ReturnType<typeof createStockMarket>,
  T
>

export interface Stock {
  shareCount: number
  sharePrice: number
}

export type SMFunc = (adapter: Adapter, ...args: any[]) => any

export interface Adapter {
  getStock(ticker: string): Promise<Stock | undefined>
  changeStock(ticker: string, info: Stock): Promise<Stock | undefined>
}
