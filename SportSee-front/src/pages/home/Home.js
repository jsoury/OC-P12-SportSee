import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <NavLink to="dashboard/18">user id 18</NavLink>
      <br />
      <NavLink to="dashboard/12">user id 12</NavLink>
    </>
  )
}

export default Home
