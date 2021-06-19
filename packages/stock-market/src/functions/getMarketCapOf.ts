import makeSMFunc from '../helpers/makeSMFunc'
import { Stock } from '../types'

const getMarketCapOf = makeSMFunc(async (adapter, stock: Stock) => {
  return stock.shareCount * stock.sharePrice
})

export default getMarketCapOf
