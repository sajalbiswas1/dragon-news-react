import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../component/Home/Home";
import NewsDetails from "../component/Page/NewsDetails";
import UserFrom from "../component/Page/UserFrom";
import LoginFrom from "../component/LoginFrom";
import RegisterFrom from "../component/RegisterFrom";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ForgetPassword from "../component/ForgetPassword";


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
                element:<PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/userForm',
                element:<UserFrom></UserFrom>,
                children:[
                    {
                        path:'/userForm',
                        element:<LoginFrom></LoginFrom>
                    },
                    {
                        path:'/userForm/register',
                        element:<RegisterFrom></RegisterFrom>
                    },
                    {
                        path:'/userForm/forget',
                        element:<ForgetPassword></ForgetPassword>
                    }
                ]
            }
        ]
    },

]);
export default router;