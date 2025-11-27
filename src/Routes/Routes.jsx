import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Page/Home/Home";
import PageNotFount from "../Components/Error/PageNotFount";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:'/about',
                Component: About
            },
            {
                path:'/contact',
                Component: Contact
            }
        ]
    },
    {
        path:'/*',
        Component: PageNotFount
    }
]);