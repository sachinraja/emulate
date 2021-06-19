import * as functions from './functions'
import type { Adapter, RemoveOverloading, RestOfParameters } from './types'

export const createStockMarket = <T extends Adapter>(adapter: T) => {
  const smFunctions = {
    async getMarketCapOf(
      ...args: RestOfParameters<typeof functions['getMarketCapOf']>
    ) {
      return functions.getMarketCapOf(adapter, ...args)
    },

    async buy(...args: RestOfParameters<typeof functions['buy']>) {
      return functions.buy(adapter, ...args)
    },

    async getBuyCostFor(
      ...args: RestOfParameters<typeof functions['getBuyCostFor']>
    ) {
      return functions.getBuyCostFor(adapter, ...args)
    },
  }

  // leave out functions that are included in adapter and union with adapter
  return { ...smFunctions, ...adapter } as RemoveOverloading<
    typeof smFunctions,
    typeof adapter
  >
}
