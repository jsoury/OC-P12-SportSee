import { breakpoints } from './variables'

export const device = {
  xsmall: `only screen and (max-width: ${breakpoints.xsmall})`,
  small: `only screen and (max-width: ${breakpoints.small})`,
  medium: `only screen and (max-width: ${breakpoints.medium})`,
  large: `only screen and (max-width: ${breakpoints.large})`,
}
