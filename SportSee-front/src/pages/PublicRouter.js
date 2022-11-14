import { Routes, Route } from 'react-router-dom'

import Home from '@/pages/home'
import Dashboard from '@/pages/Dashboard'
import Layout from './Layout'

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard/:id" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default PublicRouter
