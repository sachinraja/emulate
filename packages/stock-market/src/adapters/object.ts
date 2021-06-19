import makeAdapter from '../helpers/makeAdapter'
import type { Stock } from '../types'

export type StocksObject = Record<string, Stock>

export const createObjectAdapter = (defaultObj: StocksObject = {}) => {
  const data: Partial<StocksObject> = defaultObj

  return makeAdapter({
    async getStock(ticker) {
      return data[ticker]
    },
    async changeStock(ticker, info) {
      data[ticker] = info
      return info
    },
  })
}
