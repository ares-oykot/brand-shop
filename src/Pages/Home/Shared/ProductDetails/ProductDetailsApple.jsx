import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const ProductDetailsApple = () => {
    const appleProduct = useLoaderData();
    console.log(appleProduct);
    const handleAddToCart = () => {
        const name = appleProduct.name;
        const description = appleProduct.description;
        const price = appleProduct.price;
        const type = appleProduct.productType;
        const brand = appleProduct.brand;   
        const rating = appleProduct.rating;
        const photoURL = appleProduct.URL;
        const cart = { name, description, price, type, brand, rating, photoURL };

        fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Nice!!", "Product Added successful", "success");
                }
            });
    };
    return (
        <div>
            <div className="mt-5">
                <div className="lg:mx-96 p-8 bg-slate-200 rounded">
                    <div className="w-full">
                        <img className="mx-auto w-full rounded-t" src={appleProduct.URL} alt="" />
                    </div>
                    <div className="p-5 flex flex-col justify-between rounded-b bg-yellow-400 hover:bg-yellow-300 duration-300">
                        <div className="">
                            <p className="font-bold text-xl">Name : {appleProduct.name}</p>
                            <p>Description : {appleProduct.description}</p>
                            <p className="font-medium">Price : {appleProduct.price}</p>
                            <p className="font-medium">Type : {appleProduct.productType}</p>
                            <p className="font-medium">Brand : {appleProduct.brand}</p>
                            <span className="font-medium">Rating : {appleProduct.rating}
                            </span>
                        </div>
                        <div className="">
                            <button onClick={handleAddToCart} className="bg-sky-500 w-full hover:bg-sky-600 duration-200 px-7 py-1 rounded mt-1 font-medium">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsApple;