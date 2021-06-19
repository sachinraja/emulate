import makeSMFunc from '../helpers/makeSMFunc'
import { Stock } from '../types'

const getCalculatedSharePrice = makeSMFunc(
  async (adapter, stock: Stock, count: number, price?: number) => {
    const sharePrice = price ?? stock.sharePrice
    return sharePrice + sharePrice * (count / stock.shareCount)
  },
)

export default getCalculatedSharePrice
