import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../UserLog/LOgin";
import SignUp from "../UserLog/SignUp";
import Classes from "../Pages/Classes/Classes";

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
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    },
]);