import type { SMFunc } from '../types'

function makeSMFunc<T extends SMFunc>(func: T): T {
  return func
}

export default makeSMFunc
