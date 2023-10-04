import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../component/Home/Home";
import NewsDetails from "../component/Page/NewsDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path:'/details/:id',
                element:<NewsDetails></NewsDetails>,
                loader:()=>fetch('/news.json')
            }
        ]
    },

]);
export default router;