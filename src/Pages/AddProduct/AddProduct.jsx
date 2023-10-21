import { useState } from "react";
import product from "../../assets/product.png"
const AddProduct = () => {
    const [brand, setBrand] = useState('apple');
    const [productType, setProductType] = useState('phone');
    const handleSelectBrand = (event) => {
        setBrand(event.target.value);
    };

    const handleSelectType = (event) => {
        setProductType(event.target.value);
    };

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const URL = form.photo.value;
        const products = { name, price, description, rating, URL, productType, brand };
        fetch(`https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/${brand}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };
    return (
        <div className="">
            <h1 className="text-5xl font-bold text-center">Add Product</h1>
            <div className="">
                <div className="md:w-1/2 mx-auto shadow-xl">
                    <img className='h-[170px] lg:h-[280px] w-full' src={product} alt="" />
                    <form onSubmit={handleAddProduct} className="px-8 card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Product Name" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter Product Price" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Enter Product Description" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Enter Product Rating" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter Product Photo URL" className="input bg-white input-bordered" />
                        </div>
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select onChange={handleSelectBrand} value={brand} className="select select-bordered bg-white text-black w-full">
                            <option value="apple">Apple</option>
                            <option value="samsung">Samsung</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="google">Google</option>
                            <option value="asus">Asus</option>
                            <option value="sony">Sony</option>
                        </select>


                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <select onChange={handleSelectType} value={productType} className="select select-bordered bg-white text-black w-full">
                            <option value="phone">Phone</option>
                            <option value="laptop">Laptop</option>
                            <option value="monitor">Monitor</option>
                            <option value="watch">Watch</option>
                            <option value="camera">Camera</option>
                            <option value="earphone">Earphone</option>
                            <option value="bluetooth">Bluetooth</option>
                        </select>
                        <div className="form-control">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;