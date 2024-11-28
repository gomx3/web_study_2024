import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/root-layout";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "todo/:todoId",
        element: <TodoDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;