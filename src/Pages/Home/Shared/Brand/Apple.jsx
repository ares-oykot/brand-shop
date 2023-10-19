import { useLoaderData } from "react-router-dom";
import Advertisement from "../Advertisement/Advertisement";

const Apple = () => {
    const apple = useLoaderData();
    console.log(apple);
    return (
        <div>
            <Advertisement></Advertisement>
            {
                apple?.map(product => 
                <div key={product._id}>
                    
                </div>)
            }
        </div>
    );
};

export default Apple;