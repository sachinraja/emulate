import makeSMFunc from '../helpers/makeSMFunc'
import { Stock } from '../types'
import getBuyCost from './getBuyCost'
import getCalculatedSharePrice from './getCalculatedSharePrice'

export interface StockBuyInfo {
  cost: number
  newShareCount: Stock['shareCount']
  newSharePrice: Stock['sharePrice']
}

const buy = makeSMFunc(
  async (adapter, ticker: string, count: number, price?: number) => {
    const stock = await adapter.getStock(ticker)
    if (!stock) return undefined

    const cost = await getBuyCost(adapter, stock, count, price)

    const newShareCount = stock.shareCount + count
    const newSharePrice = await getCalculatedSharePrice(
      adapter,
      stock,
      count,
      price,
    )

    adapter.changeStock(ticker, {
      shareCount: newShareCount,
      sharePrice: newSharePrice,
    })

    return { cost, newShareCount, newSharePrice } as StockBuyInfo
  },
)

export default buy
