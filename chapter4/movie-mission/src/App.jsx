import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/home';
import MoviesPage from './pages/movies';
import SearchPage from './pages/search';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import NowPlaying from './pages/categories/now-playing';
import Popular from './pages/categories/popular';
import TopRated from './pages/categories/top-rated';
import UpComing from './pages/categories/upcoming';
import RootLayout from './layout/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'search',
        element: <SearchPage/>
      },
      {
        path: 'movies',
        element: <MoviesPage/>
      },
      {
        path: 'login',
        element: <LoginPage/>
      },
      {
        path: 'signup',
        element: <SignupPage/>
      },
      {
        path: 'movies/now-playing',
        element: <NowPlaying/>
      },
      {
        path: 'movies/popular',
        element: <Popular/>
      },
      {
        path: 'movies/top-rated',
        element: <TopRated/>
      },
      {
        path: 'movies/upcoming',
        element: <UpComing/>
      },
      // {
      //   path: 'movies/:movieId',
      //   element: <Movies/>
      // }
    ]
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
