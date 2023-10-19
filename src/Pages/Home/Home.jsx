import { useLoaderData } from "react-router-dom";
import BannerSlider from "./Shared/bannerSlider/BannerSlider";
import ProductBrand from "./Shared/ProduceBrand/ProductBrand";

const Home = () => {
    const brands = useLoaderData();
    
    return (
        <div>
            <BannerSlider></BannerSlider>
            <div className="">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {
                        brands?.map(brand => <ProductBrand key={brand._id} brand={brand} ></ProductBrand>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;