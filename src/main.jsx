import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home/Home";
import Main from "./Layouts/Main";
import Colleges from "./Pages/Colleges/Colleges";
import CollegeDetails from "./Pages/CollegeDetails/CollegeDetails";
import ErrorPage from "./Components/ErrorPage";
import Admission from "./Pages/Admission/Admission";
import AdmissionForm from "./Pages/AdmissionForm/AdmissionForm";
import MyColleges from "./Pages/MyColleges/MyColleges";
import AuthProvider from "./Providers/AuthProvider";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

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
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
        loader: ()=> fetch("http://localhost:5000/colleges")
      },
      {
        path: "/admission/:id",
        element: <AdmissionForm></AdmissionForm>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: "/my-college",
        element: <MyColleges></MyColleges>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="max-w-7xl mx-auto px-4">
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </main>
  </React.StrictMode>
);
