import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import Home from "../../Pages/Home/Home";
import Temporary from "../../Temporary";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCart from "../../Pages/MyCart/MyCart";
import SignIn from "../../Pages/SignIn/SignIn";
import Apple from "../../Pages/Home/Shared/Brand/Apple";
import Samsung from "../../Pages/Home/Shared/Brand/Samsung";
import Xiaomi from "../../Pages/Home/Shared/Brand/Xiaomi";
import Asus from "../../Pages/Home/Shared/Brand/Asus";
import Google from "../../Pages/Home/Shared/Brand/Google";
import Sony from "../../Pages/Home/Shared/Brand/Sony";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: '/temp',
                element: <Temporary></Temporary>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/apple',
                element: <Apple></Apple>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/xiaomi',
                element: <Xiaomi></Xiaomi>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/asus',
                element: <Asus></Asus>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/google',
                element: <Google></Google>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/sony',
                element: <Sony></Sony>,
                loader: () => fetch('http://localhost:5000/')
            }
        ]
    }
]);

export default router;