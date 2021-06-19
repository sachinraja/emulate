import { createObjectAdapter } from '../src/adapters/object'
import { createStockMarket } from '../src'
import makeStocksObject from '../src/helpers/makeStocksObject'
import type { StockMarketWithAdapter } from '../src/types'

let stockMarket: StockMarketWithAdapter<ReturnType<typeof createObjectAdapter>>

const stocks = makeStocksObject({
  AMZN: { shareCount: 50, sharePrice: 10000 },
  GOOGL: { sharePrice: 10, shareCount: 900 },
})

beforeEach(() => {
  const objectAdapter = createObjectAdapter(stocks)

  stockMarket = createStockMarket(objectAdapter)
})

describe('getStock', () => {
  it('works with object adapter', async () => {
    const AMZN = await stockMarket.getStock('AMZN')
    const GOOGL = await stockMarket.getStock('GOOGL')
    expect(AMZN).toBe(stocks.AMZN)
    expect(GOOGL).toBe(stocks.GOOGL)
  })
})
