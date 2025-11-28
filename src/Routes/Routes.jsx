import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import PageNotFount from "../Components/PageNotFount/PageNotFount";
import Blogs from "../Page/Blogs/Blogs";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
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
        path: '/*',
        Component: PageNotFount
    }
]);