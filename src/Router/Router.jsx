import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Components/Dashboard/Profile";
import CreateTask from "../Components/Dashboard/CreateTask";
import Project from "../Components/Dashboard/Project";
import Pricing from "../Pages/Pricing/Pricing";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
        },
        {
          path: 'blog',
          element:<Blog></Blog>
        },
        {
          path: "pricing",
          element: <Pricing></Pricing>
        }
    ]
  },
  {
    path: 'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        // index:true,
        path: 'profile',
        element:<Profile></Profile>
      },
      {
        path: 'create-task',
        element: <CreateTask></CreateTask>
      },
      {
        path: 'project',
        element:<Project></Project>
      }
    ]
  }
]);

export default router;
