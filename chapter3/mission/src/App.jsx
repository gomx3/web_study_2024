import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './pages/main';
import MoviesPage from './pages/movies';
import SearchPage from './pages/search';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import NowPlaying from './pages/movies/now-playing';
import Popular from './pages/movies/popular';
import TopRated from './pages/movies/top-rated';
import UpComing from './pages/movies/up-coming';
import RootLayout from './layout/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <MainPage/>
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
        path: 'movies/up-coming',
        element: <UpComing/>
      },
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