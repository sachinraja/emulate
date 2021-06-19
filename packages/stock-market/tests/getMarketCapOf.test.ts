import { createObjectAdapter } from '../src/adapters/object'
import { createStockMarket } from '../src'
import { Stock, StockMarketWithAdapter } from '../src/types'

let stockMarket: StockMarketWithAdapter<ReturnType<typeof createObjectAdapter>>

beforeEach(() => {
  const objectAdapter = createObjectAdapter({
    AMZN: { shareCount: 50, sharePrice: 10000 },
    GOOGL: { sharePrice: 10, shareCount: 900 },
  })

  stockMarket = createStockMarket(objectAdapter)
})

describe('getMarketCapOf', () => {
  it('works with object adapter', async () => {
    const AMZN = (await stockMarket.getStock('AMZN')) as Stock
    const GOOGL = (await stockMarket.getStock('GOOGL')) as Stock

    expect(await stockMarket.getMarketCapOf(AMZN)).toBe(500000)
    expect(await stockMarket.getMarketCapOf(GOOGL)).toBe(9000)
  })
})
