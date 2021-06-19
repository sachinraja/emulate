import { createObjectAdapter } from '../src/adapters/object'
import { createStockMarket } from '../src'
import type { Stock, StockMarketWithAdapter } from '../src/types'
import type { StockBuyInfo } from '../src/functions/buy'

let stockMarket: StockMarketWithAdapter<ReturnType<typeof createObjectAdapter>>

beforeEach(() => {
  const objectAdapter = createObjectAdapter({
    AMZN: { shareCount: 50, sharePrice: 10000 },
  })

  stockMarket = createStockMarket(objectAdapter)
})

describe('buy', () => {
  it('works with object adapter', async () => {
    const AMZN = (await stockMarket.getStock('AMZN')) as Stock

    const stockBuyCount = 5

    const AMZNInitialShareCount = AMZN.shareCount

    const AMZNCalculatedCost = await stockMarket.getBuyCost(AMZN, stockBuyCount)
    const AMZNCalculatedSharePrice = await stockMarket.getCalculatedSharePrice(
      AMZN,
      stockBuyCount,
    )

    const {
      cost: AMZNActualCost,
      newShareCount: AMZNNewShareCount,
      newSharePrice: AMZNNewSharePrice,
    } = (await stockMarket.buy('AMZN', stockBuyCount)) as StockBuyInfo

    expect(AMZNActualCost).toBe(AMZNCalculatedCost)
    expect(AMZNInitialShareCount + stockBuyCount).toBe(AMZNNewShareCount)
    expect(AMZNCalculatedSharePrice).toBe(AMZNNewSharePrice)
  })
})
