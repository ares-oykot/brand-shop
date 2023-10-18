const ProductBrand = ({ brand }) => {
    const { name, photo } = brand || {};
    const handleSeeMore = () => {
        console.log('see More')
    }
    return (
        <div style={{ height: "28rem" }} className="">
            <div onClick={handleSeeMore} className="mt-3 hover:mt-0 duration-300 hover:shadow-2xl">
                <div className="bg-orange-200 text-center">
                    <div className="">
                        <img className="w-full h-56" src={photo} alt="" />
                    </div>
                    <p className="mt-5 font-medium">G A D G E T G E A R</p>
                    <h1 className="my-5 text-orange-600 text-5xl font-black">{name}</h1>
                    <button className="my-5 bg-orange-600 font-medium py-2 rounded-3xl w-full lg:w-80 px-4">Click to see more products</button>
                </div>
            </div>
        </div>
    );
};
export default ProductBrand;