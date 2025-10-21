import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";


export const router =createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true, Component: Home
            },
        ]
    }
])