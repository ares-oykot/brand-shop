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
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import UpdateAppleProduct from "../../Pages/Home/Shared/UpdateProducts/UpdateAppleProduct";
import UpdateSamsungProduct from "../../Pages/Home/Shared/UpdateProducts/UpdateSamsungProduct";
import UpdateAsusProduct from "../../Pages/Home/Shared/UpdateProducts/UpdateAsusProduct";
import UpdateXiaomiProduct from "../../Pages/Home/Shared/UpdateProducts/UpdateXiaomiProduct";
import UpdateSonyProduct from "../../Pages/Home/Shared/UpdateProducts/UpdateSonyProduct";
import UpdateGoogleProduct from "../../Pages/Home/Shared/UpdateProducts/UpdateGoogleProduct";
import Error from "../../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/brands')
            },
            {
                path: '/temp',
                element: <Temporary></Temporary>
            },
            {
                path: '/addProduct',
                element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
            },
            {
                path: '/myCart',
                element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
                loader: () => fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/cart')
            },
            {
                path: '/apple',
                element: <Apple></Apple>,
                loader: () => fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/apple')
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/samsung')
            },
            {
                path: '/xiaomi',
                element: <Xiaomi></Xiaomi>,
                loader: () => fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/xiaomi')
            },
            {
                path: '/asus',
                element: <Asus></Asus>,
                loader: () => fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/asus')
            },
            {
                path: '/google',
                element: <Google></Google>,
                loader: () => fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/google')
            },
            {
                path: '/sony',
                element: <Sony></Sony>,
                loader: () => fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/sony')
            },
            {
                path: '/productDetailsApple/:id',
                element: <PrivetRoute><ProductDetailsApple></ProductDetailsApple></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/apple/${params.id}`)
            },
            {
                path: '/productDetailsSamsung/:id',
                element: <PrivetRoute><ProductDetailsSamsung></ProductDetailsSamsung></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/samsung/${params.id}`)
            },
            {
                path: '/productDetailsAsus/:id',
                element: <PrivetRoute><ProductDetailsAsus></ProductDetailsAsus></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/asus/${params.id}`)
            },
            {
                path: '/productDetailsXiaomi/:id',
                element: <PrivetRoute><ProductDetailsXiaomi></ProductDetailsXiaomi></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/xiaomi/${params.id}`)
            },
            {
                path: '/productDetailsSony/:id',
                element: <PrivetRoute><ProductDetailsSony></ProductDetailsSony></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/sony/${params.id}`)
            },
            {
                path: '/productDetailsGoogle/:id',
                element: <PrivetRoute><ProductDetailsGoogle></ProductDetailsGoogle></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/google/${params.id}`)
            },
            //////////////
            {
                path: '/updateApple/:id',
                element: <PrivetRoute><UpdateAppleProduct></UpdateAppleProduct></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/apple/${params.id}`)
            },
            {
                path: '/updateSamsung/:id',
                element: <PrivetRoute><UpdateSamsungProduct></UpdateSamsungProduct></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/samsung/${params.id}`)
            },
            {
                path: '/updateAsus/:id',
                element: <PrivetRoute><UpdateAsusProduct></UpdateAsusProduct></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/asus/${params.id}`)
            },
            {
                path: '/updateXiaomi/:id',
                element: <PrivetRoute><UpdateXiaomiProduct></UpdateXiaomiProduct></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/xiaomi/${params.id}`)
            },
            {
                path: '/updateSony/:id',
                element: <PrivetRoute><UpdateSonyProduct></UpdateSonyProduct></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/sony/${params.id}`)
            },
            {
                path: '/updateGoogle/:id',
                element: <PrivetRoute><UpdateGoogleProduct></UpdateGoogleProduct></PrivetRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/google/${params.id}`)
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;