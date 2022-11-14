import styled from 'styled-components'
import { Outlet } from 'react-router'

import { device } from '@/asset/style/device'
import GlobalStyles from '@/asset/style/global'

import Nav from '@/components/Nav'
import SideNav from '../../components/Side-nav/Side-nav'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const Page = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  max-width: 1320px;
  @media ${device.large} {
    max-width: 1000px;
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

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <StyledLayout>
        <SideNav />
        <Page>
          <Outlet />
        </Page>
      </StyledLayout>
    </>
  )
}

export default Layout
