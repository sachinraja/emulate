import type { StocksObject } from '../adapters/object'

function makeStocksObject<T extends StocksObject>(stocksObj: T): T {
  return stocksObj
}

export default makeStocksObject
