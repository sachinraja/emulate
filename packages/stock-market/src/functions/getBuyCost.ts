import makeSMFunc from '../helpers/makeSMFunc'
import { Stock } from '../types'

const getBuyCost = makeSMFunc(
  async (adapter, stock: Stock, count: number, price?: number) => {
    const sharePrice = price ?? stock.sharePrice
    return count * sharePrice
  },
)

export default getBuyCost
