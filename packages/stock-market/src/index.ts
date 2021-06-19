import * as functions from './functions'
import type { Adapter, RemoveOverloading, RestOfParameters } from './types'

export const createStockMarket = <T extends Adapter>(adapter: T) => {
  const smFunctions = {
    async getMarketCap(
      ...args: RestOfParameters<typeof functions['getMarketCap']>
    ) {
      return functions.getMarketCap(adapter, ...args)
    },

    async buy(...args: RestOfParameters<typeof functions['buy']>) {
      return functions.buy(adapter, ...args)
    },

    async getBuyCost(
      ...args: RestOfParameters<typeof functions['getBuyCost']>
    ) {
      return functions.getBuyCost(adapter, ...args)
    },

    async getCalculatedSharePrice(
      ...args: RestOfParameters<typeof functions['getCalculatedSharePrice']>
    ) {
      return functions.getCalculatedSharePrice(adapter, ...args)
    },
  }

  // leave out functions that are included in adapter and union with adapter
  return { ...smFunctions, ...adapter } as RemoveOverloading<
    typeof smFunctions,
    typeof adapter
  >
}
