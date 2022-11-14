import styled from 'styled-components'

import meditation from '../../asset/images/meditation-icon.svg'
import swimming from '../../asset/images/swimming-icon.svg'
import bike from '../../asset/images/bike-icon.svg'
import dumbbells from '../../asset/images/dumbbells-icon.svg'
import { colors } from '../../asset/style/variables'

const StyledSideNav = styled.div`
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 100vh;
`
const Icon = styled.img`
  width: 64px;
  height: auto;
  padding: 10px 0;
`

const Copyright = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  color: ${colors.white};
  margin-top: 50px;
  font-size: 12px;
`

const SideNav = () => {
  return (
    <StyledSideNav>
      <Icon src={meditation} alt="meditation icon"></Icon>
      <Icon src={swimming} alt="swimming icon"></Icon>
      <Icon src={bike} alt="bike icon"></Icon>
      <Icon src={dumbbells} alt="dumbbells icon"></Icon>
      <Copyright>Copyright, SportSee 2020</Copyright>
    </StyledSideNav>
  )
}

export default SideNav
