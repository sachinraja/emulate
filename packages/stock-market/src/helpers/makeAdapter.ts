import { Adapter } from '../types'

function makeAdapter<T extends Adapter>(adapter: T): T {
  return adapter
}

export default makeAdapter
