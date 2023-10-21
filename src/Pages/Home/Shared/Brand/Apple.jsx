import { Link, useLoaderData } from "react-router-dom";
import Advertisement from "../Advertisement/Advertisement";

const Apple = () => {
    const apple = useLoaderData();
    return (
        <div>
            <Advertisement></Advertisement>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 mt-5 hover:shadow-xl max-w-screen-xl mx-auto">
                {
                    apple?.map((product) =>
                        <div key={product._id}>
                            <div className="p-5 lg:h-[16.5rem] bg-amber-200 hover:bg-slate-200 duration-200 rounded-md flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <img className="lg:w-80 lg:h-56 rounded-l-md" src={product.URL} alt="" />
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
                                        <Link to={`/productDetailsApple/${product._id}`} ><button className="bg-green-500 hover:bg-green-600 duration-200 px-7 py-1 rounded mt-1 font-medium">Details</button></Link>
                                        <Link to={`/updateApple/${product._id}`}><button className="bg-green-500 hover:bg-green-600 duration-200 px-7 py-1 rounded mt-1 font-medium">Update</button></Link>                                        
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Apple;