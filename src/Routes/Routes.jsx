import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Page/Home/Home";
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
                path: '/blogs',
                Component: Blogs
            }
        ]
    },
    {
        path: '/*',
        Component: PageNotFount
    }
]);