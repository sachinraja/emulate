import makeSMFunc from '../helpers/makeSMFunc'
import { Stock } from '../types'

const getBuyCostFor = makeSMFunc(
  async (adapter, stock: Stock, count: number, price?: number) => {
    stock.shareCount += count

    const sharePrice = price ?? stock.sharePrice
    return count * sharePrice
  },
)

export default getBuyCostFor
