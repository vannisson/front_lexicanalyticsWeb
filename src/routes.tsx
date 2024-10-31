import Login from './pages/Login'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Collections from './pages/Collections'
import { Box } from '@mantine/core'
import CustomHeader from './common/components/CustomHeader'
import Production from './pages/Production'
import Reports from './pages/Reports'
import Results from './pages/Results'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/collections',
    element: (
      <CustomHeader>
        <Collections />
      </CustomHeader>
    ),
  },
  {
    path: '/production/:collectionId',
    element: (
      <CustomHeader>
        <Production />
      </CustomHeader>
    ),
  },
  {
    path: '/reports',
    element: (
      <CustomHeader>
        <Reports />
      </CustomHeader>
    ),
  },
  {
    path: '/results/:collectionId',
    element: (
      <CustomHeader>
        <Results />
      </CustomHeader>
    ),
  },
  {
    path: '*',
    element: (
      <ErrorPage/>
    ),
  }
])

export default router
