import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomePage from "./pages/home";
import MoviesPage from "./pages/movies";
import SearchPage from "./pages/search";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import NowPlaying from "./pages/categories/now-playing";
import Popular from "./pages/categories/popular";
import TopRated from "./pages/categories/top-rated";
import UpComing from "./pages/categories/upcoming";
import MovieDetailPage from "./pages/movie-detail";
import RootLayout from "./layout/root-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "movies/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "movies/popular",
        element: <Popular />,
      },
      {
        path: "movies/top-rated",
        element: <TopRated />,
      },
      {
        path: "movies/upcoming",
        element: <UpComing />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetailPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
