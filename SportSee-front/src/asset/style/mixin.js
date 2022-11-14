import { breakpoints } from './variables'
import { css } from 'styled-components'

const getize = (breakpoint) => {
  let size = null
  for (let value in breakpoints) {
    if (value === breakpoint) size = breakpoints[value]
  }
  console.log(size)
  return size
}
const BreakTo = ({ breakpoint, maxWidth, marginLR, marginTB }) => {
  console.log(maxWidth)
  return css`
    @media only screen and(max-width:${getize(breakpoint)}) {
      max-width: ${maxWidth};
      margin: ${marginLR} ${marginTB};
      @content;
    }
  `
}
export { BreakTo }
