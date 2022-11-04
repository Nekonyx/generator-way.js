import { array } from './array.js'
import { console } from './console.js'
import { $for } from './for.js'
import { $if } from './if.js'
import { utils } from './utils.js'
import { variable } from './variable.js'

export const Op = {
  array,
  console,
  utils,
  variable,
  if: $if,
  for: $for
}
