import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomepPage from './pages/home';
import NotFound from './pages/not-found';
import MoviesPage from './pages/movies';
import RootLayout from './layout/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <HomepPage/>
      },
      {
        path: 'movies/:movieId',
        element: <MoviesPage/>
      }
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App