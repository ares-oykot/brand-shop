import { useLoaderData } from "react-router-dom";
import BannerSlider from "./Shared/bannerSlider/BannerSlider";
import ProductBrand from "./Shared/ProduceBrand/ProductBrand";
import Available from "./Shared/Available/Available";
import History from "./Shared/History/History";

const Home = () => {
    const brands = useLoaderData();
    
    return (
        <div>
            <BannerSlider></BannerSlider>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 lg:mt-10">
                    {
                        brands?.map(brand => <ProductBrand key={brand._id} brand={brand} ></ProductBrand>)
                    }
                </div>
            </div>
            <History></History>
            <Available></Available>
        </div>
    );
};

export default Home;