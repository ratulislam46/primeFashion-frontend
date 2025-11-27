import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Page/Home/Home";
import PageNotFount from "../Components/Error/PageNotFount";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: Home
            },
        ]
    },
    {
        path:'/*',
        Component: PageNotFount
    }
]);