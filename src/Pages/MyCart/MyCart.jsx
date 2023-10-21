import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const MyCart = () => {
    const loadedMyCart = useLoaderData();
    const [myCart, setMyCart] = useState(loadedMyCart);
    const handleRemove = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data?.deletedCount > 0){
                    const remaining = myCart?.filter(product => product._id !== id);
                    setMyCart(remaining);
                    swal("Nice!!", "Product Remove successful", "success");
                }
            });
    }
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-5 mt-5 max-w-screen-xl mx-auto">
                {
                    myCart?.map((product) =>
                        <div key={product._id}>
                            <div style={{ height: "16.5rem" }} className="p-5 bg-amber-200 hover:bg-slate-200 duration-200 rounded-md flex">
                                <div className="w-full">
                                    <img className="w-80 h-56 rounded-l-md" src={product.photoURL} alt="" />
                                </div>
                                <div className="p-5 flex flex-col justify-between bg-yellow-400 hover:bg-yellow-300 duration-300 h-full rounded-r-md w-full">
                                    <div className="">
                                        <p className="font-bold text-xl">Name : {product.name}</p>
                                        <p className="font-medium">Price : {product.price}</p>
                                        <p className="font-medium">Type : {product.productType}</p>
                                        <p className="font-medium">Brand : {product.brand}</p>
                                        <span className="font-medium">Rating : {product.rating}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="bg-green-500 hover:bg-green-600 duration-200 lg:px-7 lg:py-1 rounded text-sm px-2 lg:text-base mt-1 font-medium">Buy</button>
                                        <button onClick={() => handleRemove(product._id)} className="bg-green-500 hover:bg-green-600 duration-200 lg:px-7 text-sm px-2 lg:text-base lg:py-1 rounded mt-1 font-medium">Remove To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className="flex justify-center mt-5">
                <button className="text-2xl bg-green-400 hover:bg-green-500 duration-300 hover:px-12 hover:text-3xl px-10 py-2 font-medium  rounded-md border">Buy All Product</button>
            </div>
        </div>
    );
};

export default MyCart;