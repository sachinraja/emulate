import makeSMFunc from '../helpers/makeSMFunc'
import { Stock } from '../types'

const getMarketCap = makeSMFunc(async (adapter, stock: Stock) => {
  return stock.shareCount * stock.sharePrice
})

export default getMarketCap
