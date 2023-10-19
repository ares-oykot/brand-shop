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
import ProductDetailsApple from "../../Pages/Home/Shared/ProductDetails/ProductDetailsApple";
import ProductDetailsSamsung from "../../Pages/Home/Shared/ProductDetails/ProductDetailsSamsung";
import ProductDetailsAsus from "../../Pages/Home/Shared/ProductDetails/ProductDetailsAsus";
import ProductDetailsXiaomi from "../../Pages/Home/Shared/ProductDetails/ProductDetailsXiaomi";
import ProductDetailsSony from "../../Pages/Home/Shared/ProductDetails/ProductDetailsSony";
import ProductDetailsGoogle from "../../Pages/Home/Shared/ProductDetails/ProductDetailsGoogle";

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
                loader: () => fetch('http://localhost:5000/apple')
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('http://localhost:5000/samsung')
            },
            {
                path: '/xiaomi',
                element: <Xiaomi></Xiaomi>,
                loader: () => fetch('http://localhost:5000/xiaomi')
            },
            {
                path: '/asus',
                element: <Asus></Asus>,
                loader: () => fetch('http://localhost:5000/asus')
            },
            {
                path: '/google',
                element: <Google></Google>,
                loader: () => fetch('http://localhost:5000/google')
            },
            {
                path: '/sony',
                element: <Sony></Sony>,
                loader: () => fetch('http://localhost:5000/sony')
            },
            {
                path: '/productDetailsApple/:id',
                element: <ProductDetailsApple></ProductDetailsApple>,
                loader: ({ params }) => fetch(`http://localhost:5000/apple/${params.id}`)
            },
            {
                path: '/productDetailsSamsung/:id',
                element: <ProductDetailsSamsung></ProductDetailsSamsung>,
                loader: ({params}) => fetch(`http://localhost:5000/samsung/${params.id}`)
            },
            {
                path: '/productDetailsAsus/:id',
                element: <ProductDetailsAsus></ProductDetailsAsus>,
                loader: ({params}) => fetch(`http://localhost:5000/asus/${params.id}`)
            },
            {
                path: '/productDetailsXiaomi/:id',
                element: <ProductDetailsXiaomi></ProductDetailsXiaomi>,
                loader: ({params}) => fetch(`http://localhost:5000/xiaomi/${params.id}`)
            },
            {
                path: '/productDetailsSony/:id',
                element: <ProductDetailsSony></ProductDetailsSony>,
                loader: ({params}) => fetch(`http://localhost:5000/sony/${params.id}`)
            },
            {
                path: '/productDetailsGoogle/:id',
                element: <ProductDetailsGoogle></ProductDetailsGoogle>,
                loader: ({params}) => fetch(`http://localhost:5000/google/${params.id}`)
            }
        ]
    }
]);

export default router;