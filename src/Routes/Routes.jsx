import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Pages/Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
]);