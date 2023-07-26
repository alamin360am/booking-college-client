import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home/Home";
import Main from "./Layouts/Main";
import Colleges from "./Pages/Colleges/Colleges";
import CollegeDetails from "./Pages/CollegeDetails/CollegeDetails";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/colleges/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="max-w-7xl mx-auto px-4">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
