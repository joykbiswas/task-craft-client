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
import PrivateRoute from "./PrivateRoute";
import KanbanBoard from "../Components/Dashboard/DragDrop/Kanbanboard";
import UpdateTasks from "../Components/Dashboard/UpdateTasks/UpdateTasks";

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
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
      },
      {
        path: 'project/updateTasks/:id',
        element:<UpdateTasks></UpdateTasks>,
        loader:({params})=>fetch(`https://task-craft-server-six.vercel.app/tasks${params.id}`)
      },
      {
        path: 'kanbanboard',
        element:<KanbanBoard></KanbanBoard>
      }

    ]
  }
]);

export default router;
