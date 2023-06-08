import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../UserLog/LOgin";
import SignUp from "../UserLog/SignUp";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Pages/Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import MySelected from "../Pages/Dashboard/MySelected/MySelected";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/classes",
                element: <Classes></Classes>
            },
            {
                path:"/instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'myselected',
            element: <MySelected></MySelected>
          },
          {
            path: 'payment/:id',
            element: <Payment></Payment>
          }
  
        ]
      }
]);