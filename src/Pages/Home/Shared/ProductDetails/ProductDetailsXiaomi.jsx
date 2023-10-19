import { useLoaderData } from "react-router-dom";

const ProductDetailsXiaomi = () => {
    const xiaomiProduct = useLoaderData();
    return (
        <div>
            <div className="mt-5">
                <div className="mx-96 p-8 bg-slate-200 rounded">
                    <div className="w-full">
                        <img className="mx-auto w-full rounded-t" src={xiaomiProduct.URL} alt="" />
                    </div>
                    <div className="p-5 flex flex-col justify-between rounded-b bg-yellow-400 hover:bg-yellow-300 duration-300">
                        <div className="">
                            <p className="font-bold text-xl">Name : {xiaomiProduct.name}</p>
                            <p className="font-medium">Price : {xiaomiProduct.price}</p>
                            <p className="font-medium">Type : {xiaomiProduct.productType}</p>
                            <p className="font-medium">Brand : {xiaomiProduct.brand}</p>
                            <span className="font-medium">Rating : {xiaomiProduct.rating}
                            </span>
                        </div>
                        <div className="">
                            <button className="bg-sky-500 w-full hover:bg-sky-600 duration-200 px-7 py-1 rounded mt-1 font-medium">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsXiaomi;