import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import TeacherHome from '../pages/Teacher'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/je-suis-prof',
    element: <TeacherHome />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

