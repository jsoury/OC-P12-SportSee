import React from 'react'
import styled from 'styled-components'
import { colors } from '@/asset/style/variables'
import { device } from '@/asset/style/device'

import logo from '@/asset/images/logo.png'

const NavBar = styled.nav`
  width: 100%;
  background: ${colors.black};
  & img {
    width: 178px;
    height: auto;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  left: 0;
  margin: 0 auto;
  max-width: 1320px;
  padding: 1rem;
  @media ${device.large} {
    max-width: 1140px;
    margin: 0 auto;
  }
  @media ${device.medium} {
    max-width: 960px;
    margin: 0 auto;
  }
  @media ${device.small} {
    max-width: 720px;
    margin: 0 1rem;
  }
`

const StyledLink = styled.a`
  margin: 0 0.7rem;
  display: inline-block;
  position: relative;
  align-items: center;
  color: inherit;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  color: white;
`

const Nav = () => {
  return (
    <NavBar>
      <Container>
        <img src={logo} alt="logo SportSeed" />
        <StyledLink href="/">Accueil</StyledLink>
        <StyledLink href="/">Profil</StyledLink>
        <StyledLink href="/">Réglage</StyledLink>
        <StyledLink href="/">Communauté</StyledLink>
      </Container>
    </NavBar>
  )
}

export default Nav
