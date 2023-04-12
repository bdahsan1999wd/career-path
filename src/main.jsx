import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Layout/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import StartApplying from './components/StartApplying/StartApplying';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:([
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/AppliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/StartApplying",
        element: <StartApplying></StartApplying>
      }
    ])
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
